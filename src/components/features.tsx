import React from 'react';

const Features = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-5xl font-bold mb-4">Revolutionizing Lost and Found Systems</h2>
            <p className="text-xl text-gray-400">Our advanced system leverages cutting-edge technology to help you find lost items quickly and accurately. Say goodbye to endless searching and let our intelligent system work for you!</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="zoom-in-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-blue-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-blue-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2">Advanced Image Matching</h4>
              <p className="text-lg text-gray-400 text-center">Our system uses sophisticated image recognition to accurately match lost items with found ones, based on visual similarities.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="zoom-in-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-blue-600" cx="32" cy="32" r="32" />
                <path className="stroke-current text-blue-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-blue-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2">Accurate Text Matching</h4>
              <p className="text-lg text-gray-400 text-center">Our text matching feature uses advanced natural language processing to understand and match descriptions of lost items with found reports.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="zoom-in-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <ellipse className="stroke-current text-blue-300" cx="11" cy="11" rx="5.5" ry="11" />
                  <path className="stroke-current text-blue-100" d="M11 0v22M0 11h22" />
                  <circle className="stroke-current text-blue-100" cx="11" cy="11" r="11" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Comprehensive Matching</h4>
              <p className="text-lg text-gray-400 text-center">Combines image and text data to create a robust system for matching lost and found items, increasing the chances of recovering lost belongings.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="zoom-in-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-blue-100" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                  <circle className="stroke-current text-blue-300" cx="13" cy="9" r="3" />
                </g>
              </svg>
              <h4 className="h4 mb-2">User-Friendly Interface</h4>
              <p className="text-lg text-gray-400 text-center">Our intuitive interface ensures an easy and efficient user experience for reporting and searching for lost items.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="zoom-in-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-blue-100" d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6" />
                  <path className="stroke-current text-blue-300" d="M22 30h4v12h-4z" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Location-Based Matching</h4>
              <p className="text-lg text-gray-400 text-center">Utilizes location data to prioritize matches based on proximity, making it easier to recover items lost in specific areas.</p>
            </div>

             {/* 6th item */}
  <div className="relative flex flex-col items-center" data-aos="zoom-in-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
    <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle className="fill-current text-blue-600" cx="32" cy="32" r="32" />
      <path className="stroke-current text-blue-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
      <path className="stroke-current text-blue-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
    </svg>
    <h4 className="h4 mb-2">Automated Email Notifications</h4>
    <p className="text-lg text-gray-400 text-center">Automatically sends email notifications to users when there is a match to their lost item post, ensuring timely updates.</p>
  </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Features;
