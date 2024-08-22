import { ModeToggle } from "../theme/ModeToggle";
import BlurFade from "../ui/BlurFade";

function Header() {
  return (
    <div className="flex justify-end p-4">
      <BlurFade delay={0.25 * 0.05} inView>
        <ModeToggle />
      </BlurFade>
    </div>
  );
}

export default Header;
