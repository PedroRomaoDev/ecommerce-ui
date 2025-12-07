import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  text: string;
  textClassName?: string;
};

const Logo = ({ text, textClassName = "" }: LogoProps) => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.png"
        alt="TrendLama"
        width={36}
        height={36}
        className="w-6 h-6 md:w-9 md:h-9"
      />
      <p
        className={`${textClassName} text-md font-medium tracking-wider`}
      >
        {text}
      </p>
    </Link>
  );
};

export default Logo;
