"use client";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar/navbar"; // ⚡️ Make sure the path is correct
import Footer from "../components/Footer/Footer";


// export default function ContactPage() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-r from-blue-100 to-blue-200">

//       {/* Contact Us Section */}
//       <div className=" bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-xl w-full text-center border border-white border-opacity-20">
//         <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4">Contact Us</h1>
//         <p className="text-gray-300 text-lg">
//           We’d love to hear from you! Feel free to reach out with any questions.
//         </p>
//       </div>

//       {/* Contact Details Section */}
//       <div className=" bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-xl w-full text-center mt-8 border border-white border-opacity-20">
//         <div className="space-y-6">
//           {/* Email */}
//           <div className="flex items-center  space-x-4 text-white text-lg hover:scale-105 transition-transform duration-300">
//             <div className="bg-white bg-opacity-20 p-3 rounded-full shadow-lg">
//               <Mail size={28} />
//             </div>
//             <a href="mailto:contact@example.com" className="hover:underline hover:text-blue-300 transition duration-200">
//               <strong>Email:</strong> contact@example.com
//             </a>
//           </div>

//           {/* Phone */}
//           <div className="flex items-center  space-x-4 text-white text-lg hover:scale-105 transition-transform duration-300">
//             <div className="bg-white bg-opacity-20 p-3 rounded-full shadow-lg">
//               <Phone size={28} />
//             </div>
//             <a href="tel:+1234567890" className="hover:underline hover:text-blue-300 transition duration-200">
//               <strong>Phone:</strong> +123 456 7890
//             </a>
//           </div>

//           {/* Address */}
//           <div className="flex items-center  space-x-4 text-white text-lg hover:scale-105 transition-transform duration-300">
//             <div className="bg-white bg-opacity-20 p-3 rounded-full shadow-lg">
//               <MapPin size={28} />
//             </div>
//             <span>
//               <strong>Address:</strong> 123 Main Street, City, Country
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// ----------------------------------------------------------------------------------------------------------------------


export default function ContactPage() {
    const [drawingType, setDrawingType] = useState();
    
    const resetDrawing = (path) => {
  
      if (drawingType === path) {
        setDrawingType(null); // Reset to null
        setTimeout(() => setDrawingType(path), 0); // Update after reset
  
      } else {
        setDrawingType(path); // Direct update for new selection
  
      }
    };
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-100 to-blue-200">
      {/* Navbar */}
      {/* <Navbar /> */}
      <Navbar resetDrawing={resetDrawing} />


      <div className="flex flex-col items-center justify-center flex-grow p-6">
        <div className="bg-gradient-to-r from-blue-100 to-blue-300 rounded-lg shadow-lg p-8 max-w-lg w-full text-center mb-8">
          <h1 className="text-4xl font-semibold text-gray-800 mb-6 hover:scale-105 transition-transform duration-300">Contact Us</h1>
          <p className=" text-gray-600 text-lg">
            We would love to hear from you! Feel free to reach out with any questions.
          </p>
        </div>

        {/* Contact Details Section */}
        <div className="bg-gradient-to-r from-blue-100 to-blue-300 rounded-lg shadow-lg p-8 max-w-lg w-full text-center">
          <div className="mb-6">
            <p className="text-gray-700 text-lg mb-2 flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
              <Mail size={28} />
              <span>contact@example.com</span>
            </p>
            <p className="text-gray-700 text-lg mb-2 flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
              <Phone size={28} />
              <span> +123 456 7890</span>
            </p>
            <p className="text-gray-700 text-lg mb-2 flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
              <MapPin size={28} />
              <span> 123 Main Street, City, Country</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}




// ----------------------------------------------------------------------------------------------------------------

// export default function ContactPage() {
//     return (
//         <div className=" flex flex-col w-full items-center justify-center  bg-gradient-to-br from-blue-900">

//             <div className="ml-auto">
//                 <Navbar />
//             </div>

//             <div className="mb-10">
//                 {/* Contact Us Section */}
//                 <div className=" bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-xl w-full text-center border border-white border-opacity-20 mt-16">
//                     <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4">Contact Us</h1>
//                     <p className="text-gray-300 text-lg">
//                         We’d love to hear from you! Feel free to reach out with any questions.
//                     </p>
//                 </div>

//                 {/* Contact Details Section */}
//                 <div className=" bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-xl w-full text-center mt-8 border border-white border-opacity-20">
//                     <div className="space-y-6">
//                         {/* Email */}
//                         <div className="flex items-center space-x-4 text-white text-lg hover:scale-105 transition-transform duration-300">
//                             <div className="bg-white bg-opacity-20 p-3 rounded-full shadow-lg">
//                                 <Mail size={28} />
//                             </div>
//                             <a href="mailto:contact@example.com" className="hover:underline hover:text-blue-300 transition duration-200">
//                                 <strong>Email:</strong> contact@example.com
//                             </a>
//                         </div>

//                         {/* Phone */}
//                         <div className="flex items-center space-x-4 text-white text-lg hover:scale-105 transition-transform duration-300">
//                             <div className="bg-white bg-opacity-20 p-3 rounded-full shadow-lg">
//                                 <Phone size={28} />
//                             </div>
//                             <a href="tel:+1234567890" className="hover:underline hover:text-blue-300 transition duration-200">
//                                 <strong>Phone:</strong> +123 456 7890
//                             </a>
//                         </div>

//                         {/* Address */}
//                         <div className="flex items-center space-x-4 text-white text-lg hover:scale-105 transition-transform duration-300">
//                             <div className="bg-white bg-opacity-20 p-3 rounded-full shadow-lg">
//                                 <MapPin size={28} />
//                             </div>
//                             <span>
//                                 <strong>Address:</strong> 123 Main Street, City, Country
//                             </span>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//             <div className="ml-auto">

//                 <Footer />
//             </div>
//         </div>
//     );
// }
