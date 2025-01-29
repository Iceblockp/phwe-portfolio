import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-4">
          <p className="text-base">Hi I am</p>
          <h1 className="space-y-1">
            <span className="text-pink-500 block text-3xl md:text-4xl lg:text-5xl font-bold">
              Hnin Shwe Sin Phwe
            </span>
            <div className="space-y-1">
              <span className="block text-3xl md:text-4xl lg:text-5xl font-bold">
                UI & UX
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-bold">
                Designer
              </span>
            </div>
          </h1>
          <p className="text-gray-600 text-base leading-relaxed max-w-[540px]">
            I design user-centered solutions that blend creativity with
            functionality. I worked as a freelance UI/UX designer at InnoUse
            from October 2024 to November 2024. I also completed an internship
            as a UI/UX designer at MUST from November 2024 to January 2025.
          </p>
          <Button className="bg-pink-500 hover:bg-pink-600 mt-4">
            Hire Me
          </Button>
        </div>
        <div className=" flex justify-center md:justify-end">
          <div>
            <div className="relative">
              <div className=" w-full aspect-square sm:size-[540px] rounded-full border-[12px] border-pink-200 absolute bottom-0 -z-10 "></div>
              <div className=" w-full aspect-[5/6] sm:w-[540px] sm:h-[660px] rounded-b-[270px] border-[12px] border-transparent border-b-pink-200 overflow-hidden">
                <Image
                  src={`/img/profile1.png`}
                  alt="Profile"
                  width={800}
                  height={1000}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex gap-6 pt-6 justify-center">
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
          </div>
        </div>
      </div>
    </section>
  );
}
