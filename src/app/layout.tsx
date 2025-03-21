import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lexend } from "next/font/google";
import "@/styles/globals.css";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import App from "@/components/app";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export const metadata: Metadata = {
  title: {
    template: "%s | Mayank Pratap Singh ML Blogs",
    default: "ML,DL LLMs blogs",
  },
};

const fontCode = localFont({
  src: "../assets/fonts/GeistMonoVF.woff2",
  variable: "--font-code",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen antialiased font-lexend bg-background",
          lexend.variable,
          fontCode.variable,
        )}
      >
        <App>{children}</App>
      </body>
    </html>
  );
}
