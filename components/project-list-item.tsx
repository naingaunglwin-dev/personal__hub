import * as React from "react";
import Badge from "@/components/ui/badge";
import { ProjectProps } from "@/types/project";
import { FaGithub } from "react-icons/fa";

interface Props {
  project: ProjectProps;
  onSelect: (project: ProjectProps) => void;
}

export function ProjectListItem({ project, onSelect }: Props) {
  return (
    <div
      onClick={() => onSelect(project)}
      className="
        group cursor-pointer
        flex items-center gap-5
        w-full min-h-28 h-fit
        px-5 py-4
        rounded-xl
        border border-gray-200
        bg-white
        hover:bg-gray-50
        shadow-sm
      "
    >
      <div className="w-20 h-20 rounded-lg bg-gray-100 flex-shrink-0 overflow-hidden">
        {project.image ? (
          <img
            src={`projects/${project.image}.png`}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
            No preview
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-mono font-semibold text-lg text-gray-900 truncate">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {project.description}
        </p>

        <div className="mt-2 flex gap-2 flex-wrap">
          {project.tech.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>

      <div
        className="flex items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <a
          href={`https://github.com/${project.link}`}
          target="_blank"
          className="text-sm text-gray-600 hover:text-black"
        >
          <FaGithub className="w-5 h-5"/>
        </a>
      </div>
    </div>
  );
}
