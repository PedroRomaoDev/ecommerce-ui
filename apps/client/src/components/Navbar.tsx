import { Bell, Home } from "lucide-react";
import Link from "next/link";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b border-gray-200 pb-4">
      {/* LEFT */}

      <Logo text="Bewear." textClassName="hidden md:block" />

      {/* RIGHT */}
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href="/">
          <Home className="h-4 w-4 text-gray-600" />
        </Link>

        <Bell className="h-4 w-4 text-gray-600" />

        <ShoppingCartIcon />

        <Link href="/login">Sign In</Link>
      </div>
    </nav>
  );
};

export default Navbar;
