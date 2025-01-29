"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

const ProfileLogo = () => {
  return (
    <div className="  ">
      <Image
        src={"/img/profile1.png"}
        alt="profi"
        width={500}
        height={400}
        className=" size-[40px] rounded-full object-cover object-top border shadow-dialog shadow-orange-400 "
      />
      <div className=" flex flex-col text-center justify-between ">
        <h1 className=" leading-3 text-sm ">HSSP</h1>
        <p className=" text-[8px] ">ui designer</p>
      </div>
    </div>
  );
};

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="py-3 px-6 sticky top-0 z-20 h-[88px] bg-white border-b flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <ProfileLogo />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm font-medium hover:text-pink-500"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <Button
        variant="default"
        className=" bg-gradient-to-br from-firstGradient to-secondGradient hidden lg:block  px-6"
      >
        Download CV
      </Button>

      {/* Mobile Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="lg:hidden" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col gap-6 mt-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium hover:text-pink-500"
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="default"
              className=" bg-gradient-to-br from-firstGradient to-secondGradient px-6 mt-4"
            >
              Download CV
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
