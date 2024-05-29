import React from 'react';

interface Step2Props {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handlePreviousStep: () => void;
}

const Step2: React.FC<Step2Props> = ({ formData, handleChange, handlePreviousStep }) => {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-semibold">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mt-2 p-2 border border-gray-300 rounded"
          placeholder="Your name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mt-2 p-2 border border-gray-300 rounded"
          placeholder="Your email"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-semibold">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full mt-2 p-2 border border-gray-300 rounded"
          placeholder="Your phone number"
        />
      </div>
      <div className="flex justify-between">
        <button type="button" onClick={handlePreviousStep} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-200">
          Previous
        </button>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
          Submit
        </button>
      </div>
    </>
  );
};

export default Step2;
