import HeadingComponent from "../heading/heading-component";
import BlurFade from "../ui/blurfade";
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className=" py-8 md:py-16 px-4 md:px-8 lg:px-16" id={id}>
      <BlurFade duration={1} amount={0.5}>
        <HeadingComponent>{title}</HeadingComponent>
      </BlurFade>
      <div className="grid gap-4 md:grid-cols-2 mt-4">{children}</div>
    </div>
  );
}

export default Section;
