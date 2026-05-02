import { projects } from "@/data/projects";
import ProjectDetailsClient from "./ProjectDetailsClient";
import { notFound } from "next/navigation";

// Generate SEO metadata dynamically per project
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return { title: "Project Not Found | Amirul" };
  }
  return {
    title: `${project.name} | Amirul's Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.name} | Amirul's Portfolio`,
      description: project.description,
    },
  };
}

// Pre-generate all project routes at build time
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsClient project={project} />;
}
