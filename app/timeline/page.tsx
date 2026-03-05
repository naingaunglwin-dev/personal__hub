'use client';

import { motion } from "framer-motion";
import { TimelineData } from "@/app/timeline/_data/timeline";
import { PageContainer } from "@/components/page-container";

export default function Timeline() {

  return (
    <PageContainer
      className="font-anek-devanagari"
      borderLeft={true}
    >
      <div className="relative w-full">
        <div className="w-full sm:w-2/3 lg:w-1/2 m-auto space-y-14">
          <div className="lg:border-l-4 border-gray-500 ps-4 pt-2 text-4xl">#Timeline</div>
          <div className="max-w-4xl m-auto mb-5 space-y-10">
            <ol className="relative space-y-16 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-200 dark:before:bg-gray-700">
              {TimelineData.map((tm, index) => (
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
    </PageContainer>
  );
}
