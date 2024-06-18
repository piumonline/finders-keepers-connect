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

  return (
    <div className="h-[280px] bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg transition duration-200 flex items-center p-4 border-4xl ">
      <Card
        // hoverable
        cover={<img alt={item.description} src={`http://localhost:5000/images/${item.image_filename}` } />}
        onClick={onClick}
        // className="w-38 h-36"
        className=" flex items-center justify-center"
      >
        {/* <Card.Meta description={`Score: ${item.total_similarity.toFixed(2)}`} /> */}
      </Card>
      <div className=" ml-10 mt-2 flex flex-col ">
        <p>{item.description}</p>
        <p>{item.location}</p>
        <p>{item.total_similarity}</p>
        <div className="mt-2 flex space-x-2">
          <Button type="primary" className='bg-blue-400' onClick={() => onFeedback(true)}>Correct</Button>
          <Button type="default" onClick={() => onFeedback(false)}>Incorrect</Button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;