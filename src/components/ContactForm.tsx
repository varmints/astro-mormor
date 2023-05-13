import {
  ChangeEvent,
  FormEvent,
  useState,
  useRef,
  useLayoutEffect,
} from "react";
import Turnstile from "react-turnstile";

import "~/styles/contact-form.css";

type FormState = {
  email: string;
  message: string;
};

type ServiceMessage = {
  class: string;
  text: string;
};

const ContactForm = () => {
  const [initialHeight, setInitialHeight] = useState(0);
  const [initialBorderWidth, setInitialBorderWidth] = useState(0);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const formId = "zjyGPPkG";
  const formSparkUrl = `https://submit-form.com/${formId}`;
  const captchaKey = "0x4AAAAAAAB45MXKoTcf0Pxb";

  const initialFormState = {
    email: "",
    message: "",
  };

  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<ServiceMessage>();
  const [captchaToken, setCaptchaToken] = useState<string>();

  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
  };

  const postSubmission = async () => {
    const payload = {
      ...formState,
      "cf-turnstile-response": captchaToken,
    };

    try {
      const result = await fetch(formSparkUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!result.ok) {
        throw new Error("Something went wrong.");
      }
      setMessage({
        class: "bg-green-700",
        text: "Dzięki, wkrótce się skontaktuję.",
      });
      setFormState(initialFormState);
    } catch (error) {
      setMessage({
        class: "bg-red-700",
        text: "Przepraszam, wystąpił problem. Spróbuj ponownie lub skontaktuj się za pośrednictwem mediów społecznościwych.",
      });
    }
  };

  const updateFormControl = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    const key = id as keyof FormState;
    const updatedFormState = { ...formState };
    updatedFormState[key] = value;
    setFormState(updatedFormState);
  };

  const autosizeTextArea = () => {
    textAreaRef.current!.style.height = `${initialHeight}px`;
    const newHeight = textAreaRef.current!.scrollHeight + initialBorderWidth;
    textAreaRef.current!.style.height = `${newHeight}px`;
  };

  const updateCaptchaToken = (token: string | null) => {
    setCaptchaToken(token as string);
  };

  useLayoutEffect(() => {
    setInitialHeight(
      parseInt(
        getComputedStyle(textAreaRef.current!).getPropertyValue("height")
      )
    );
    setInitialBorderWidth(
      parseInt(
        getComputedStyle(textAreaRef.current!).getPropertyValue(
          "border-bottom-width"
        )
      )
    );
  }, []);

  return (
    <form onSubmit={submitForm} className="mx-auto">
      <div className="divide-y">
        <div className="space-y-10 leading-7">
          {message && (
            <div className={`mb-4 w-full p-4 text-white ${message.class}`}>
              {message.text}
            </div>
          )}
          <div onSubmit={submitForm} className="relative">
            <input
              id="email"
              name="email"
              type="email"
              value={formState?.email}
              onChange={updateFormControl}
              className="peer h-10 w-full border-b-2 border-current bg-transparent placeholder-transparent text-sm focus:outline-none"
              placeholder="Adres email"
              required
            />
            <label
              htmlFor="email"
              className="absolute -top-5 left-0 cursor-text text-offset transition-all text-sm peer-placeholder-shown:top-0 peer-placeholder-shown:text-current peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-offset peer-focus:text-sm"
            >
              Adres email
            </label>
          </div>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formState?.message}
              onChange={(e) => {
                updateFormControl(e);
                autosizeTextArea();
              }}
              ref={textAreaRef}
              className="peer h-52 w-full border-b-2 border-current bg-transparent pb-1.5 placeholder-transparent text-sm focus:outline-none"
              minLength={8}
              placeholder="Treść wiadomości"
              required
            ></textarea>
            <label
              htmlFor="message"
              className="absolute -top-7 left-0 cursor-text text-offset transition-all text-sm peer-placeholder-shown:top-0 peer-placeholder-shown:text-current peer-placeholder-shown:text-base peer-focus:-top-7 peer-focus:text-offset peer-focus:text-sm"
            >
              Treść wiadomości
            </label>
          </div>
          <div className="flex justify-center">
            <Turnstile
              sitekey={captchaKey}
              onVerify={updateCaptchaToken}
              theme="dark"
            />
            <button
              disabled={submitting}
              className="flex items-center justify-center gap-3 border-2 border-current px-6 py-4 text-center hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-transparent"
            >
              {submitting ? "Wysyłanie..." : "Wyślij wiadomość"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
