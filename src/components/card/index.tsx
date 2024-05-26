import React, { ReactNode } from "react";
import Image from "next/image";
import Button from "../button";
import Link from "next/link";

interface CardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  buttonText: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  altText,
  title,
  description,
  buttonText,
  className = "",
}) => {
  return (
    <div
      className={` hover:bg-indigo-100 border bg-white border-twc-gray text-twc-gray px-8 lg:px-16 lg:py-12 py-[2.13rem] rounded-twc-md lg:rounded-twc-mid-lg lg:border-spacing-6 w-full ${className}`}
    >
      <div className="flex gap-[0.62rem] lg:gap-5 items-center">
        <Image src={imageSrc} alt={altText} width={44} height={44} />
        <h2 className="text-xl lg:text-2xl font-bold tracking-twc-meadium leading-5">
          {title}
        </h2>
      </div>
      <p className="text-center lg:text-left font-medium tracking-twc-tight lg:tracking-twc-tightest text-twc-md lg:text-sm lg:leading-6 mt-4 lg:mt-6 lg:mb-[1.88rem] mb-6">
        {description}
      </p>
      
    </div>
  );
};

export default Card;
