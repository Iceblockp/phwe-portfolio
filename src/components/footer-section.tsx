import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

const ProfileLogo = () => {
  return (
    <div className="  ">
      <Image
        src={"/img/profile1.png"}
        alt="profi"
        width={500}
        height={400}
        className=" size-[56px] rounded-full object-cover object-top border shadow-dialog shadow-orange-400 "
      />
      <div className=" flex flex-col text-center justify-between ">
        <h1 className=" leading-3 text-sm ">HSSP</h1>
        <p className=" text-[8px] ">ui designer</p>
      </div>
    </div>
  );
};

export function Footer() {
  return (
    <footer className="py-12 px-4 md:px-6 border-t">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8">
          <ProfileLogo />
          <nav className="flex gap-8">
            <Link href="/" className="text-sm font-medium hover:text-pink-500">
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-pink-500"
            >
              About Me
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-pink-500"
            >
              Services
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-pink-500"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-pink-500"
            >
              Contact
            </Link>
          </nav>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-600 hover:text-pink-500">
              <Facebook className="size-6" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-pink-500">
              <Twitter className="size-6" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-pink-500">
              <Instagram className="size-6" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-pink-500">
              <Linkedin className="size-6" />
            </Link>
          </div>
          <p className="text-sm text-gray-600">
            © 2024 Portfolio. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
