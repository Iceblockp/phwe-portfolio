"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Food Delivery App",
    category: "App Design",
    description:
      "A food delivery app offering quick, easy ordering, real-time tracking, and a wide range of restaurant options, bringing delicious meals straight to your doorstep",
    image: "/img/food-delivery.png",
  },
  {
    title: "E-Learning (Eduo)",
    category: "Web Design",
    description:
      "Eduo is an e-learning platform offering interactive courses, personalized learning paths, and engaging tools to enhance skill development and education.",
    image: "/img/e-learning.png",
  },
  {
    title: "Solution for food delivery app",
    category: "Solution Design",
    description:
      "A food delivery app solution with real-time tracking, seamless payments, and user-friendly interfaces for customers and partners",
    image: "/img/solution.png",
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
                className="rounded-lg object-cover w-full aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
