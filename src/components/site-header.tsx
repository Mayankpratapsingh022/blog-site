"use client";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import HeaderNav from "@/components/header-nav";
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background px-2">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3 text-primary">
            
            <span className="font-bold">{siteConfig.name}</span>
          </Link>
        </div>
        <div className="flex items-center space-x-5 md:space-x-6">
          <HeaderNav />
          
  
      
        </div>
      </div>
    
    </header>
  );
}
