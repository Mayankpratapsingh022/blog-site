import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Bot, Rss } from "lucide-react";

export const NAV_LIST = [
  { label: "Home", path: "/", icon: Rss },
  { label: "Portfolio", path: "https://www.mayankpratapsingh.in/", icon: Bot },
  { label: "X", path: "https://x.com/Mayank_022", icon: Bot },

];

export const SOCIALS = [
  { label: "Github", path: siteConfig.social.github, icon: Icons.github },
  { label: "Facebook", path: siteConfig.social.facebook, icon: Icons.facebook },
  { label: "Twitter", path: siteConfig.social.twitter, icon: Icons.x },
];
