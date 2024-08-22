import EducationItem from "@/components/education/EducationItem";
import Section from "@/components/section/Section";
import Item from "@/components/skeleton/Item";

import useSWR from "swr";

interface EducationProps {
  id: number;
  image: string;
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  about: string;
  courses: string[];
}

// Fetcher function to be used with SWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Education() {
  // Using SWR to fetch the experience data with custom options
  const { data: education, error } = useSWR<EducationProps[]>(
    `https://beamitpal.github.io/beamitpal/education.json`,
    fetcher,
    {
      revalidateOnFocus: true, // Revalidate when window gets focus
      revalidateOnReconnect: true, // Revalidate when reconnecting after a network error
      dedupingInterval: 0, // Disable deduplication (always fetch new data)
    }
  );

  if (error) return null;
  if (!education) return <Item />;
  if (education.length === 0) return null;
  const reversedEducation = [...education].reverse();

  return (
    <Section id="education" title="Education 📖">
      {reversedEducation.map((edu) => (
        <EducationItem
          key={edu.id}
          id={edu.id}
          image={edu.image}
          school={edu.school}
          degree={edu.degree}
          startDate={edu.startDate}
          endDate={edu.endDate}
          about={edu.about}
          courses={edu.courses}
        />
      ))}
    </Section>
  );
}

export default Education;
