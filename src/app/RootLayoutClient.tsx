"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const RootLayoutClient = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return <div className={inter.className}>{children}</div>;
};

export default RootLayoutClient;
