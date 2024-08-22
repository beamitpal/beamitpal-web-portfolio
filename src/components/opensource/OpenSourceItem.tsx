import BlurFade from "../ui/BlurFade";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

import * as Icons from "react-icons/fa";
import { Button } from "../ui/button";

interface OpenSourceItemProps {
  id: number;
  name: string;
  issuenumber: string;
  description: string;
  image: string;
  techstack?: string[];
  links?: { name: string; url: string; icon: string }[];
}

function OpenSourceItem(props: OpenSourceItemProps) {
  const { techstack = [], links = [] } = props;

  return (
    <BlurFade delay={0.25 * 0.05} inView>
      <Card className="m-2">
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="flex items-start sm:items-center mb-2 sm:mb-0">
            <Avatar className="mr-3">
              <AvatarImage src={props.image} alt={props.name} />
              <AvatarFallback>{props.name}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{props.name}</CardTitle>
            </div>
          </div>
          <div className="text-sm">
            <Badge>{props.issuenumber}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="leading-7 mt-4 mb-2">
            {props.description}
          </CardDescription>
          <div className="flex flex-wrap">
            {techstack.map((tech, index) => (
              <Badge key={index} variant="secondary" className="mr-2">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap">
          {links.map((link, index) => {
            const Icon =
              Icons[link.icon as keyof typeof Icons] || Icons.FaExternalLinkAlt;
            return (
              <a key={index} href={link.url} className="m-0.5">
                <Button className="flex items-center">
                  <Icon className="mr-1" />
                  <span>{link.name}</span>
                </Button>
              </a>
            );
          })}
        </CardFooter>
      </Card>
    </BlurFade>
  );
}

export default OpenSourceItem;
