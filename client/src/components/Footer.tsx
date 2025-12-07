import Link from "next/link";
import Logo from "./Logo";
import FooterColumn from "./FooterColumn";

const Footer = () => {
  return (
    <div className="md:gap-0 gap-8 mt-16 flex flex-col items-center md:flex-row md:items-start bg-gray-800 p-8 rounded-lg md:justify-between">

      <div className="flex flex-col gap-4 items-center md:items-start">
        <Logo text="TRENDLAMA." textClassName="text-white" />
        <p className="text-sm text-gray-400">© 2025 Trendlama.</p>
        <p className="text-sm text-gray-400">All rights reserved.</p>
      </div>

      <FooterColumn
        title="Links"
        links={[
          { label: "Homepage", href: "/" },
          { label: "Contact", href: "/" },
          { label: "Terms of Service", href: "/" },
          { label: "Privacy Policy", href: "/" },
        ]}
      />
      <FooterColumn
        title="Links"
        links={[
          { label: "All Products", href: "/" },
          { label: "New Arrivals", href: "/" },
          { label: "Best Sellers", href: "/" },
          { label: "Sale", href: "/" },
        ]}
      />

      <FooterColumn
        title="Links"
        links={[
          { label: "About", href: "/" },
          { label: "Contact", href: "/" },
          { label: "Blog", href: "/" },
          { label: "Affiliate Program", href: "/" },
        ]}
      />
    </div>
  );
};

export default Footer;
