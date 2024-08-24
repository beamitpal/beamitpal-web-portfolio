import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import BlurFade from "../ui/blurfade";


interface ExperienceItemProps {
  id: number;
  position: string;
  image: string;
  company: string;
  startDate: string;
  endDate: string;
  techstack: string[];
  responsibilities: string[];
}

function ExperienceItem(props: ExperienceItemProps) {
  return (
    <BlurFade duration={1} amount={0.5}>
      <Card className="m-2">
        <CardHeader className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-2 sm:mb-0">
            <Avatar className="mr-3">
              <AvatarImage src={props.image} alt={props.company} />
              <AvatarFallback>{props.company}</AvatarFallback>
            </Avatar>
            <CardTitle>{props.company}</CardTitle>
          </div>
          <div className="text-sm">
            {props.startDate} - {props.endDate}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-semibold">{props.position}</p>
          <ul className="list-disc list-inside">
            {props.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap">
            {props.techstack.map((tech, index) => (
              <Badge key={index} variant="secondary" className="mr-2 mb-2 px-2 py-1 rounded-md">
                {tech}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
      </BlurFade>
  );
}

export default ExperienceItem;
