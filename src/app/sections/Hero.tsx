"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Aos from "aos";
import "aos/dist/aos.css";

// Updated direct download link
const pdfUrl = "https://drive.google.com/uc?export=download&id=1rn7Q5jbzPTrkQcEYq4xamtxc3xqx3v3G";

const handleOpenInNewTab = () => {
  // This will open the PDF in a new tab
  window.open(pdfUrl, '_blank');
};

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="max-w-screen-2xl mx-auto text-center lg:text-start text-twc-gray mt-5 lg:mt-0 space-y-28 lg:flex justify-between items-center">
      <div data-aos="fade-right" className="animate-fade-up px-7 lg:pl-[13rem] max-w-lg lg:max-w-3xl mx-auto lg:mx-0">
        <div>
          <h1 className="text-twc-2xl lg:text-twc-4xl leading-[3.5rem]">
            <span className="gradient-text">Finders Keepers Connect</span>
          </h1>
          <h2 className="mt-2 text-lg lg:text-2xl tracking-twc-medium font-medium text-zinc-600">
            Reunite with Your Lost Items
          </h2>
        </div>
        <div className="hidden lg:flex w-[21.75rem] h-[0.0625rem] opacity-40 bg-black my-10"></div>
        <p className="text-twc-md lg:text-base font-medium tracking-twc-tight leading-6 lg:leading-7 py-[2.19rem] lg:py-0 text-gray-600">
          Lost a cherished item? Found something that&apos;s not yours? Finders Keepers Connect bridges the gap between lost and found using cutting-edge machine learning technology. Our platform isn&apos;t just a database of lost and found items; it&apos;s a powerful tool that utilizes sophisticated AI to analyze and match lost items with their rightful owners.
        </p>
        <div className="space-x-4 lg:pt-[3.44rem] flex flex-row shrink justify-center lg:justify-start">
          <Link href="/find">
            <Button type="primary" size="large" className="pulsing-button">
              Report Lost/Found Item <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
      </div>
      <div className="lg:hidden w-full h-[22.04919rem] flex-shrink-0 gradient-bg rounded-tl-[18.75rem] flex justify-end">
        <Image
          src="/bag.png"
          alt="nafeel-portrait"
          width={390}
          height={394}
          className="relative -top-[66.8px] h-[420px]"
        />
      </div>
      <div data-aos="fade-left" className="animate-fade-up hidden lg:flex gradient-bg flex-shrink-0 rounded-tl-[18.75rem] justify-end">
        <Image
          src="/bag.png"
          alt="nafeel-portrait"
          width={551}
          height={620}
          className="relative"
        />
      </div>
    </section>
  );
};

export default Hero;
