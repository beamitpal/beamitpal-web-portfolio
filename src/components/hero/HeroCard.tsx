import Typewriter from "../typewriter/TypeWriter";
import BlurFade from "../ui/blurfade";
// import { Button } from "../ui/button";
// import { DownloadIcon } from "lucide-react";
// import { ContactIcon } from "lucide-react";
interface HeroProps {
  name: string;
  role: string;
  image: string;
  about: string;
}

function HeroCard({ name, role, image, about }: HeroProps) {
  return (
    <>
      <div className="relative z-10 flex justify-center items-center min-h-screen ">
        <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 space-y-12 md:space-y-0 md:space-x-16">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
            <BlurFade duration={1} amount={0.5}>
              <div>
                <img
                  src={image}
                  alt={`${name} Profile Picture`}
                  className="rounded-full bg-black dark:bg-white"
                  height={400}
                  width={400}
                />
              </div>
            </BlurFade>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <BlurFade duration={1} amount={0.5}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl mb-4">
                Hi, I am {name} 👋
              </h2>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                <Typewriter text={role} delay={100} infinite={true} />
              </h3>
              <p className="leading-7 [&:not(:first-child)]:mt-6">{about}</p>
              {/* <div className="mt-4">
                <Button variant="secondary" size="lg" className="m-2 gap-4"><ContactIcon />Get in touch</Button>
                <Button  size="lg" className="m-2 gap-4"><DownloadIcon />Download Resume</Button>
              </div> */}
            </BlurFade>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroCard;
