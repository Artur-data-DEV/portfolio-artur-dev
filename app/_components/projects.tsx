"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { projects } from "@/app/_utils/data";
import { FaFolderClosed, FaFolderOpen, FaGithub } from "react-icons/fa6";

const Projects = () => {
  const [openedProjects, setOpenedProjects] = useState<string[]>([]);

  useEffect(() => {
    // Limpa a lista de projetos abertos no localStorage quando o componente é montado
    localStorage.removeItem("openedProjects");
    setOpenedProjects([]);
  }, []);

  const handleLinkClick = (projectId: string) => {
    if (!openedProjects.includes(projectId)) {
      // Atualiza o estado com o novo projeto aberto
      const newOpenedProjects = [...openedProjects, projectId];
      setOpenedProjects(newOpenedProjects);
      // Armazena a nova lista de projetos abertos no localStorage
      localStorage.setItem("openedProjects", JSON.stringify(newOpenedProjects));
    }
  };

  return (
    <div className="p-8">
      <h2 className="mb-4 text-2xl font-bold">Projetos</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects?.map((project: any) => (
          <div
            className="rounded-lg bg-white p-4 shadow-md"
            key={project.id.toString()}
          >
            <div className="mb-2 flex items-center justify-between">
              {openedProjects.includes(project.id.toString()) ? (
                <FaFolderOpen className="text-blue-500" />
              ) : (
                <FaFolderClosed className="text-blue-500" />
              )}
              <div className="ml-auto">
                <Link
                  href={project.githubUrl}
                  onClick={() => handleLinkClick(project.id.toString())}
                >
                  <FaGithub className="text-gray-500 hover:text-gray-700" />
                </Link>
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
