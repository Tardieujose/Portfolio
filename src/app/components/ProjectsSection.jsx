"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next js Portfolio Website",
    description: "SPA using Next.js and Tailwinds",
    image: "/images/projects/next-portfolio.png",
    tag: ["All", "Web"],
    deployUrl: "https://github.com/Tardieujose/Portfolio",
    gitUrl: "https://github.com/Tardieujose/Portfolio.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Nómada Suite",
    description: "Website to search for accommodations while you work in latinamerica",
    image: "/images/projects/banner-nomada.png",
    tag: ["All", "Web"],
    deployUrl: "https://nomadadeploy-g8z9.vercel.app/",
    gitUrl: "https://github.com/Tardieujose/nomadadeploy.git",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Dog's Finder",
    description: "SPA to look for your favorite dog's info. Also can create or modified info for your own dog",
    image: "/images/projects/perritos.png",
    tag: ["All", "Web"],
    deployUrl: "https://pi-dogs-main-beta.vercel.app/",
    gitUrl: "https://github.com/Tardieujose/Dogs-App.git",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "E-commerce",
    description: "Full e-commerce made with Next.js",
    image: "/images/projects/Tienda.png",
    tag: ["All", "Web", "Mobile"],
    deployUrl: "https://badwolf.vercel.app/",
    gitUrl: "https://github.com/Tardieujose/Ecommerce-nextjs.git",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Admin Panel e-commerce",
    description: "Admin panel for e-commerce to view all the orders. Also put and edit the products as well as see important info.",
    image: "/images/projects/admin-tienda.png",
    tag: ["All", "Web", "Mobile"],
    deployUrl: "https://bw-adminpanel.vercel.app/",
    gitUrl: "https://github.com/Tardieujose/Admin-Ecommerce-nextjs.git",
    previewUrl: "/",
  },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-4 py-10">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              deployUrl={project.deployUrl}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
