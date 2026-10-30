import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { DesktopNavLinks } from "./DesktopNav";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";
import { serviceMenu } from "./nav-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-mist bg-white">
      <div className="relative mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            <li>
              <MegaMenu menu={serviceMenu} />
            </li>
            <DesktopNavLinks />
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <ButtonLink href="/contact" className="hidden sm:inline-flex" size="md">
            Start a project
          </ButtonLink>
          <MobileNav menu={serviceMenu} />
        </div>
      </div>
    </header>
  );
}
