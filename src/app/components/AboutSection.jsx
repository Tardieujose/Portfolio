"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
<ul className="list-disc" style={{ columns: "3" }}>
        <li>Next.js</li>
        <li>C++</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Git</li>
        <li>Redux</li>
        <li>Express</li>
        <li>Node.js</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>SoyHenry Fullstack Academy</li>
        <li>National University of San Luis, Argentina</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Developer</li>
        <li>Cambridge University English Exams (K.E.T, P.E.T, FIRST)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Hello, my name is José Alberto Tardieu and I am from San Luis, Argentina. Since I was a child I have been interested in technology and I am excited to see how it grows every day.

My path in this IT world began at the National University of San Luis studying the degree of University Technician in Electronics until I reached my last year. Then the pandemic arrived and it changed my life forever, discovering a whole new world regarding programming and that's how in 2022 I decided to apply to the SoyHenry bootcamp.

Today I can say that I am super excited and prepared to apply my new knowledge and continue growing as a Full Stack developer!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
