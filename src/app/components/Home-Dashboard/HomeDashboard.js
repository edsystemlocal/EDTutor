

import Footer from "../Footer/Footer";

export default function HomeDashboard() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 text-gray-800">
      {/* Main Heading */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-4 animate-fade-in text-blue-700">
          Welcome to the Engineering Drawing Hub
        </h1>
        <p className="text-lg font-light mb-8 text-blue-500">
          Explore precise and interactive solutions for all your engineering drawing needs.
        </p>
      </div>

      {/* Decorative Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl px-4 mb-10">
        {/* Section 1: Parabola */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Understanding Parabolas</h2>
          <img 
            src="https://image.slidesharecdn.com/parabolahyperbola-210105084338/85/Construct-Parabola-Hyperbola-Engineering-Graphics-2-320.jpg" 
            // src="https://media.licdn.com/dms/image/v2/C4D12AQHaXD1msd3C9Q/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1564666637042?e=1740009600&v=beta&t=V65kSCMZrrtHyXQNLsMisDTAxE3PjIr3nexRDxikcTI" 
            alt="Parabola Visualization"
            className="w-full h-auto mb-4 rounded-md"
          />
          <p className="text-sm text-gray-600 mb-4">
            Dive into the world of parabolas and learn how they form essential structures in engineering and physics. Visualize and analyze their properties effortlessly.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Learn More
          </button>
        </div>

        {/* Section 2: Ellipse */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Mastering Ellipses</h2>
          <img 
            src="https://i.ytimg.com/vi/TZYI5pIfM7k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA6cJZ0RjYHfzbLpImhBWh0W2TS4A" 
            alt="Ellipse Geometry"
            className="w-full h-auto mb-4 rounded-md"
          />
          <p className="text-sm text-gray-600 mb-4">
            Explore the geometry of ellipses and their applications in mechanical designs and orbits. Enhance your understanding with detailed visual tools.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Discover More
          </button>
        </div>

        {/* Section 3: Line */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Understanding Lines</h2>
          <img 
            src="https://i.ytimg.com/vi/nCg7T8261jA/maxresdefault.jpg" 
            alt="Line Equation"
            className="w-full h-auto mb-4 rounded-md"
          />
          <p className="text-sm text-gray-600 mb-4">
            Study the fundamental concept of lines in geometry, their equations, and their role in engineering drawings. Lines are the building blocks of many shapes.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Learn More
          </button>
        </div>

        {/* Section 4: Plane */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Exploring Planes</h2>
          <img 
            src="https://tse4.mm.bing.net/th?id=OIP.XRZ7gqpIo-2E4biUMeDwSQHaFj&pid=Api&P=0&h=180" 
            alt="Plane Geometry"
            className="w-full h-auto mb-4 rounded-md"
          />
          <p className="text-sm text-gray-600 mb-4">
            Learn about planes, their properties, and how they interact with lines and other geometric figures in engineering contexts.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Start Learning
          </button>
        </div>

        {/* Section 5: Hyperbola */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Exploring Hyperbolas</h2>
          <img 
            src="https://i.ytimg.com/vi/xz5lzG0g7bM/maxresdefault.jpg" 
            alt="Hyperbola Geometry"
            className="w-full h-auto mb-4 rounded-md"
          />
          <p className="text-sm text-gray-600 mb-4">
            Understand the fascinating properties of hyperbolas, their mathematical significance, and applications in various fields.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Learn More
          </button>
        </div>

        {/* Section 6: Scale */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Mastering Scale Drawings</h2>
          <img 
            src="https://image.slidesharecdn.com/oldnvvp3qfwqutox2rrh-signature-7aae4b283db858d97fbdaddbd5a0fd0686c9ebe550d122524f9ed8ac5a00142e-poli-170503143618/85/Scales-ENGINEERING-DRAWING-GRAPHICS-8-320.jpg" 
            alt="Scale Drawing"
            className="w-full h-auto mb-4 rounded-md"
          />
          <p className="text-sm text-gray-600 mb-4">
            Learn how to create accurate scale drawings for architectural and engineering designs, essential for precise planning.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Discover Techniques
          </button>
        </div>

         {/* Section 7: Bisecting Line */}
         <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Bisecting a Line</h2>
          <img 
            src="https://thirdspacelearning.com/wp-content/uploads/2021/10/Perpendicular-Bisector-what-is-card.png" 
            alt="Bisecting Line"
            className="w-full h-auto mb-4 rounded-md"
          />
          <p className="text-sm text-gray-600 mb-4">
            Learn the technique of bisecting a line and its importance in geometry and construction. This method is essential for creating symmetrical designs.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Learn More
          </button>
        </div>

         {/* Section 8: Cycloid */}
         <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Exploring the Cycloid</h2>
          <img 
            src="https://image.slidesharecdn.com/cycloidalcurves-180422113425/85/Cycloidal-curves-6-320.jpg" 
            alt="Cycloid Curve"
            className="w-full h-auto mb-4 rounded-md"
          />
          <p className="text-sm text-gray-600 mb-4">
            Understand the cycloid curve, a fascinating shape traced by a point on a circle as it rolls along a straight line. It's widely used in mechanical designs.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Discover More
          </button>
        </div>

         {/* Section 9: Involute */}
         <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Understanding the Involute</h2>
          <img 
            src="https://i.ytimg.com/vi/5pf6MEyyOPg/maxresdefault.jpg" 
            alt="Involute Gear Profile"
            className="w-full h-auto mb-4 rounded-md"
          />
          <p className="text-sm text-gray-600 mb-4">
            Dive into the concept of involutes and their use in gear design. Involute curves are critical in creating gear teeth that mesh efficiently.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}



// import { useState } from "react";
// import Footer from "../Footer/Footer";

// export default function HomeDashboard() {
//   const [effect, setEffect] = useState([]);

//   const handleAnimation = (e) => {
//     const x = e.clientX;
//     const y = e.clientY;

//     // Create a new effect with a random key
//     const newEffect = { id: Math.random(), x, y };

//     setEffect((prev) => [...prev, newEffect]);

//     // Remove the effect after the animation ends
//     setTimeout(() => {
//       setEffect((prev) => prev.filter((ef) => ef.id !== newEffect.id));
//     }, 1000);
//   };

//   return (
//     <div
//       className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 text-gray-800 relative overflow-hidden"
//       onClick={handleAnimation}
//     >
//       {/* Main Heading */}
//       <div className="text-center">
//         <h1 className="text-5xl font-extrabold mb-4 animate-fade-in text-blue-700">
//           Welcome to the Engineering Drawing Hub
//         </h1>
//         <p className="text-lg font-light mb-8 text-blue-500">
//           Explore precise and interactive solutions for all your engineering drawing needs.
//         </p>
//       </div>

//       {/* Animation Effects */}
//       {effect.map((ef) => (
//         <span
//           key={ef.id}
//           className="absolute bg-blue-500 rounded-full pointer-events-none animate-ping"
//           style={{
//             top: ef.y - 25,
//             left: ef.x - 25,
//             width: 10,
//             height: 10,
//           }}
//         ></span>
//       ))}

//       {/* Decorative Content */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl px-4 mb-10">
//         {/* Sections */}
//         <div className="p-6 bg-white shadow-lg rounded-lg text-center">
//           <h2 className="text-xl font-semibold mb-2 text-blue-700">
//             Understanding Parabolas
//           </h2>
//           <img
//             src="https://image.slidesharecdn.com/parabolahyperbola-210105084338/85/Construct-Parabola-Hyperbola-Engineering-Graphics-2-320.jpg"
//             alt="Parabola Visualization"
//             className="w-full h-auto mb-4 rounded-md"
//           />
//           <p className="text-sm text-gray-600 mb-4">
//             Dive into the world of parabolas and learn how they form essential
//             structures in engineering and physics.
//           </p>
//           <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
//             Learn More
//           </button>
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }


// import { useState } from "react";

// export default function SpiralEffect() {
//   const [effects, setEffects] = useState([]);

//   const handleClick = (e) => {
//     const x = e.clientX;
//     const y = e.clientY;

//     // Create a new effect at the clicked position
//     const newEffect = { id: Math.random(), x, y };

//     setEffects((prev) => [...prev, newEffect]);

//     // Remove the effect after the animation duration
//     setTimeout(() => {
//       setEffects((prev) => prev.filter((effect) => effect.id !== newEffect.id));
//     }, 1000); // Adjust time as per the animation duration
//   };

//   return (
//     <div
//       className="relative w-full h-screen bg-gradient-to-r from-indigo-100 to-indigo-200 overflow-hidden"
//       onClick={handleClick}
//     >
//       <h1 className="absolute top-10 w-full text-center text-3xl font-bold text-indigo-700">
//         Click Anywhere for Spiral Highlight Effect
//       </h1>

//       {/* Render Effects */}
//       {effects.map((effect) => (
//         <span
//           key={effect.id}
//           className="absolute rounded-full bg-indigo-500"
//           style={{
//             top: effect.y - 25, // Adjust position to center the circle
//             left: effect.x - 25, // Adjust position to center the circle
//             width: "30px", // Small size
//             height: "30px", // Small size
//             animation: "spiralEffect 1s ease-out", // Spiral animation style
//           }}
//         ></span>
//       ))}

//       {/* Define the custom spiral animation */}
//       <style jsx>{`
//         @keyframes spiralEffect {
//           0% {
//             transform: scale(1) rotate(0deg);
//           }
//           100% {
//             transform: scale(0.5) rotate(720deg);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
