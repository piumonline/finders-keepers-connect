import mergeClass from "@/utils/mergeClass";
import Image from "next/image";
import Link from "next/link";

interface SocialProps {
  link: string;
  imageSrc: string;
  alt: string;
  name: string;
  className?: string;
}

const Card: React.FC<SocialProps> = ({
  link,
  imageSrc,
  alt,
  name,
  className,
}) => {
  return (
    <Link href={link} passHref>
      <div
        className={mergeClass(
          "flex gap-10 items-center flex-shrink-0 rounded-md bg-white shadow-twc-sm lg:shadow-none w-full py-3 lg:py-0 lg:px-0 px-[2.8rem]",
          className
        )}
      >
        <Image src={imageSrc} alt={alt} width={40} height={40} />
        <h3 className="text-xl leading-6 font-extrabold text-twc-gray">
          {name}
        </h3>
      </div>
    </Link>
  );
};

export default Card;
