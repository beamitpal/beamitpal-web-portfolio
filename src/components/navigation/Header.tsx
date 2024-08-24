import { ModeToggle } from "../theme/ModeToggle";
import BlurFade from "../ui/blurfade";

function Header() {
  return (
    <BlurFade duration={1} amount={0.5}>
    <div className="flex justify-end p-4">
      <ModeToggle />
    </div>
    </BlurFade>
  );
}

export default Header;
