"use client"

import React, { useState } from 'react';
import Step1 from './BagDescription';
import Step2 from './UserDescription';
import ProgressIndicator from '@/components/stepper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    description: '',
    image: null,
    itemType: 'lost',
    location: '',
    name: '',
    email: '',
    phone: '',
    imagePreview: null
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, image: file, imagePreview: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { description, image, itemType, location, name, email, phone } = formData;
    if (!name || !email || !phone) {
      toast.error('Please fill out all user details.');
      return;
    }
    if (!image) {
      toast.error('Please upload an image.');
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = async () => {
      const imageBase64 = reader.result?.toString().split(',')[1];

      try {
        const response = await axios.post('http://127.0.0.1:5000/find_similar', {
          description,
          image: imageBase64,
          type: itemType,
          location,
          name,
          email,
          phone,
        });

        toast.success('Item submitted successfully!');
        setFormData({
          description: '',
          image: null,
          itemType: 'lost',
          location: '',
          name: '',
          email: '',
          phone: '',
          imagePreview: null
        });
        setStep(1);
      } catch (error) {
        console.error('Error finding similar items:', error);
        toast.error('Failed to submit item. Please try again.');
      }
    };
    reader.onerror = (error) => {
      console.error('Error reading image file:', error);
      toast.error('Failed to read image file.');
    };
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <ToastContainer />
      <main className="flex flex-col items-center mt-8 w-full">
        <ProgressIndicator step={step} setStep={setStep} />
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-5xl">
          {step === 1 ? (
            <Step1
              formData={formData}
              handleChange={handleChange}
              handleImageChange={handleImageChange}
              handleNextStep={handleNextStep}
            />
          ) : (
            <Step2
              formData={formData}
              handleChange={handleChange}
              handlePreviousStep={handlePreviousStep}
            />
          )}
        </form>
      </main>
    </div>
  );
};

export default App;
