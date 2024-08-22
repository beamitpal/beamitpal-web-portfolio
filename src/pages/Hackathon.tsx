import HackathonItem from "@/components/hackathon/HackathonItem";
import Section from "@/components/section/Section";
import Item from "@/components/skeleton/Item";
import useSWR from "swr";

interface HackathonProps {
  id: number;
  name: string;
  image: string;
  location: string;
  startDate: string;
  endDate: string;
  about: string;
  techstack?: string[];
  links?: { name: string; url: string; icon: string }[];
}

// Fetcher function to be used with SWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());
function Hackathon() {
  // Using SWR to fetch the experience data with custom options
  const { data: hackathon, error } = useSWR<HackathonProps[]>(
    `https://beamitpal.github.io/beamitpal/hackathon.json`,
    fetcher,
    {
      revalidateOnFocus: true, // Revalidate when window gets focus
      revalidateOnReconnect: true, // Revalidate when reconnecting after a network error
      dedupingInterval: 0, // Disable deduplication (always fetch new data)
    }
  );

  if (error) return null;
  if (!hackathon) return <Item />;
  if (hackathon.length === 0) return null;

  const reveresedHackathon = [...hackathon].reverse();
  return (
    <Section id="hackathon" title="Hackathon 🏃‍♂️">
      {reveresedHackathon.map((hack) => (
        <HackathonItem
          key={hack.id}
          id={hack.id}
          name={hack.name}
          image={hack.image}
          location={hack.location}
          startDate={hack.startDate}
          endDate={hack.endDate}
          about={hack.about}
          techstack={hack.techstack}
          links={hack.links}
        />
      ))}
    </Section>
  );
}

export default Hackathon;
