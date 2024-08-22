import Section from "@/components/section/Section";
import ExperienceItem from "@/components/experience/ExperienceItem";
import useSWR from "swr";
import Item from "@/components/skeleton/Item";

interface ExperienceProps {
  id: number;
  position: string;
  image: string;
  company: string;
  startDate: string;
  endDate: string;
  techstack: string[];
  responsibilities: string[];
}

// Fetcher function to be used with SWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Experience() {
  // Using SWR to fetch the experience data with custom options
  const { data: experience, error } = useSWR<ExperienceProps[]>(
    `https://beamitpal.github.io/beamitpal/experience.json`,
    fetcher,
    {
      revalidateOnFocus: true, // Revalidate when window gets focus
      revalidateOnReconnect: true, // Revalidate when reconnecting after a network error
      dedupingInterval: 0, // Disable deduplication (always fetch new data)
    }
  );

  if (error) return null;
  if (!experience) return <Item />;
  if (experience.length === 0) return null;
  const reversedExperience = [...experience].reverse();

  return (
    <Section id="experience" title="Experience 💻">
      {reversedExperience.map((exp) => (
        <ExperienceItem
          key={exp.id}
          id={exp.id}
          position={exp.position}
          image={exp.image}
          company={exp.company}
          startDate={exp.startDate}
          endDate={exp.endDate}
          techstack={exp.techstack}
          responsibilities={exp.responsibilities}
        />
      ))}
    </Section>
  );
}

export default Experience;
