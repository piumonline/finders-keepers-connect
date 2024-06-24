import React from "react";
import { Card, Button, Tag } from "antd";

interface ResultCardProps {
  item: any;
  onClick: () => void;
  onFeedback: () => void;
  onFeedbackIncorrect: () => void;
  feedbackSubmitted: boolean;
}

const getColorForSimilarity = (similarity: number): string => {
  if (similarity >= 0.75) return "green";
  if (similarity >= 0.5) return "yellow";
  return "red";
};

const ResultCard: React.FC<ResultCardProps> = ({ item, onClick, onFeedback, onFeedbackIncorrect, feedbackSubmitted }) => {
  const similarityPercentage = (item.total_similarity * 100).toFixed(2);
  const color = getColorForSimilarity(item.total_similarity);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/img-placeholder.jpg';
  };

      // Function to round and determine tag color based on similarity score
      const renderSimilarityTag = (score: number) => {
        const roundedScore = Math.round(score * 100);
        let color = '';
    
        if (roundedScore >= 80) {
          color = 'success';
        } else if (roundedScore >= 60) {
          color = 'warning';
        } else {
          color = 'error';
        }
    
        return (
          <Tag bordered={false} color={color}>
            {roundedScore}%
          </Tag>
        );
      };

  return (
    <div className="h-[280px] bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg transition duration-200 flex items-center p-4 border-4xl">
      <Card
        cover={<img alt={item.description} className='w-40 max-w-[20rem]' src={`http://localhost:5000/images/${item.image_filename}`} onError={handleImageError} />}
        onClick={onClick}
        className="flex items-center justify-center"
      />
      <div className="ml-10 mt-2 flex flex-col gap-2">
      <p> <strong>Description:</strong> {item.description}</p>
        <p> <strong>Location:</strong> {item.location}</p>
        <p> <strong>Matching:</strong> {renderSimilarityTag(item.similarity)}</p>
        {!feedbackSubmitted && (
          <div className="mt-2 flex space-x-2">
            <Button type="primary" className="bg-blue-400" onClick={onFeedback}>Correct</Button>
            <Button type="default" onClick={onFeedbackIncorrect}>Incorrect</Button>
          </div>
        )}
        {feedbackSubmitted && <p className="mt-2 text-green-500">Feedback submitted</p>}
      </div>
    </div>
  );
};

export default ResultCard;
