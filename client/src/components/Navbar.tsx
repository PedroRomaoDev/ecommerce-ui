import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home, ShoppingCart } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between  border-b border-gray-200 pb-4 ">
      {/* LEFT */}

      <Logo text="TRENDLAMA." textClassName="hidden md:block" />

      {/* RIGHT */}
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href="/">
          <Home className="w-4 h-4 text-gray-600" />
        </Link>

        <Bell className="w-4 h-4 text-gray-600" />
        <ShoppingCart className="w-4 h-4 text-gray-600" />

        <Link href="/login">Sign In</Link>
      </div>
    </nav>
  );
};

export default Navbar;
