import { ModeToggle } from "../theme/ModeToggle";

function Header() {
  return (
    <div className="flex justify-end p-4">
      <ModeToggle />
    </div>
  );
}

export default Header;
