"use client";

import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [itemType, setItemType] = useState<string>("lost");
  const [location, setLocation] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [results, setResults] = useState<
    Array<{
      description: string;
      image_filename: string;
      total_similarity: number;
      text_similarity: number;
      image_similarity: number;
      location_similarity: number;
      time_similarity: number;
    }>
  >([]);

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(e.target.value);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setItemType(e.target.value);
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLocation(e.target.value);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!image) {
      toast.error("Please upload an image.");
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = async () => {
      const imageBase64 = reader.result?.toString().split(",")[1];

      try {
        const response = await axios.post("https://031b-212-104-231-145.ngrok-free.app/find_similar", {
          description: description,
          image: imageBase64,
          type: itemType,
          location: location,
        });

        setResults(response.data);
        toast.success("Item submitted successfully!");
        setDescription("");
        setImage(null);
        setImagePreview(null);
        setLocation("");
      } catch (error) {
        console.error("Error finding similar items:", error);
        toast.error("Failed to submit item. Please try again.");
      }
    };
    reader.onerror = (error) => {
      console.error("Error reading image file:", error);
      toast.error("Failed to read image file.");
    };
  };

  const handleFeedback = async (index: number, isCorrect: boolean) => {
    const result = results[index];
    console.log(result)
    console.log('text',result.text_similarity)
    console.log('img',result.image_similarity)
    console.log('location',result.location_similarity)
    try {
      await axios.post("https://031b-212-104-231-145.ngrok-free.app/feedback", {
        text_similarity: result.text_similarity,
        image_similarity: result.image_similarity,
        location_similarity: result.location_similarity,
        time_similarity: result.time_similarity,
        total_similarity: result.total_similarity,
        is_correct: isCorrect,
      });
      toast.success("Feedback submitted successfully!");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast.error("Failed to submit feedback. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <ToastContainer />

      <main className="flex flex-col items-center mt-8 w-full">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-semibold"
            >
              Text Description:
            </label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded"
              placeholder="Describe the item"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="type"
              className="block text-gray-700 font-semibold"
            >
              Type:
            </label>
            <select
              id="type"
              value={itemType}
              onChange={handleTypeChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded"
            >
              <option value="lost">Lost</option>
              <option value="found">Found</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-gray-700 font-semibold"
            >
              Location:
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={handleLocationChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded"
              placeholder="Location where the item was lost or found"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-semibold">
              Image:
            </label>
            <input
                          type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Image Preview"
                className="w-full mt-4 rounded"
              />
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Find Similar
          </button>
        </form>
        <div className="mt-8 w-full max-w-lg">
          {results.map((result, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
              <p className="text-gray-700 font-semibold">Description: {result.description}</p>
              <img
                src={result.image_filename}
                alt="Similar Item"
                className="w-full mt-2 rounded"
              />
              <p className="text-gray-500 mt-2">Similarity: {result.total_similarity.toFixed(4)}</p>
              <button
                onClick={() => handleFeedback(index, true)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200 mt-2 mr-2"
              >
                Correct Match
              </button>
              <button
                onClick={() => handleFeedback(index, false)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200 mt-2"
              >
                Incorrect Match
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

             
