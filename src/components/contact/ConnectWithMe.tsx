import BlurFade from "../ui/blurfade";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { BsThreadsFill } from "react-icons/bs";
import { Separator } from "../ui/separator";

function ConnectWithMe() {
  return (
    <BlurFade duration={1} amount={0.5}>
      <Card className="w-full max-w-md mx-auto p-4 md:p-6 lg:p-8 mt-8">
        <CardHeader className="flex justify-center items-center">
          <CardTitle>Connect with me 🌐</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="m-4">
          <CardDescription>
            Let's build something amazing together! Whether it's a new project,
            a collaboration, or just a chat, I'm always open to connecting with
            like-minded individuals. Feel free to reach out to me on any of the
            platforms below. I look forward to connecting with you!
          </CardDescription>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mt-6">
          <a
            href="https://twitter.com/beamitpal"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button className="w-full sm:w-auto gap-4" size="lg">
              <FaSquareXTwitter className="w-6 h-6" />
              Twitter
            </Button>
          </a>
          <a
            href="https://linkedin.com/in/beamitpal"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button className="w-full sm:w-auto gap-4" size="lg">
              <IoLogoLinkedin className="w-6 h-6" />
              LinkedIn
            </Button>
          </a>
          <a
            href="https://github.com/beamitpal"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button className="w-full sm:w-auto gap-4" size="lg">
              <IoLogoGithub className="w-6 h-6" />
              GitHub
            </Button>
          </a>
          <a
            href="https://www.threads.net/@beamitpal"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button className="w-full sm:w-auto gap-4" size="lg">
              <BsThreadsFill className="w-6 h-6" />
              Threads
            </Button>
          </a>
        </CardFooter>
      </Card>
    </BlurFade>
  );
}

export default ConnectWithMe;
