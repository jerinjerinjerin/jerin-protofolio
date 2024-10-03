"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const Header = () => {
 

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Jerin <span className="text-blue-700">.</span>
          </h1>
        </Link>
{/*         <div className="flex xl:hidden">
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin size-8 text-slate-400" />
          </ClerkLoading>
        </div> */}
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin size-8 text-slate-400" />
          </ClerkLoading>
        </div>
        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
