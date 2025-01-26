import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export function About() {
  const skills = [
    { name: "UX", value: 90 },
    { name: "Website Design", value: 85 },
    { name: "App Design", value: 80 },
    { name: "AI", value: 75 },
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative flex justify-center md:justify-start">
          <div className="aspect-square w-[400px] rounded-full overflow-hidden border-[12px] border-pink-100">
            <Image
              src={`/img/profile2.png`}
              alt="About"
              width={500}
              height={500}
              className="object-cover ml-10 w-[350px] h-full"
            />
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            I&apos;m a passionate UI/UX designer. I have skilled in user
            research, communication, presentation, and teamwork. I use system
            thinking to create user-centered designs and collaborate effectively
            with developers to deliver seamless digital experiences.
          </p>
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-base">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <Progress value={skill.value} className="h-2 bg-pink-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
