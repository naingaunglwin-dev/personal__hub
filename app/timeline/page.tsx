'use client';

import { motion } from "framer-motion";
import { TimelineProps } from "@/types/timeline";

export default function Timeline() {

  const timeline: TimelineProps[] = [
    {year: "2025, Sep", description: "Joined the 'One Project One Month' program to develop an API project using Laravel"},
    {year: "2025, End of Aug", description: "Completed the CS50 Python course and received official certificate"},
    {year: "2025, Aug", description: "Enrolled in the CS50 Python course on edx"},
    {year: "Start of 2025", description: "Started learning Next.js and developing a personal portfolio website to showcase projects."},
    {year: "Late 2024-2025", description: "Enhanced a my PHP framework through multiple iterations, improving its architecture and design. Simultaneously built small PHP packages and explored Node.js development"},
    {year: "2024, Mar", description: "Completed the second version of my php framework"},
    {year: "2024", description: "Started developing my own php framework second time"},
    {year: "2023, Dec", description: "Completed the first version of my php framework"},
    {year: "Late 2023", description: "Began learning how frameworks work"},
    {year: "2023, Sep", description: "Completed Laravel class"},
    {year: "2023, Jun", description: "Enrolled in Laravel class at Lobelia Technology"},
    {year: "2023, May", description: "Started working as a full-time developer at AB Programming Development Team"},
    {year: "2022, Sep", description: "Received an OJT offer from AB Programming and began learning Codeigniter (PHP Framework) during OJT period"},
    {year: "2022, Apr", description: "Completed full-stack web development class"},
    {year: "2022, Jan", description: "Enrolled in a full-stack web development class (PHP) at AB Programming"},
    {year: "2021", description: "Started exploring web development"},
  ];

  return (
    <section className="calc-min-h-screen md:calc-min-h-screen-md flex items-center relative overflow-hidden font-anek-devanagari">
      <span className="hidden lg:block absolute border-l border-gray-200 left-1/4 top-0 bottom-0"></span>
      <div className="relative w-full">
        <div className="w-full sm:w-2/3 lg:w-1/2 m-auto space-y-14">
          <div className="lg:border-l-4 border-gray-500 ps-4 pt-2 text-4xl">#Timeline</div>
             <div className="max-w-4xl m-auto mb-5 space-y-10">
               <ol className="relative space-y-16 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-200 dark:before:bg-gray-700">
                 {timeline.map((tm, index) => (
                   <motion.li
                     key={index}
                     className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3"
                     initial={{
                       opacity: 0,
                       x: index % 2 === 0 ? -20 : 20,
                     }}
                     whileInView={{
                       opacity: 1,
                       x: 0,
                     }}
                     transition={{
                       duration: 0.45,
                       ease: [0.22, 1, 0.36, 1], // easeOutCubic
                     }}
                     viewport={{ once: true, margin: "-80px" }}
                   >
                     <div
                       className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last"
                     >
                       <span className="size-3 shrink-0 rounded-full bg-zinc-800"></span>

                       <div className="-mt-2">
                         <h3 className="text-text text-base font-semibold">{tm.year}</h3>

                         <p className="text-gray-700 text-sm mt-1">{tm.description}</p>
                       </div>
                     </div>

                     <div aria-hidden="true"></div>
                   </motion.li>
                 ))}
               </ol>
             </div>
        </div>
      </div>
    </section>
  );
}
