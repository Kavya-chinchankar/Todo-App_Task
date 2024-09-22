import React from 'react'

interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (open: boolean) => boolean | void;
    children: React.ReactNode;
  }


const Model: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {

    const handleClose = () => {
        setModalOpen(false);
      };


    return (
      <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <div className="modal-box relative">
          <label
            onClick={handleClose}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          {children}
         
        </div>
      </div>
    );
  };
  

export default Model