import BlurFade from "../ui/BlurFade";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

import * as Icons from "react-icons/fa";
import { Button } from "../ui/button";

interface ProjectItemProps {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  image: string;
  techstack?: string[];
  links?: { name: string; url: string; icon: string }[];
}

function ProjectItem(props: ProjectItemProps) {
  const { techstack = [], links = [] } = props;

  return (
    <BlurFade delay={0.25 * 0.05} inView>
      <Card className="m-2 flex flex-col">
        <div className="w-full">
          <img
            src={props.image}
            alt={props.name}
            width={800}
            height={400}
            className="w-full rounded-t-lg h-auto object-cover"
          />
        </div>
        <div className="flex flex-col p-4">
          <CardContent className="flex-grow">
            <CardTitle className="text-xl sm:text-2xl">{props.name}</CardTitle>
            <div className="text-sm mt-2">
              {props.startDate} - {props.endDate}
            </div>
            <CardDescription className="mt-2">
              {props.description}
            </CardDescription>

            <div className="flex flex-wrap mt-4">
              {techstack.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="mr-2 mb-2 px-2 py-1 rounded-md"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="mt-auto">
            <div className="flex flex-wrap">
              {links.map((link, index) => {
                const Icon = Icons[link.icon as keyof typeof Icons] || Icons.FaExternalLinkAlt;
                return (
                  <a key={index} href={link.url} className="m-0.5">
                    <Button className="flex items-center">
                      <Icon className="mr-1" />
                      <span>{link.name}</span>
                    </Button>
                  </a>
                );
              })}
            </div>
          </CardFooter>
        </div>
      </Card>
    </BlurFade>
  );
}

export default ProjectItem;
