"use client"

import React, { useState } from 'react';
import Card from "@/components/card";
import Hero from "./sections/Hero";
import Social from "./sections/social/Socials";
import Footer from "./sections/Footer";
import Navbar from "@/components/navBar";
import Results from "./sections/social/Results";

const Home: React.FC = () => {
  const [location, setLocation] = useState<string>('');

  return (
    <main>
      <Navbar />
      <Hero />
      <div className="px-7 lg:px-[7.25rem]">
        <div className="flex w-full mx-auto lg:gap-10 relative -top-4 lg:-top-10 max-w-7xl flex-col lg:flex-row lg:justify-between space-y-[1.88rem] lg:space-y-0">
          <div className="flex flex-col w-full lg:w-[50%]">
            <Card
              imageSrc="/discover.svg"
              altText="discover_logo"
              title="Advanced Matching Algorithms"
              description="Our service harnesses the power of three innovative ML models to ensure highly accurate matches. With distinct models for text matching, image recognition, and a fusion of both, our platform offers unparalleled precision in matching lost items to their finders or owners."
              buttonText="Schedule a Meeting >"
              className="h-full"
            />
          </div>
          <div className="flex flex-col w-full lg:w-[50%]">
            <Card
              imageSrc="/discover.svg"
              altText="sales_suite_logo"
              title="User-Friendly Interface"
              description="Our streamlined process is designed with your convenience in mind. With just a few clicks, you can swiftly upload images and furnish comprehensive descriptions, all without any unnecessary complications. Our intuitive interface guides you through each step seamlessly, ensuring that your submission is both effortless and thorough."
              buttonText="Schedule a Meeting >"
              className="h-full"
            />
          </div>
          <div className="flex flex-col w-full lg:w-[50%]">
            <Card
              imageSrc="/discover.svg"
              altText="sales_suite_logo"
              title="Community Driven"
              description="Our platform does more than just reunite belongings with their owners; it builds a supportive network of individuals united by the spirit of helpfulness and mutual respect. By participating in our service, you contribute to a vibrant community that values connection and care."
              buttonText="Schedule a Meeting >"
              className="h-full"
            />
          </div>
        </div>
        <Social />
        {location === "homagama" ? (
          <div>
            <Results
              imageUrl="/img/blue/2 (1).jpg"
              description="A Asus black laptop backpack with a red stripe. The bag has a small tear on the left shoulder strap."
              location="Found at the bus stop near the Central Park."
              name="Pitipana"
              contact="0731130233"
            />
            <Results
              imageUrl="/img/blue/2 (2).jpg"
              description="A black laptop bag. The bag has a small tear on the left shoulder strap."
              location="Homagama"
              name="John Doe"
              contact="0771130333"
            />
            <Results
              imageUrl="/img/blue/2 (3).jpg"
              description="Found a black backpack near Homagama bus stand."
              location="Homagama"
              name="John Doe"
              contact="0721130433"
            />
          </div>
        ) : location === "kottawa" ? (
          <div>
            <Results
              imageUrl="/img/gray/3 (1).jpg"
              description="A Asus black laptop backpack with a red stripe. The bag has a small tear on the left shoulder strap."
              location="Found at the bus stop near the Central Park."
              name="Pitipana"
              contact="0731130233"
            />
            <Results
              imageUrl="/img/gray/3 (2).jpg"
              description="A black laptop bag. The bag has a small tear on the left shoulder strap."
              location="Homagama"
              name="John Doe"
              contact="0771130333"
            />
            <Results
              imageUrl="/img/gray/3 (3).jpg"
              description="Found a black backpack near Homagama bus stand."
              location="Homagama"
              name="John Doe"
              contact="0721130433"
            />
          </div>
        ) : (
          <div>
            <Results
              imageUrl="/img/gray/3 (1).jpg"
              description="A Asus black laptop backpack with a red stripe. The bag has a small tear on the left shoulder strap."
              location="Found at the bus stop near the Central Park."
              name="Pitipana"
              contact="0731130233"
            />
            <Results
              imageUrl="/img/gray/3 (2).jpg"
              description="A black laptop bag. The bag has a small tear on the left shoulder strap."
              location="Homagama"
              name="John Doe"
              contact="0771130333"
            />
            <Results
              imageUrl="/img/gray/3 (3).jpg"
              description="Found a black backpack near Homagama bus stand."
              location="Homagama"
              name="John Doe"
              contact="0721130433"
            />
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default Home;
