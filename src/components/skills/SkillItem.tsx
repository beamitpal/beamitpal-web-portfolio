import BlurFade from "../ui/blurfade";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import * as Icons from "react-icons/fa";

interface SkillItemProps {
  icon: string;
  name: string;
  description: string;
}

function SkillItem(props: SkillItemProps) {
  const Icon = Icons[props.icon as keyof typeof Icons] || Icons.FaStar;

  return (
    <BlurFade duration={1} amount={0.5}>
    <Card className="m-2">
      <CardHeader className="flex items-center">
        <Icon className=" mr-3 w-6 h-6" />
        <div>
          <CardTitle>{props.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="leading-7 mt-4">
          {props.description}
        </CardDescription>
      </CardContent>
    </Card>
    </BlurFade>
  );
}

export default SkillItem;
