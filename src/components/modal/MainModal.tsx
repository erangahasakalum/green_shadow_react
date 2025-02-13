import React, { useState } from 'react';
import {Modal } from 'antd';

interface ModalProps {
    open:boolean;
    setOpen:React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    title:string;
  }
  
const MainModal: React.FC<ModalProps> = ({children,setOpen,open,title}) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <>
      <Modal
        title={title}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
    {children}
      </Modal>
    </>
  );
};

export default MainModal;