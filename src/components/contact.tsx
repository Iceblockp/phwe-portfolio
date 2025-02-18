"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent } from "react";

export function Contact() {
  const handleContact = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const subject = formData.get("subject") as string;
    const messege = formData.get("messege");

    const mailtoLink = `mailto:phwephwe8812@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`From: ${email}\n\n${messege}`)}`;

    window.location.href = mailtoLink;
  };
  return (
    <section id="contact" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-[700px] text-center space-y-10">
        {/* Header */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Let&apos;s Design Together
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mt-2">
            Have an idea or a project in mind? Contact me to create exceptional
            user experiences together!
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
          <h3 className="text-2xl font-semibold">Send a Message</h3>
          <form className="space-y-4" onSubmit={handleContact}>
            <Input
              type="email"
              placeholder="Your Email"
              name="email"
              className="h-12"
              required
            />
            <Input
              type="text"
              placeholder="Subject"
              name="subject"
              className="h-12"
              required
            />
            <Textarea
              placeholder="Your Message"
              name="messege"
              rows={5}
              className="h-auto"
              required
            />
            <Button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 h-12 w-full text-white font-semibold"
            >
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">Contact Information</h3>
          <p className="text-gray-600">
            <span className="font-bold">Email:</span> phwephwe8812@gmail.com
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Phone:</span> +959 881 262 757 , +959
            957 427 809
          </p>
        </div>
      </div>
    </section>
  );
}
