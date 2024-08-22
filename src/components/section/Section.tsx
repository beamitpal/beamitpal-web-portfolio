import HeadingComponent from "../heading/heading-component";
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
      <HeadingComponent>{title}</HeadingComponent>
      <div className="grid gap-4 md:grid-cols-2 mt-4">{children}</div>
    </div>
  );
}

export default Section;
