"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading title="About Me" />
      <p className="mb-3">
        I am currently pursuing my bachelor&apos;s degree in{" "}
        <span className="font-medium">Software Engineering</span>. With a
        passion for programming, I am consistently eager and enthusiastic about
        acquiring new knowledge. I have also acquired expertise in{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with C++, TypeScript, and MySQL. I am always
        looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">suitable position</span> as a software
        developer.
      </p>
    </motion.section>
  );
}
