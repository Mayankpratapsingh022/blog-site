import authorAvatar from "../../public/images/author/mayankpratapsingh.jpg";
export const siteConfig = {
  name: "Mayank's Blogs",
  description:
    "This is Mayank's technical blogs on computer science topics ,mostly in ML,DL and LLMs ",
  author: "mayankpratapsingh",
  authorImage: authorAvatar,
  social: {
    github: "https://github.com/Mayankpratapsingh022",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },
};

export type SiteConfig = typeof siteConfig;
