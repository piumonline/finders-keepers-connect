"use client"
// src/App.js""
import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [sentence1, setSentence1] = useState('');
    const [sentence2, setSentence2] = useState('');
    const [similarity, setSimilarity] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        setSimilarity(null);

        try {
            const response = await axios.post('http://192.168.174.67:5000/similarity', {
                sentence1,
                sentence2
            });
            setSimilarity(response.data.similarity);
        } catch (err) {
            setError('Error calculating similarity');
        }
    };

    return (
        <div className="App">
            <h1>Sentence Similarity</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Sentence 1:</label>
                    <input type="text" value={sentence1} onChange={(e) => setSentence1(e.target.value)} required />
                </div>
                <div>
                    <label>Sentence 2:</label>
                    <input type="text" value={sentence2} onChange={(e) => setSentence2(e.target.value)} required />
                </div>
                <button type="submit">Calculate Similarity</button>
            </form>
            {similarity !== null && (
                <div>
                    <h2>Cosine Similarity: {similarity}</h2>
                </div>
            )}
            {error && (
                <div>
                    <h2>{error}</h2>
                </div>
            )}
        </div>
    );
}

export default App;
