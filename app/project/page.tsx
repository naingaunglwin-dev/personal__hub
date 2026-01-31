'use client';

import { ProjectProps } from "@/types/project";
import { ProjectListItem } from "@/components/project-list-item";
import { useEffect, useState } from "react";
import Modal from "@/components/modal";
import Badge from "@/components/ui/badge";
import * as React from "react";
import { Tech } from "@/types/tech";
import { FaGithub } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";


export default function Project() {

  const projects: ProjectProps[] = [
    { title: "dotenv", description: "Simple php dotenv library", tech: ["php"], link: "naingaunglwin-dev/dotenv" },
    { title: "view", description: "A lightweight template rendering engine with php", tech: ["php"], link: "naingaunglwin-dev/view" },
    { title: "event-dispatcher", description: "A lightweight and flexible PHP Event Dispatcher package fully compliant with PSR-14", tech: ["php"], link: "naingaunglwin-dev/event-dispatcher" },
    { title: "session", description: "Simple php cookie based session handler", tech: ["php"], link: "naingaunglwin-dev/session" },
    { title: "timetracker", description: "A lightweight time tracker for php", tech: ["php"], link: "naingaunglwin-dev/timetracker" },
    { title: "novaframe", description: "A basic php framework [WIP]", tech: ["php"], image: "novaframe", link: "naingaunglwin-dev/novaframe" },
    { title: "poll", description: "Simple polling system with Codeigniter & Tailwindcss", tech: ["codeigniter"], link: "naingaunglwin-dev/poll" },
    { title: "job-portal", description: "Simple job portal with Codeigniter", tech: ["codeigniter"], link: "naingaunglwin-dev/job-portal" },
    { title: "sorter", description: "A small javascript library, sorting alphabetically and numerically", tech: ["javascript"], link: "naingaunglwin-dev/sorter" },
    { title: "numguesser", description: "Simple number guesser game with javascript", tech: ["javascript"], link: "naingaunglwin-dev/numguesser" },
    { title: "abnews_app", description: "A clone app of hackernews with flutter", tech: ["flutter"], link: "naingaunglwin-dev/abnews_app" },
    { title: "openbook", description: "Openbook is a simple online library application built with Laravel (API backend) and React (frontend)", tech: ["react", "laravel"], link: "naingaunglwin-dev/openbook" },
  ];

  const [active, setActive] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const openModal = (project: ProjectProps) => {
    setActive(project);
    setIsModalOpen(true)
  };
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isModalOpen])

  return (
    <section className="calc-min-h-screen md:calc-min-h-screen-md flex items-center relative overflow-hidden font-sans">
      <span className="hidden lg:block absolute border-l border-gray-200 left-1/4 top-0 bottom-0"></span>
      <div className="relative w-full pb-4">
        <div className="w-full sm:w-11/12 lg:w-1/2 m-auto space-y-7">
          <div className="lg:border-l-4 border-gray-500 ps-4 pt-2 text-4xl">#Project</div>
          <div className="w-11/12 xl:w-2/3 m-auto">
            <div className="space-y-4">
              {projects.map((project) => (
                <ProjectListItem
                  key={project.title}
                  project={project}
                  onSelect={openModal}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        { active && isModalOpen && (
          <Modal onClose={closeModal}>
            <>
              <div className={`${active.image ? 'w-fit m-auto' : 'w-full'} h-48 rounded-lg bg-gray-100 flex-shrink-0 overflow-hidden my-5`} >
                {active.image ? (
                  <img
                    src={`projects/${active.image}.png`}
                    alt={active.title}
                    className="w-fit h-full object-cover m-auto"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                    No preview
                  </div>
                )}
              </div>

              <div className="text-xl font-bold text-center mb-3">{active.title}</div>
              <div className="text-gray-500 text-sm">{active.description}</div>
              <div className="mt-2 flex gap-2 flex-wrap">
                {active.tech.map((tech: Tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
              <div className="mt-6">
                <a href={`https://github.com/${active.link}`} target="_blank" className="flex gap-2 justify-center items-center text-white bg-black pt-3 pb-2 rounded-lg">
                  Github <FaGithub />
                </a>
              </div>
            </>
          </Modal>
        )}
      </AnimatePresence>

    </section>
  );
}
