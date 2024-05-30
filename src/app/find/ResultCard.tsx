import React from 'react';
import { Card } from 'antd';

interface ResultCardProps {
  item: any;
  onClick: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ item, onClick }) => {
  return (
    <Card
      hoverable
      cover={<img alt={item.description} src={`https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} />}
      onClick={onClick}
      className="w-32 h-32"
    >
      <Card.Meta description={`Score: ${item.total_similarity.toFixed(2)}`} />
    </Card>
  );
};

export default ResultCard;
