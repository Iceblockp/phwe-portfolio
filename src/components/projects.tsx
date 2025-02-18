"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  category: "App Design" | "Web Design" | "Solution Design";
  description: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Food Delivery App",
    category: "App Design",
    description:
      "A food delivery app offering quick, easy ordering, real-time tracking, and a wide range of restaurant options, bringing delicious meals straight to your doorstep",
    image: "/img/food-delivery.png",
    link: "https://www.figma.com/design/2vvoLTIt8x3b3ZjScXF9tn/PROJECT?node-id=676-2&t=x4e6nwqayApU37D6-1",
  },
  {
    title: "E-Learning (Eduo)",
    category: "Web Design",
    description:
      "Eduo is an e-learning platform offering interactive courses, personalized learning paths, and engaging tools to enhance skill development and education.",
    image: "/img/e-learning.png",
    link: "https://www.figma.com/design/2vvoLTIt8x3b3ZjScXF9tn/PROJECT?node-id=475-2751&t=x4e6nwqayApU37D6-1",
  },
  {
    title: "Solution for food delivery app",
    category: "Solution Design",
    description:
      "A food delivery app solution with real-time tracking, seamless payments, and user-friendly interfaces for customers and partners",
    image: "/img/solution.png",
    link: "https://www.figma.com/board/yAxb1Nc4iTfXbDR65uVhPs/solution-for-food-order-app?node-id=0-1&t=LELUbMqPcxYAte4X-1",
  },
  {
    title: "Mizzle (Reference)",
    category: "Web Design",
    description:
      "A creative studio specializing in innovative design solutions, combining art and strategy to deliver unique branding, digital experiences, and impactful visuals.",
    image: "/img/mizzle.png",
    link: "https://www.figma.com/design/2vvoLTIt8x3b3ZjScXF9tn/PROJECT?node-id=869-2&t=x4e6nwqayApU37D6-1",
  },
  {
    title: "Typography practise",
    category: "Web Design",
    description:
      "An IT service company website showcasing innovative solutions, expert consulting, and cutting-edge technologies to drive business growth and digital transformation.",
    image: "/img/typography.png",
    link: "https://www.figma.com/design/2vvoLTIt8x3b3ZjScXF9tn/PROJECT?node-id=3-4183&t=x4e6nwqayApU37D6-1",
  },
  {
    title: "Color theory practise",
    category: "Web Design",
    description:
      "A color theory practice involves exploring color combinations, contrasts, and harmonies to enhance design aesthetics and create visually impactful compositions.",
    image: "/img/color-theory.png",
    link: "https://www.figma.com/design/2vvoLTIt8x3b3ZjScXF9tn/PROJECT?node-id=3-585&t=x4e6nwqayApU37D6-1",
  },
  {
    title: "Real Estate",
    category: "Web Design",
    description:
      "Sky Star is a real estate platform offering seamless property searches, detailed listings, and expert guidance to help you find your dream home or investment.",
    image: "/img/real-estate.png",
    link: "https://www.figma.com/design/2vvoLTIt8x3b3ZjScXF9tn/PROJECT?node-id=676-13884&t=x4e6nwqayApU37D6-1",
  },
  {
    title: "Pathway Academy (LMS)",
    category: "Web Design",
    description:
      "Pathway Academy is an LMS offering seamless tools for interactive learning, personalized dashboards, and efficient education management.",
    image: "/img/pathway.png",
    link: "https://www.figma.com/design/2vvoLTIt8x3b3ZjScXF9tn/PROJECT?node-id=828-2&t=x4e6nwqayApU37D6-1",
  },
  {
    title: "Moana",
    category: "Web Design",
    description:
      "A personal website for Moana, showcasing her journey, achievements, and passion for exploration, with an engaging design that reflects her adventurous spirit",
    image: "/img/moana.png",
    link: "https://www.figma.com/design/2vvoLTIt8x3b3ZjScXF9tn/PROJECT?node-id=842-8321&t=x4e6nwqayApU37D6-1",
  },
  {
    title: "Food delivery (CMS)",
    category: "Web Design",
    description:
      "A food delivery CMS website offering seamless order management, real-time tracking, and an intuitive interface for restaurants and customers.",
    image: "/img/food-cms.png",
    link: "https://www.figma.com/design/2vvoLTIt8x3b3ZjScXF9tn/PROJECT?node-id=676-3588&t=x4e6nwqayApU37D6-1",
  },
  {
    title: "Diet Plan",
    category: "Web Design",
    description:
      "A diet plan website providing personalized meal plans, nutrition tips, and expert guidance to help you achieve your health and fitness goals",
    image: "/img/diet.png",
    link: "https://www.figma.com/design/2vvoLTIt8x3b3ZjScXF9tn/PROJECT?node-id=0-1&t=x4e6nwqayApU37D6-1",
  },
  {
    title: "Mart Web",
    category: "Web Design",
    description:
      "Mart is a versatile e-commerce platform offering a wide range of products with an intuitive shopping experience, secure payments, and fast delivery",
    image: "/img/mart.png",
    link: "https://www.figma.com/design/2vvoLTIt8x3b3ZjScXF9tn/PROJECT?node-id=676-14323&t=x4e6nwqayApU37D6-1",
  },
  {
    title: "Shop Website",
    category: "Web Design",
    description:
      "A decorative furniture shop website offering stylish, high-quality furniture pieces to elevate your home decor, blending elegance with functionality.",
    image: "/img/shop.png",
    link: "https://www.figma.com/design/2vvoLTIt8x3b3ZjScXF9tn/PROJECT?node-id=1-1167&t=x4e6nwqayApU37D6-1",
  },
  {
    title: "Sushi",
    category: "Web Design",
    description:
      "A sushi website showcasing a diverse menu of fresh and authentic sushi, with easy online ordering, exclusive deals, and fast delivery",
    image: "/img/sushi.png",
    link: "https://www.figma.com/design/2vvoLTIt8x3b3ZjScXF9tn/PROJECT?node-id=1-955&t=x4e6nwqayApU37D6-1",
  },
  {
    title: "Furniture App",
    category: "App Design",
    description:
      "A furniture app offering a wide range of stylish and functional furniture, complete with AR visualization, easy navigation, and secure purchasing options",
    image: "/img/furniture.png",
    link: "https://www.figma.com/design/2vvoLTIt8x3b3ZjScXF9tn/PROJECT?node-id=754-2&t=x4e6nwqayApU37D6-1",
  },
  {
    title: "Food App",
    category: "App Design",
    description:
      "A food app offering quick and easy access to local restaurants, menu browsing and menu detail for a convenient dining experience.",
    image: "/img/food-app.png",
    link: "https://www.figma.com/design/2vvoLTIt8x3b3ZjScXF9tn/PROJECT?node-id=3-4182&t=x4e6nwqayApU37D6-1",
  },
  {
    title: "Footwear App",
    category: "App Design",
    description:
      "A footwear app offering a wide range of stylish shoes, easy browsing, secure purchases, and personalized recommendations for the perfect fi",
    image: "/img/footwear.png",
    link: "https://www.figma.com/design/2vvoLTIt8x3b3ZjScXF9tn/PROJECT?node-id=3-2255&t=x4e6nwqayApU37D6-1",
  },
  // Add more projects as needed
];

export function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web Design", "App Design", "Solution Design"];

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <section id="projects" className="py-20 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-[800px] mx-auto">
            My projects highlight user-centered designs, focusing on
            wireframing, prototyping, and enhancing user experiences with
            attention to detail.
          </p>
        </div>
        <div className="flex justify-center gap-6 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              className={
                filter === category ? "bg-pink-500 hover:bg-pink-600" : ""
              }
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.title} className="group relative">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={400}
                className=" object-cover w-full aspect-[4/3]"
              />
              {/* <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h3 className="font-bold text-xl mb-2 leading-5">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 mb-4 text-xs">
                    {project.category}
                  </p>
                  <p className="text-gray-200 mb-4  text-sm">
                    {project.description}
                  </p>
                  <Button
                    variant="outline"
                    className="text-white border-white bg-pink-500 hover:bg-white hover:text-black"
                  >
                    View More
                  </Button>
                </div>
              </div> */}
              <div>
                <div className=" text-black p-6">
                  <h3 className="font-bold text-xl mb-2 leading-5 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4 text-xs">
                    {project.category}
                  </p>
                  <p className="text-gray-800 mb-4  text-sm line-clamp-4">
                    {project.description}
                  </p>
                  <Button
                    variant="outline"
                    className="text-white bg-gradient-to-br from-firstGradient to-secondGradient hover:text-white w-full rounded-none "
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    View Detail
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
