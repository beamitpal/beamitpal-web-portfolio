
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
import BlurFade from "../ui/BlurFade";

interface EducationItemProps {
  id: number;
  image: string;
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  about: string;
  courses: string[];
}

function EducationItem(props: EducationItemProps) {
  return (
    <>
      <BlurFade delay={0.25 * 0.05} inView>
        <Card className="m-2">
          <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div className="flex items-start sm:items-center mb-2 sm:mb-0">
              <Avatar className="mr-3">
                <AvatarImage src={props.image} alt={props.school} />
                <AvatarFallback>{props.school}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{props.degree}</CardTitle>
                <CardDescription className=" mt-1">{props.school}</CardDescription>
                
              </div>
            </div>
            <div className="text-sm">{props.startDate} - {props.endDate}</div>
          </CardHeader>
          <CardContent>
            <p className="leading-7 mt-4">{props.about}</p>
          </CardContent>
          <CardFooter>
            <div className="flex flex-wrap">
              {props.courses.map((tech, index) => (
                <Badge key={index} variant="secondary" className="mr-2 mb-2 px-2 py-1 rounded-md">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardFooter>
        </Card>
      </BlurFade>
    </>
  );
}

export default EducationItem;
