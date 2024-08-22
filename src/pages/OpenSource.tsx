import Section from "@/components/section/Section";
import useSWR from "swr";
import OpenSourceItem from "@/components/opensource/OpenSourceItem";
import Item from "@/components/skeleton/Item";

interface OpenSourceProps {
  id: number;
  name: string;
  issuenumber: string;
  description: string;
  image: string;
  techstack?: string[];
  links?: { name: string; url: string; icon: string }[];
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());
function OpenSource() {
  // Using SWR to fetch the experience data with custom options
  const { data: opensource, error } = useSWR<OpenSourceProps[]>(
    `https://beamitpal.github.io/beamitpal/opensource.json`,
    fetcher,
    {
      revalidateOnFocus: true, // Revalidate when window gets focus
      revalidateOnReconnect: true, // Revalidate when reconnecting after a network error
      dedupingInterval: 0, // Disable deduplication (always fetch new data)
    }
  );

  if (error) return null;
  if (!opensource) return <Item />;
  if (opensource.length === 0) return null;
  const reversedOpenSource = [...opensource].reverse();
  return (
    <Section id="opensource" title="Open Source 🚀">
      {reversedOpenSource.map((open) => (
        <OpenSourceItem
          key={open.id}
          id={open.id}
          name={open.name}
          issuenumber={open.issuenumber}
          description={open.description}
          image={open.image}
          techstack={open.techstack}
          links={open.links}
        />
      ))}
    </Section>
  );
}

export default OpenSource;
