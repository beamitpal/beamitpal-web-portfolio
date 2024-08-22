import SkillItem from "@/components/skills/SkillItem";
import Section from "@/components/section/Section";
import useSWR from "swr";
import Item from "@/components/skeleton/Item";

interface SkillProps {
  icon: string;
  name: string;
  description: string;
}

// Fetcher function to be used with SWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Skills() {
  // Using SWR to fetch the experience data with custom options
  const { data: skills, error } = useSWR<SkillProps[]>(
    `https://beamitpal.github.io/beamitpal/skills.json`,
    fetcher,
    {
      revalidateOnFocus: true, // Revalidate when window gets focus
      revalidateOnReconnect: true, // Revalidate when reconnecting after a network error
      dedupingInterval: 0, // Disable deduplication (always fetch new data)
    }
  );

  if (error) return null;
  if (!skills) return <Item />;
  if (skills.length === 0) return null;
  const reversedSkills = [...skills].reverse();
  return (
    <Section id="skills" title="Skills 🛠️">
      {reversedSkills.map((skill) => (
        <SkillItem
          key={skill.icon}
          icon={skill.icon}
          name={skill.name}
          description={skill.description}
        />
      ))}
    </Section>
  );
}

export default Skills;
