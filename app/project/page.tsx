'use client';

import { ProjectListItem } from "@/app/project/_components/project-list-item";
import { useEffect, useState } from "react";
import Modal from "@/components/modal";
import Badge from "@/components/ui/badge";
import * as React from "react";
import { FaGithub } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { ProjectsData } from "@/app/project/_data/project";
import { Project as ProjectProps, Tech } from "@/app/project/_types/project"
import { PageContainer } from "@/components/page-container";

export default function Project() {

  const [active, setActive] = useState<ProjectProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "naingaunglwin.dev@gmail.com";

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

  const handleCopy = async () => {
    if (!navigator?.clipboard) {
      const textarea = document.createElement('textarea')
      textarea.value = email
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    } else {
      await navigator.clipboard.writeText(email)
    }

    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <PageContainer
      className="font-sans"
      borderLeft={true}
    >
      {copied && (
        <div className="absolute top-52 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-90 z-50">
          Copied!
        </div>
      )}

      <div className="relative w-full pb-4">
        <div className="w-full sm:w-11/12 lg:w-1/2 m-auto space-y-7">
          <div className="lg:border-l-4 border-gray-500 ps-4 pt-2 text-4xl">#Project</div>
          <div className="w-11/12 xl:w-2/3 m-auto">
            <div className="text-lg md:text-2xl font-anek-devanagari my-16">
              “If you have an idea, a question, or just want to talk about tech,
              feel free to reach out at <span onClick={handleCopy} className="font-bold hover:cursor-pointer">{email}</span>”
            </div>
            <div className="space-y-4">
              {ProjectsData.map((project: ProjectProps) => (
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
          </Modal>
        )}
      </AnimatePresence>
    </PageContainer>
  );
}
