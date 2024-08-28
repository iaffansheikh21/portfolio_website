// "use client"
// import React from 'react'
// import SectionHeading from './section-heading';
// import { skillsData } from '@/lib/data';
// import { useSectionInView } from '@/lib/hooks';
// import { motion } from "framer-motion";

// const fadeInAnimationVariants = {
//     initial: {
//         opacity: 0,
//         y: 100,
//       },
//       animate: (index: number) => ({
//         opacity: 1,
//         y: 0,
//         transition: {
//           delay: 0.05 * index,
//         },
//       }),
//     }

// export default function Skills() {
//     const {ref} = useSectionInView('Skills');
//   return (
//     <section ref={ref} className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40' id='skills'>
//         <SectionHeading title='My Skills'/>
//         <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
//            {
//            skillsData.map((skill , index) =>(
//             <motion.li className='bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80' key={index}
//               variants={fadeInAnimationVariants}
//               initial="initial"
//               whileInView="animate"
//               viewport={{
//                 once: true,
//               }}
//               custom={index}
//               >
//                 {skill}
//             </motion.li>
//            ))
//            } 
//         </ul>
      
//     </section>
//   )
// }

// "use client";
// import React from "react";
// import SectionHeading from "./section-heading";
// import { skillsData } from "@/lib/data";
// import { useSectionInView } from "@/lib/hooks";
// import { motion } from "framer-motion";
// import Tooltip from "@/components/ToolTip"; // Import the Tooltip component

// const fadeInAnimationVariants = {
//   initial: {
//     opacity: 0,
//     y: 100,
//   },
//   animate: (index: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.05 * index,
//     },
//   }),
// };

// export default function Skills() {
//   const { ref } = useSectionInView("Skills");

//   return (
//     <section
//       ref={ref}
//       className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
//       id="skills"
//     >
//       <SectionHeading title="My Skills" />
//       <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
//         {skillsData.map((skill, index) => (
//           <Tooltip key={index} text={skill.name}>
//             <motion.li
//               className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 flex items-center space-x-2"
//               variants={fadeInAnimationVariants}
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: true }}
//               custom={index}
//             >
//               <skill.icon className="text-2xl" /> {/* Icon */}
//             </motion.li>
//           </Tooltip>
//         ))}
//       </ul>
//     </section>
//   );
// }

"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Tooltip from "@/components/ToolTip"; // Import the Tooltip component

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      id="skills"
    >
      <SectionHeading title="My Skills" />
      <ul className="flex flex-wrap justify-center gap-6 text-lg text-gray-800 cursor-pointer">
        {skillsData.map((skill, index) => (
          <Tooltip key={index} text={skill.name}>
            <motion.li
              className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 flex items-center justify-center space-x-2 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.2, rotate: 20 }} // Add rotation and scale on hover
            >
              <skill.icon className="text-3xl" /> {/* Icon with slightly larger size */}
            </motion.li>
          </Tooltip>
        ))}
      </ul>
    </section>
  );
}
