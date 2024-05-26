"use client"

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [description, setDescription] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [results, setResults] = useState<Array<{ description: string, image_path: string, similarity: number }>>([]);

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!image) {
      alert('Please upload an image.');
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = async () => {
      const imageBase64 = reader.result?.toString().split(',')[1];

      try {
        const response = await axios.post('http://127.0.0.1:5000/find_similar', {
          description: description,
          image: imageBase64
        });

        setResults(response.data);
      } catch (error) {
        console.error('Error finding similar items:', error);
      }
    };
    reader.onerror = (error) => {
      console.error('Error reading image file:', error);
    };
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="bg-blue-600 w-full py-4 text-white text-center text-2xl">
        Lost and Found Item Matching
      </header>
      <main className="flex flex-col items-center mt-8">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">Text Description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              className="w-full mt-2 p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700">Image:</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full mt-2 p-2 border rounded"
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Find Similar
          </button>
        </form>
        <div className="mt-8 w-full max-w-md">
          {results.map((result, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
              {/* {console.log(result.image_path)} */}
              {/* <img src={`http://127.0.0.1:5000/${result.image_path}`} alt="Similar Item" className="w-full mt-2 rounded" /> */}
              <img src={`http://localhost:5000/images/${result.image_path.replace(/\\/g, '/')}`} alt="Similar Item" className="w-full mt-2 rounded" />
              <p className="text-gray-500 mt-2">Similarity: {result.similarity.toFixed(4)}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
