import React from "react";
import { Card, Tag, Button } from "antd";

interface ResultCardProps {
  item: any;
  onClick: () => void;
  onFeedback: (isCorrect: boolean) => void;
}

const getColorForSimilarity = (similarity: number): string => {
  if (similarity >= 0.75) return "green";
  if (similarity >= 0.5) return "yellow";
  return "red";
};

const ResultCard: React.FC<ResultCardProps> = ({ item, onClick, onFeedback }) => {
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
    <div className="h-[280px] bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg transition duration-200 flex items-center p-4 border-4xl ">
      <Card
        cover={<img alt={item.description} src={`http://localhost:5000/images/${item.image_filename}`} onError={handleImageError} />}
        onClick={onClick}
        className="flex items-center justify-center"
      >
      </Card>
      <div className="ml-10 mt-2 flex flex-col gap-2">
        <p>{item.description}</p>
        <p>{item.location}</p>
        {/* <p style={{ color }}>{item.similarity}%</p> */}
        <p> Matching: {renderSimilarityTag(item.similarity)}</p>
        <div className="mt-2 flex space-x-2">
          <Button type="primary" className='bg-blue-400' onClick={() => onFeedback(true)}>Correct</Button>
          <Button type="default" onClick={() => onFeedback(false)}>Incorrect</Button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
