"use client";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

import Navbar from "../components/Navbar/navbar"; 
import Footer from "../components/Footer/Footer";

export default function AboutPage() {
    const [drawingType, setDrawingType] = useState();
    const router = useRouter();
  const resetDrawing = (path) => {

    if (drawingType === path) {
      setDrawingType(null); // Reset to null
      setTimeout(() => setDrawingType(path), 0); // Update after reset

    } else {
      setDrawingType(path); // Direct update for new selection

    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 flex flex-col">
      {/* Navbar */}
      {/* <Navbar /> */}
<Navbar resetDrawing={resetDrawing} />
      <div className="flex-grow flex flex-col items-center p-6 ">
        <div className="max-w-4xl w-full  p-8 rounded-lg shadow-xl bg-gradient-to-r from-blue-100 to-blue-300">
          <h1 className="text-4xl font-semibold text-center text-blue-800 mb-6">About Us</h1>

          <p className="text-lg text-gray-700 mb-6">
            Welcome to Stretech, where innovation meets excellence. We are dedicated to providing top-quality products and services that cater to the diverse needs of our customers.
          </p>

          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700 mb-6">
            Stretech was founded with a vision to revolutionize the industry through innovation, commitment, and customer satisfaction. Over the years, we have grown into a trusted name known for our expertise and reliability.
          </p>

          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our mission is to deliver high-quality solutions that enhance efficiency and bring value to our customers. We strive to push the boundaries of innovation while maintaining integrity and transparency in all our operations.
          </p>

          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700 mb-6">
            To be a global leader in our industry, setting benchmarks in quality and service. We aim to create a lasting impact through our cutting-edge solutions and customer-focused approach.
          </p>

          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Why Choose Us?</h2>
          <ul className="text-lg text-gray-700 list-inside list-disc mb-6">
            <li><strong>Expertise & Experience:</strong> With years of experience, we understand the evolving market needs.</li>
            <li><strong>Customer-Centric Approach:</strong> Your satisfaction is our top priority.</li>
            <li><strong>Innovation & Quality:</strong> We constantly innovate to provide the best solutions.</li>
            <li><strong>Dedicated Team:</strong> Our team of professionals ensures excellence in every project.</li>
          </ul>

          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-6">
            We would love to hear from you! For inquiries, collaborations, or support, feel free to reach out to us.
          </p>
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



