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
        alt="Bewear"
        width={36}
        height={36}
        className="h-6 w-6 md:h-9 md:w-9"
      />
      <p className={`${textClassName} text-md font-medium tracking-wider`}>
        {text}
      </p>
    </Link>
  );
};

export default Logo;
