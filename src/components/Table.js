export default function Table(){
    return (
        <>
        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance py-4">
        Sample Excel Format
        </p>   
        <p className="mt-6 text-lg/8 text-gray-600">
                This is a Sample format for the excel file to be upload.Please make sure all the column names are <b>stricly</b> in
                the given manner.
        </p>
    <div class='container max-h-screen items-center justify-center bg-inherit'>
            
    <div class="container items-center justify-center min-h-[50px] py-10">
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-black">
                <thead class="text-xs text-black uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="py-3 px-6">ROLL NO</th>
                    <th scope="col" class="py-3 px-6">NAME</th>
                    <th scope="col" class="py-3 px-6">FATHER NAME</th>
                    <th scope="col" class="py-3 px-6">COURSE</th>
                    <th scope="col" class="py-3 px-6">COURSE ID</th>
                    <th scope="col" class="py-3 px-6">CENTER</th>
                    <th scope="col" class="py-3 px-6">SCHEME</th>
                    <th scope="col" class="py-3 px-6">GENDER</th>


                </tr>
                </thead>
                <tbody>
                <tr class="bg-white border-b dark:bg-gray-50 dark:border-gray-700">
                    <td class="py-4 px-6">MKY1298</td>
                    <td class="py-4 px-6">Ayush Raje</td>
                    <td class="py-4 px-6">Nitin Raje</td>
                    <td class="py-4 px-6">Information Technology</td>
                    <td class="py-4 px-6">IT1038C</td>
                    <td class="py-4 px-6">Mahajyoti Vishwa Vidhyala, Nagpur</td>
                    <td class="py-4 px-6">Skill and Development Program</td>
                    <td class="py-4 px-6">S/O</td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-50 dark:border-gray-700">
                    <td class="py-4 px-6">MKY1291</td>
                    <td class="py-4 px-6">Sahil Kumar</td>
                    <td class="py-4 px-6">Arya Kumar</td>
                    <td class="py-4 px-6">Computer Engineering</td>
                    <td class="py-4 px-6">CS1228A</td>
                    <td class="py-4 px-6">Mahajyoti Vishwa Vidhyala, Nagpur</td>
                    <td class="py-4 px-6">Skill and Development Program</td>
                    <td class="py-4 px-6">S/O</td>
                </tr>
                <tr class="bg-white dark:bg-gray-50 dark:border-gray-700">
                    <td class="py-4 px-6">MKY1232</td>
                    <td class="py-4 px-6">Aditya Gawhale</td>
                    <td class="py-4 px-6">Ghanshyam Gawhale</td>
                    <td class="py-4 px-6">Information Technology</td>
                    <td class="py-4 px-6">IT1038C</td>
                    <td class="py-4 px-6">Mahajyoti Vishwa Vidhyala, Nagpur</td>
                    <td class="py-4 px-6">Skill and Development Program</td>
                    <td class="py-4 px-6">S/O</td>
                </tr>
                
                </tbody>
            </table>
            </div>
    </div>
    
</div>
</div>

</>
    );
}
