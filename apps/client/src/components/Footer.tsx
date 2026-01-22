import FooterColumn from "./FooterColumn";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center gap-8 rounded-lg bg-gray-800 p-8 md:flex-row md:items-start md:justify-between md:gap-0">
      <div className="flex flex-col items-center gap-4 md:items-start">
        <Logo text="BEWEAR." textClassName="text-white" />
        <p className="text-sm text-gray-400">© 2025 Bewear.</p>
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
