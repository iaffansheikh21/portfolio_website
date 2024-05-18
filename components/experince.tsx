"use client"
import React from 'react';
import SectionHeading from './section-heading';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <motion.section
      id="experience"
      ref={ref}
      className='scroll-mt-28 mb-28 sm:mb-40 mx-auto' // Centering using mx-auto
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading title="My Experience" />

      <div className="flex flex-col items-cente">
        {experiencesData.map((experience, index) => (
          <div key={index} className="mb-8 w-full max-w-lg p-4 bg-white rounded-md shadow-md dark:text-white/80 dark:bg-white/10">
            <h3 className="text-lg font-semibold mb-2 dark:text-white/80">{experience.title}</h3>
            <p className="text-gray-600 mb-2 dark:text-white/70">{experience.date}</p>
            <p className="text-gray-700 mb-4 dark:text-white/70">{experience.description}</p>
            <p className="text-red-500">Location: <span className='text-gray-600 dark:text-white/75'> {experience.location}</span></p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}