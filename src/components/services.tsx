import { Monitor, Smartphone, Brain, Layout } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Layout className="size-8" />,
      title: "UI/UX",
      description:
        "UI/UX design focused on research, wireframing, and prototyping for seamless experiences",
    },
    {
      icon: <Monitor className="size-8" />,
      title: "Web Design",
      description:
        "I design responsive, user-friendly websites that combine functionality and aesthetics",
    },
    {
      icon: <Smartphone className="size-8" />,
      title: "App Design",
      description:
        "I create intuitive and visually engaging app designs focused on enhancing user experience",
    },
    {
      icon: <Brain className="size-8" />,
      title: "AI",
      description:
        "I provide AI-driven design solutions for intuitive and user-focused digital experiences",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 md:px-6">
      <div className="container mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Services</h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-[800px] mx-auto">
            I provide UI/UX design services including user research,
            wireframing, and prototyping to create intuitive and visually
            engaging digital experiences that meet client needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 rounded-lg border hover:shadow-lg transition-shadow"
            >
              <div className="text-pink-500 mb-6">{service.icon}</div>
              <h3 className="font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
