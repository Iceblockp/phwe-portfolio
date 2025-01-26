import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-[600px] text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Let&apos;s Design Together
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          Let&apos;s bring your ideas to life! Contact me today to discuss how
          we can create exceptional user experiences together
        </p>
        <div className="flex gap-4 mt-8">
          <Input type="email" placeholder="Enter Your Email" className="h-12" />
          <Button className="bg-pink-500 hover:bg-pink-600 h-12 px-8">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
