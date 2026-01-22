import Link from "next/link";

type FooterColumnProps = {
  title: string;
  links: { label: string; href: string }[];
};

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div className="flex flex-col items-center gap-4 text-sm text-gray-400 md:items-start">
      <p className="text-sm text-amber-50">{title}</p>

      {links.map((link) => (
        <Link key={link.label} href={link.href}>
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default FooterColumn;
