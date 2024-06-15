"use client"

import React, { useState } from 'react';
import Step1 from './BagDescription';
import Step2 from './UserDescription';
import ProgressIndicator from '@/components/stepper';
import ResultCard from './ResultCard';
import ResultModal from './ResultModal';
import Footer from "../sections/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

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
  const [similarItems, setSimilarItems] = useState<any[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleNextStep = () => {
    const { description, image, location } = formData;
    if (!description || !image || !location) {
      toast.error('Please fill out all fields and upload an image.');
      return;
    }
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
        setFormData({ ...formData, image: file as any, imagePreview: reader.result as any });
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
        const response = await axios.post('http://localhost:5000/find_similar', {
          description,
          image: imageBase64,
          type: itemType,
          location
        });

          // Dummy data to simulate response
    // const dummyData = [
    //   {
    //     description: 'black womans purse',
    //     image_filename: '1716895371.769643.png',
    //     image_similarity: 0.7291116655005888,
    //     location_similarity: 1,
    //     text_similarity: 0.09315735126457052,
    //     time_similarity: 1,
    //     total_similarity: 0.871260404586792
    //   },
    //   {
    //     description: 'blue backpack',
    //     image_filename: '1716895371.769644.png',
    //     image_similarity: 0.6752234995005888,
    //     location_similarity: 0.9,
    //     text_similarity: 0.12315735126457052,
    //     time_similarity: 0.95,
    //     total_similarity: 0.850260404586792
    //   },
    //   {
    //     description: 'red handbag',
    //     image_filename: '1716895371.769645.png',
    //     image_similarity: 0.7891116655005888,
    //     location_similarity: 0.8,
    //     text_similarity: 0.19315735126457052,
    //     time_similarity: 0.88,
    //     total_similarity: 0.845260404586792
    //   }
    // ];

        setSimilarItems(response.data);

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
        setIsFormSubmitted(true);
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

  const showModal = (item: any) => {
    setSelectedItem(item);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalVisible(false);
  };

  const handleFeedback = async (isCorrect: boolean) => {
    if (selectedItem) {
      const { text_similarity, image_similarity, location_similarity, time_similarity, similarity } = selectedItem;
      try {
        await axios.post('http://localhost:5000/feedback', {
          text_similarity,
          image_similarity,
          location_similarity,
          time_similarity,
          similarity,
          is_correct: isCorrect
        });
        toast.success('Feedback submitted successfully!');
        closeModal();
      } catch (error) {
        console.error('Error submitting feedback:', error);
        toast.error('Failed to submit feedback. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <ToastContainer />
      <main className="flex flex-col items-center mt-8 w-full">
        
        {!isFormSubmitted && (
          <>
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
        </>

        )}
        {similarItems.length > 0 && (
          <div className="mt-2 w-full max-w-5xl p-6 ">
            <h2 className="text-3xl mb-8 font-bold text-center text-blue-500">Similar Items Found</h2>
            <div className="flex flex-col gap-10">
              {similarItems.map((item, index) => (
                <ResultCard key={index} item={item} onClick={() => showModal(item)} onFeedback={handleFeedback} />
              ))}
            </div>
          </div>
        )}
        {selectedItem && (
          <ResultModal
            item={selectedItem}
            visible={isModalVisible}
            onClose={closeModal}
          />
        )}
      </main>
    </div>
    
  );
};

export default App;
