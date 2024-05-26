import React from 'react';

interface ResultsProps {
  imageUrl: string;
  description: string;
  location: string;
  contact: string;
  name: string;
}

// The Results component now takes props as an argument
function Results({ imageUrl, description, location, contact, name }: ResultsProps) {
  return (
    <div id="input" className=" hover:bg-blue-50 flex gap-3 lg:gap-[3.75rem] w-full lg:rounded-twc-mid-lg lg:shadow-twc-md my-2 py-8 lg:px-24 max-w-7xl mx-auto">
      <img src={imageUrl} alt="bag" className="w-1/8" />
      <div className='flex flex-col'>

      <p className=' text-lg pb-20'>{description}</p>
      <div className=' font-bold flex flex-col gap-2'>

      <p>{location}</p>
      <p>{name}</p>
      <p>{contact}</p>
      </div>
      </div>

    </div>
  );
}

export default Results;
