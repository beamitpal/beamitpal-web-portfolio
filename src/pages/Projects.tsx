import ProjectItem from "@/components/projects/ProjectItem";
import Section from "@/components/section/Section";
import Item from "@/components/skeleton/Item";
import useSWR from "swr";

interface ProjectProps {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  image: string;
  techstack?: string[];
  links?: { name: string; url: string; icon: string }[];
}

// Fetcher function to be used with SWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Projects() {
  // Using SWR to fetch the experience data with custom options
  const { data: projects, error } = useSWR<ProjectProps[]>(
    `https://beamitpal.github.io/beamitpal/projects.json`,
    fetcher,
    {
      revalidateOnFocus: true, // Revalidate when window gets focus
      revalidateOnReconnect: true, // Revalidate when reconnecting after a network error
      dedupingInterval: 0, // Disable deduplication (always fetch new data)
    }
  );

  if (error) return null;
  if (!projects) return <Item />;
  if (projects.length === 0) return null;
  const reversedProjects = [...projects].reverse();
  return (
    <Section id="projects" title="Projects 🖥️">
      {reversedProjects.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          name={project.name}
          startDate={project.startDate}
          endDate={project.endDate}
          description={project.description}
          image={project.image}
          techstack={project.techstack}
          links={project.links}
        />
      ))}
    </Section>
  );
}

export default Projects;
