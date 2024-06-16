import React from "react";
import { Modal, Tabs, Card, Collapse, Tag } from "antd";

interface ResultModalProps {
  item: any;
  visible: boolean;
  onClose: () => void;
}
const { TabPane } = Tabs;

const ResultModal: React.FC<ResultModalProps> = ({
  item,
  visible,
  onClose,
}) => {
  return (
    <Modal
      title="Item Details"
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <img
        src={`http://localhost:5000/images/${item.image_filename}`}
        alt={item.description}
        className="w-full object-cover rounded-lg mb-4"
      />
      <Card className="mb-2 mt-1">
        <Tabs defaultActiveKey="itemDetails" tabBarStyle={{ marginBottom: 20 }}>
          <TabPane tab="Item Details" key="itemDetails">
            <p className="mb-2">
              <strong>Description:</strong> {item.description}
            </p>
            <p className="mb-2">
              <strong>Location:</strong> {item.location}
            </p>
          </TabPane>
          <TabPane tab="Reporter Details" key=" reporterDetails">
            <p className="mb-2">
              <strong>Name:</strong> {item.name}
            </p>
            <p className="mb-2">
              <strong>Email:</strong> {item.email}
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> {item.phone}
            </p>
          </TabPane>
        </Tabs>
      </Card>
    </Modal>
  );
};

export default ResultModal;
