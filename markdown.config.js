import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";

export default {
  remarkPlugins: [
    [remarkToc, { heading: "Spis treści", tight: true }],
    [
      remarkCollapse,
      {
        test: "Spis treści",
        summary: "Otwórz spis treści",
      },
    ],
  ],
  shikiConfig: {
    theme: "one-dark-pro",
    wrap: true,
  },
};
