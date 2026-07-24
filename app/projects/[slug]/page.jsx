import { projects } from "@/data/projects";
import ProjectDetailsClient from "./ProjectDetailsClient";
import { notFound } from "next/navigation";

// Generate SEO metadata dynamically
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Amirul",
    };
  }

  return {
    title: `${project.title} | Amirul Islam`,
    description: project.shortDescription,

    openGraph: {
      title: `${project.title} | Amirul Islam`,
      description: project.shortDescription,
      images: [
        {
          url: project.thumbnail.src,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Amirul Islam`,
      description: project.shortDescription,
      images: [project.thumbnail.src],
    },
  };
}

// Generate all static routes
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsClient project={project} />;
}
