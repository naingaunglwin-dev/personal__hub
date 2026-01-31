import { Tech } from "./tech";

export interface ProjectProps {
  title: string;
  description: string;
  tech: Tech[],
  link: string;
  image?: string;
}
