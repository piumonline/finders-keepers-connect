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
      <img src={`http://localhost:5000/images/${item.image_filename}`} alt={item.description} className="w-full object-cover rounded-lg mb-4" />
      <p><strong>Description:</strong> {item.description}</p>
      <p><strong>Name:</strong> {item.name}</p>
      <p><strong>Location:</strong> {item.location}</p>
      <p><strong>Email:</strong> {item.email}</p>
      <p><strong>Phone:</strong> {item.phone}</p>
    </Modal>
  );
};

export default ResultModal;
