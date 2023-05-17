export type SocialLink = {
  platform: string;
  href: string;
  me?: string;
  text: string;
  icon: string;
  footerOnly?: boolean;
};

export type SiteInfo = {
  name: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  socialLinks: SocialLink[];
};

const siteInfo: SiteInfo = {
  name: "mormor",
  title: "Strona internetowa, którą chcesz",
  description: "Build fast websites, faster with me. mormor is here.",
  image: {
    src: "/og/social.jpg",
    alt: "Build the web you want",
  },
  socialLinks: [
    {
      platform: "github",
      href: "https://github.com/withastro/astro",
      me: "https://github.com/withastro/",
      text: "Go to mormor GitHub repo",
      icon: "fa-brands:github-alt",
    },
    {
      platform: "instagram",
      href: "https://www.instagram.com/foto.tfurca/",
      me: "https://www.instagram.com/foto.tfurca/",
      text: "Follow mormor on Instagram",
      footerOnly: true,
      icon: "fa-brands:instagram",
    },
  ],
};

export default siteInfo;
