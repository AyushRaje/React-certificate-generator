import React, { useEffect, useRef , useState } from 'react';
import axios from 'axios';
import SuccessModal from './SuccessModal';
function GenerateModal(props) {
    const [email, setEmail] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const fileContent = document.getElementById('inputFile') 
    const [successResponse, setSuccessResponse] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        const validExtensions = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'];

        // Check if the file is valid
        if (selectedFile) {
            if (validExtensions.includes(selectedFile.type)) {
                setFile(selectedFile);
                setError(null);
            } else {
                setError('Please upload a file with .xlsx or .csv extension.');
                setFile(null);
            }
        }
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (file && email) {
            setLoading(true);
            setError(null);
            setSuccessMessage('');
            console.log(fileContent.files[0])
            try {
                // const formData = {
                //     "file": fileContent.files[0],
                //     "dictionary": {
                //         "email": email,
                //         "template_id":"blank_slide"

                //     }
                // }
            const formData = new FormData();
            formData.append('file', file);
            formData.append('dictionary', JSON.stringify({
                email: email,
                template_id: 'blank_slide'
            }));
    
                const response = await axios.post('http://localhost:8000/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
    
                setSuccessResponse(response.data);
                console.log('File upload response:', successResponse);
                setSuccessMessage('File uploaded successfully!');
            } catch (err) {
                setError('File upload failed. Please try again.');
                console.error('Error uploading file:', err);
            } finally {
                setLoading(false);
            }
        } else {
            setError('Please provide both email and a file.');
        }
    };
    
    const convertFileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                // Remove the "data:*/*;base64," prefix if needed
                const base64String = reader.result.split(',')[1];
                resolve(base64String);
            };
            reader.onerror = (error) => reject(error);
        });
    };
    
    

    const modalRef = useRef(null); // Use ref instead of document.getElementById

    useEffect(() => {
        if (modalRef.current) {
            if (props.trigger) {
                fadeIn(modalRef.current);
            } else {
                fadeOut(modalRef.current);
            }
        }
    }, [props.trigger]);

    function fadeOut(el) {
        el.style.opacity = 1;
        (function fade() {
            if ((el.style.opacity -= 0.1) < 0) {
                el.style.display = "none";
                props.closeModal(); // Call close modal when completely hidden
            } else {
                requestAnimationFrame(fade);
            }
        })();
    }

    function fadeIn(el) {
        el.style.opacity = 0;
        el.style.display = "flex";
        (function fade() {
            let val = parseFloat(el.style.opacity);
            if (!((val += 0.2) > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    return (
        <>  
        <div 
            ref={modalRef} 
            className="py-12 bg-white bg-opacity-80 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-sm" 
            style={{ display: 'none' }}>

                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                    <form onSubmit={handleSubmit}>
                        <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Please Provide Data</h1>
                        <label htmlFor="email" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Email</label>
                        <input className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="xyz@email.com" type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required />
                        
                        <label htmlFor="inputFile" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Student Details </label>
                        <input type="file"
                    id="inputFile" // Input has the specified ID
                    accept=".xlsx,.csv" // Accepts only .xlsx and .csv files
                    onChange={handleFileChange}
                    required className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Please Provide Student Data"/>
                        {/* Other input fields... */}

                        

                        <div className="flex items-center justify-start w-full">
                            <button onClick={() => {props.closeModal(); handleOpenModal();  }} type="submit" disabled={!file || loading} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-green-600 bg-red-700 rounded text-white px-8 py-2 text-sm" >Submit</button>
                            
                            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onClick={() => props.closeModal()}>Cancel</button>
                        </div>
                        
                        <button className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onClick={() => props.closeModal()} aria-label="close modal" role="button">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </form> 
                    <SuccessModal open={isModalOpen} setOpen={setIsModalOpen} successResponse={JSON.parse(JSON.stringify(successResponse))}/>        
                     
                    </div>
                </div>
            </div>
        </>    
    );
}

export default GenerateModal;
