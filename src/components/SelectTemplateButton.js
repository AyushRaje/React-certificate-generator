import GenerateModal from "./GenerateModal";
import React, { useState } from 'react';
function SelectTemplateButton(props){

  const [modalVisible, setModalVisible] = useState(false);

  // Function to handle showing the modal
    const handleShowModal = () => {
    setModalVisible(true);
    };

  // Function to handle hiding the modal
    const handleCloseModal = () => {
    setModalVisible(false);
    };

    return(
        <div class='flex items-center justify-center'>
        <div class='flex flex-col'>
        <button type='button'
        class='flex break-inside hover:bg-green-600 bg-green-600 rounded-3xl px-4 py-2 mb-4 w-full dark:bg-red-600 dark:text-white'
        onClick={handleShowModal}>
        <div class='flex items-center justify-between flex-1'>
          <span class='text-md font-medium text-white px-1'>Select Template     </span>
          <svg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg' >
            <path fillRule='evenodd' clipRule='evenodd'
              d='M0 8.71423C0 8.47852 0.094421 8.25246 0.262491 8.08578C0.430562 7.91911 0.658514 7.82547 0.896201 7.82547H13.9388L8.29808 2.23337C8.12979 2.06648 8.03525 1.84013 8.03525 1.60412C8.03525 1.36811 8.12979 1.14176 8.29808 0.974875C8.46636 0.807989 8.6946 0.714233 8.93259 0.714233C9.17057 0.714233 9.39882 0.807989 9.5671 0.974875L16.7367 8.08499C16.8202 8.16755 16.8864 8.26562 16.9316 8.3736C16.9767 8.48158 17 8.59733 17 8.71423C17 8.83114 16.9767 8.94689 16.9316 9.05487C16.8864 9.16284 16.8202 9.26092 16.7367 9.34348L9.5671 16.4536C9.39882 16.6205 9.17057 16.7142 8.93259 16.7142C8.6946 16.7142 8.46636 16.6205 8.29808 16.4536C8.12979 16.2867 8.03525 16.0604 8.03525 15.8243C8.03525 15.5883 8.12979 15.362 8.29808 15.1951L13.9388 9.603H0.896201C0.658514 9.603 0.430562 9.50936 0.262491 9.34268C0.094421 9.17601 0 8.94995 0 8.71423Z'
              fill='white' />
          </svg>
        </div>
      </button>
      </div>
      <GenerateModal trigger={modalVisible} closeModal={handleCloseModal} selectedTemplate={props.selectedTemplate}/>
      </div>
      
    );
}

export default SelectTemplateButton;