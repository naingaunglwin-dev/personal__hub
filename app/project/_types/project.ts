export type Tech = "php" | "javascript" | "codeigniter" | "laravel" | "flutter" | "react";

export interface Project {
    title: string;
    description: string;
    tech: Tech[],
    link: string;
    image?: string;
}
