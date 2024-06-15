import React from 'react';
import { Modal } from 'antd';

interface ResultModalProps {
  item: any;
  visible: boolean;
  onClose: () => void;
}

const ResultModal: React.FC<ResultModalProps> = ({ item, visible, onClose }) => {
  return (
    <Modal
      title="Item Details"
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      {/* `http://localhost:5000/images/${item.image_filename}` */}
      <img src={`http://localhost:5000/images/${item.image_filename}`} alt={item.description} className="w-full h-48 object-cover rounded-lg mb-4" />
      <p><strong>Description:</strong> {item.description}</p>
      <p><strong>Image Similarity:</strong> {item.image_similarity}</p>
      <p><strong>Location Similarity:</strong> {item.location_similarity}</p>
      <p><strong>Text Similarity:</strong> {item.text_similarity}</p>
      <p><strong>Time Similarity:</strong> {item.time_similarity}</p>
      <p><strong>Total Similarity:</strong> {item.total_similarity}</p>
    </Modal>
  );
};

export default ResultModal;
