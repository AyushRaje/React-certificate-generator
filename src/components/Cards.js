import React, { useState } from 'react';
import SelectTemplateButton from './SelectTemplateButton';
const templates = [
    { id: 1, href: 'sample_card.png', current: false, uploadedAt:'14 Dec 23' },
    { id: 2, href: 'sample_card.png', current: false,uploadedAt:'21 Jan 24' },
    { id: 3, href: 'sample_card.png', current: false,uploadedAt:'18 Nov 24' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function Cards(){
    const [selectedData, setSelectedData] = useState(null);

    const handleDivClick = (data) => {
      
      if (selectedData!=null && selectedData.id == data.id) {
        // If it's already selected, deselect it
        data.current = false;
        setSelectedData(null);
        console.log("Div Clicked:" ,data);
      } 
      else if(selectedData!=null && selectedData.id !== data.id){
        
        selectedData.current = false
        if(data.current === true){
            data.current = false;
        }
        else{
            data.current = true;
        }
        setSelectedData(data);
        console.log("Div Clicked:" ,data);
      }
      else{
        data.current = true;
        setSelectedData(data);
        console.log("Div Clicked:" ,data);
      }
      
    };

    return(
<>
<link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
<section class="pt-20 lg:pt-[30px] pb-2 lg:pb-5">
   <div class="container">
      <div class="flex flex-wrap justify-center -mx-4">
         <div class="w-full px-4">
            <div class="text-center mx-auto mb-[60px] lg:mb-10 max-w-[510px]">
               <span class="font-semibold text-lg text-green-600 mb-2 block">
               Welcome to Grace Edunet
               </span>
               <h2
                  class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                  >
                  Certificate Generator
               </h2>
            </div>
         </div>
      </div>
      <div class="flex flex-wrap -mx-4">
        {/* Card Element Start */}
      {templates.map((item) => (
    <div class="w-full md:w-1/2 lg:w-1/3 px-4" onClick={() => handleDivClick(item)}>
            <div class="max-w-[300px] mx-auto mb-10">
               <div class="rounded overflow-hidden mb-8">
               <img 
                    src={item.href}
                    alt="image"
                    class="w-full"
                    key={item.id}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                    item.current ? 'bg-red-700 text-white' : 'text-black hover:bg-green-700 hover:text-white',
                    'px-1.5 py-1.5 text-sm font-medium rounded-xl',
                    )}
                />
               </div>
               <div>
                  <span
                     class="
                     bg-green-600
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-4
                     "
                     >
                  Uploaded at : {item.uploadedAt}
                  </span>
               </div>
            </div>
         </div>

))}
 {/* Card Element Ends */}
        
         
        
        

      </div>
   </div>
</section>
<SelectTemplateButton selectedTemplate = {selectedData}/>
</>
    );
}

export default Cards;