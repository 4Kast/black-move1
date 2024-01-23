import React, { useEffect, useState } from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
import { ReactComponent as IconClose } from '../assets/close.svg';

const Backdrop = ({ onClose }) => {
  return <div className={classes.modalBackdrop} onClick={onClose}></div>;
};

const ModalContent = ({ children, onClose }) => {
  return (
    <>
      <button className={classes.buttonClose} onClick={onClose}>
        <IconClose />
      </button>
      <div className={classes.modal}>
        <div className={classes.modalContent}>{children}</div>
      </div>
    </>
  );
};

const Modal = ({ children, onClose }) => {
  const [modalContainer, setModalContainer] = useState(null);

  useEffect(() => {
    // Create a container element for the modal
    const newModalContainer = document.createElement('div');
    document.body.appendChild(newModalContainer);
    setModalContainer(newModalContainer);

    // Clean up on unmount
    return () => {
      if (newModalContainer) {
        document.body.removeChild(newModalContainer);
      }
    };
  }, []);

  if (!modalContainer) {
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, modalContainer)}
      {ReactDOM.createPortal(<ModalContent children={children} onClose={onClose} />, modalContainer)}
    </>
  );
};

export default Modal;
