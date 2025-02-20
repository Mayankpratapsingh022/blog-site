"use client";
import React from "react";
import { NAV_LIST } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function MobileNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] place-items-center overflow-auto py-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden">
      <div className="relative z-20 flex flex-col items-center gap-6 rounded-md border border-secondary/80 bg-secondary p-4 text-popover-foreground shadow-md">
        {NAV_LIST.filter((item) => item.label === "Blog" || item.label === "Profile").map((item) => (
          <Link
            key={item.label + item.path}
            href={item.path}
            onClick={() => router.push(item.path)}
            className={cn(
              "transition-colors hover:text-primary flex items-center",
              pathname === item.path ? "text-primary" : "text-muted-foreground"
            )}
          >
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}