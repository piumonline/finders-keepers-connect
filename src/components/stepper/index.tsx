import React from 'react';

interface StepperProps {
  step: number;
  setStep: (step: number) => void;
}

const Stepper: React.FC<StepperProps> = ({ step, setStep }) => {
  return (
    <div className="flex justify-center mb-6">
      <div onClick={() => setStep(1)} className='flex justify-center items-center px-4'>
        <p className={`mr-4 px-4 py-2 rounded-full cursor-pointer ${step === 1 ? 'bg-blue-400 text-white' : 'bg-gray-300'}`}>
          1
        </p>
        <p>
          Bag Description
        </p>
      </div>
      ________

      <div onClick={() => setStep(2)} className='flex justify-center items-center px-4'>
        <p className={`mr-4 px-4 py-2 rounded-full cursor-pointer ${step === 2 ? 'bg-blue-400 text-white' : 'bg-gray-300'}`}>
          2
        </p>
        <p>
          User Description
        </p>
      </div>
    </div>
  );
};

export default Stepper;
