import Link from "next/link";
import { Button } from "@/components/ui/button";
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

export function Nav() {
  return (
    <nav className="py-3 px-4 md:px-6  sticky top-0 bg-white border-b z-20 ">
      <div className=" flex items-center justify-between max-w-[1420px] mx-auto ">
        <Link href="/" className="flex items-center gap-2">
          <ProfileLogo />
        </Link>
        <div className="flex items-center gap-8">
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
        </div>
        <Button
          variant="default"
          className="bg-pink-500 hover:bg-pink-600 px-6"
        >
          Download CV
        </Button>
      </div>
    </nav>
  );
}
