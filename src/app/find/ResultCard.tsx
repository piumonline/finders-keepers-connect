import React from "react";
import { Card, Tag } from "antd";

interface ResultCardProps {
  item: any;
  onClick: () => void;
}

const getColorForSimilarity = (similarity: number): string => {
  if (similarity >= 0.75) return "green";
  if (similarity >= 0.5) return "yellow";
  return "red";
};

const ResultCard: React.FC<ResultCardProps> = ({ item, onClick }) => {
  const similarityPercentage = (item.total_similarity * 100).toFixed(2);
  const color = getColorForSimilarity(item.total_similarity);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/img-placeholder.jpg';
  };

  return (
    <Card
      hoverable
      onClick={onClick}
      className="w-52 h-52 justify-center"
    >
      <img
        src={`/img-placeholder.jpg`}
        alt={item.description}
        className="object-cover rounded-lg mb-4"
        onError={handleImageError}
      />
      <Tag
        color={color}
        className="w-full text-center mt-9 h-6 p-1 flex items-center justify-center"
      >
        <b>Matched = {similarityPercentage}%</b>
      </Tag>
    </Card>
  );
};

export default ResultCard;
