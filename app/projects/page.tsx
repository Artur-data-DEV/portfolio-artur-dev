"use client";
import { useState, useEffect } from "react";
import { Octokit } from "@octokit/rest";
import { useSearchParams } from "next/navigation";
import { FaFolderClosed, FaFolderOpen, FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";
import LoadingVortex from "../_components/animated/animated-loading"; // Adjust the path accordingly
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectsPage = () => {
  const [projects, setProjects] = useState<
    {
      id: number;
      name: string;
      description: string;
      updated_at: string;
      html_url: string;
      topics: string[];
      homepage: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // const router = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    console.log(projects.map((project) => project.homepage));
  }, [projects]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const octokit = new Octokit({
          auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN, // Use NEXT_PUBLIC_ prefix for client-side usage
        });

        const response = await octokit.rest.repos.listForAuthenticatedUser({
          visibility: "all",
          per_page: 100,
        });

        const filteredAndSortedProjects = response.data
          .filter((project: any) => project.description) // Filter projects with description
          .sort(
            (a: any, b: any) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime(),
          ) // Sort by updated_at
          .map((project: any) => ({
            id: project.id,
            name: project.name,
            description: project.description,
            updated_at: project.updated_at,
            html_url: project.html_url,
            topics: project.topics, // Include URL for the repository
            homepage: project.homepage,
          }));

        setProjects(filteredAndSortedProjects);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
        setError(
          "Failed to fetch projects. Please check your authentication token.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const projectId = searchParams.get("projectId");

  if (loading) {
    return <LoadingVortex />; // Show loading spinner while data is being fetched
  }

  if (error) {
    return <div className="p-8 text-red-500">{error}</div>; // Show error message if there's an error
  }

  return (
    <div className="p-8">
      <h2 className="mb-4 text-2xl font-bold">Projetos</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div className="rounded-lg bg-white p-4 shadow-md" key={project.id}>
            <div className="mb-2 flex items-center justify-between">
              {projectId === project.id.toString() ? (
                <FaFolderOpen className="text-blue-500" />
              ) : (
                <FaFolderClosed className="text-blue-500" />
              )}
              <div className="ml-auto">
                <Link
                  href={project.html_url} // Link to the repository
                  target="_blank" // Open link in a new tab
                  rel="noopener noreferrer" // Security measure
                >
                  <FaGithub className="text-gray-500 hover:text-gray-700" />
                </Link>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="mb-2 text-lg font-semibold">{project.name}</h3>
              <p className="text-gray-700">{project.description}</p>
              <span className="flex items-center gap-3 align-middle">
                <Link
                  href={project.homepage ? project.homepage : project.html_url}
                  className="line-clamp-1 flex flex-row items-center justify-center gap-2 self-center align-middle text-sm font-semibold text-cyan-400"
                >
                  <span className="gap-2">
                    <span className="gap-1">
                      <span className="text-black">
                        {project.homepage ? "Site: " : "Repositório: "}
                      </span>
                      {project.name}
                    </span>
                  </span>
                  <FaExternalLinkAlt size={12} className=" text-accent" />
                </Link>
              </span>
            </div>
            <div className="mt-3 flex flex-wrap  gap-1 ">
              {project.topics.length > 0 && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-1 align-middle text-sm font-semibold text-cyan-700"
                >
                  Tags:
                </motion.span>
              )}
              {project.topics.map((topic): any => {
                return (
                  <div
                    className="h-min items-center rounded-xl border border-muted bg-card px-2 pb-[2px] "
                    key={topic}
                  >
                    <p className=" items-center justify-center self-center align-middle text-xs font-semibold text-cyan-400">
                      {topic}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
