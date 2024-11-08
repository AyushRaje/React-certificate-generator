import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

export default function Verification({props}){
  const { id } = useParams();
  const [certificateData, setCertificateData] = useState(null);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        // Make the GET request using axios
        const response = await axios.get(`http://localhost:8000/verify/${id}`);
        
        // Update state with the response status and data
        setStatus(response.status);
        setCertificateData(response.data.data);
        setMessage(response.data.message);
      } catch (error) {
        console.error("Error fetching certificate data:", error);
        
        // Handle error response (e.g., 404 Not Found)
        if (error.response) {
          setStatus(error.response.status);
          setMessage(error.response.data.message || "An error occurred.");
        } else {
          setMessage("Network error. Please try again later.");
        }
      }
    };

    fetchCertificate();
  }, [id]);

  const transformDriveLink = (driveLink) => {
    const fileId = driveLink.match(/\/d\/(.+?)\//);
    return fileId ? `https://drive.google.com/file/d/${fileId[1]}/preview` : driveLink;
  };
  const transformTime = (timeString) =>{
    const dateObject = new Date(timeString);
    return format(dateObject, 'dd-MM-yyyy');
  };
  const getDownloadLink = (driveLink) => {
    // Extract the file ID from the Google Drive link
    const fileId = driveLink.match(/\/d\/(.*)\//)?.[1];
    return fileId ? `https://drive.google.com/uc?export=download&id=${fileId}` : driveLink;
  };


    return (
        <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
    {status == 202 && certificateData ?(
      certificateData.map((certificate, index) => (
      <>
      
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
      <iframe
        src={transformDriveLink(certificate.drive_link)}
        width="500px"
        height="400px"
        allow="autoplay"
        title="Google Drive Document"
        style={{
          border:'5px solid green',
        }}
        sandbox="allow-scripts allow-same-origin" 
        
      ></iframe>

      </div>

    <div className="lg:py-24 justify-start text-left">
      <h2 className="text-3xl font-bold sm:text-4xl">Valid Certificate <img src='\verified.gif' className='inline-block' 
    style={{ width: '40px', height: '40px', marginLeft: '8px' }} // Adjust width and height for the image
    alt="verified"></img> </h2>

<p className="mt-10 text-gray-600">
  This certificate is issued to 
  <span className="font-bold text-lg text-black"> {certificate.candidate_name} </span> 
  against the successful completion of the course 
  <span className="font-bold text-lg text-black"> {certificate.course_name} </span> 
  (<span className="font-bold text-lg text-black">{certificate.course_id}</span>) at <span className="font-bold text-lg text-black">Grace Edunet</span>. 
  This certificate was issued on 
  <span className="font-bold text-lg text-black"> {transformTime(certificate.created_at)} </span>
</p>
      <button 
        className="mt-12 px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-red-600"
        onClick={() => window.open(getDownloadLink(certificate.drive_link), '_blank')}
      >
        Download Certificate
      </button>

    </div>
    </>))):(<div className="lg:py-24">
      <h2 className="text-3xl font-bold sm:text-4xl">Invalid Certificate</h2>

      <p className="mt-4 text-gray-600">
        Either the following certificate credentials does not exists or the certificate has expired.
      </p>
    </div>)}
      
    </div>
  </div>
</section>
    );
}