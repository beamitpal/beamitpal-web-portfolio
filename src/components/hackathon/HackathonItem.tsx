
import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";


import * as Icons from "react-icons/fa"; 
import { Button } from "../ui/button";

interface HackathonItemProps {
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

function HackathonItem(props: HackathonItemProps) {
  const { techstack = [], links = [] } = props;

  return (

      <Card className="m-2">
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="flex items-start sm:items-center mb-2 sm:mb-0">
            <Avatar className="mr-3">
              <AvatarImage src={props.image} alt={props.name} />
              <AvatarFallback>{props.name}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{props.name}</CardTitle>
              <CardDescription className=" mt-1">
                {props.location}
              </CardDescription>
            </div>
          </div>
          <div className="text-sm">
            {props.startDate} - {props.endDate}
          </div>
        </CardHeader>
        <CardContent>
          <p className="leading-7 mt-4">{props.about}</p>
          <div className="flex flex-wrap mt-4">
            {techstack.map((tech, index) => (
              <Badge key={index} variant="secondary" className="mr-2 mb-2 px-2 py-1 rounded-md">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap">
            {links.map((link, index) => {
              const Icon = Icons[link.icon as keyof typeof Icons] || Icons.FaExternalLinkAlt;
              return (
                <a
                  key={index}
                  href={link.url}
                  className="m-0.5"
                >
                   <Button className="flex items-center">
                    <Icon className="mr-1" />
                    <span>{link.name}</span>
                   </Button>
                </a>
              );
            })}
          </div>
        </CardFooter>
      </Card>
  );
}

export default HackathonItem;
