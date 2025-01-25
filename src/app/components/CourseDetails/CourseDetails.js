// import { motion } from "framer-motion";

// const plans = [
//   {
//     tier: "Silver",
//     price: "$29/month",
//     features: ["Access to basic courses", "Standard support"],
//     bg: "#C0C0C0",
//   },
//   {
//     tier: "Gold",
//     price: "$49/month",
//     features: ["All Silver features", "Premium courses", "Priority support"],
//     bg: "#FFD700",
//   },
//   {
//     tier: "Platinum",
//     price: "$79/month",
//     features: ["All Gold features", "Exclusive content", "Dedicated support"],
//     bg: "#E5E4E2",
//   },
// ];

// export default function CourseDetails() {
//   return (
//     <div className="space-y-6 text-center">
//       {plans.map((course, index) => (
//         <motion.div
//           key={course.tier}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: index * 0.3, duration: 0.6 }}
//           whileHover={{ scale: 1.05 }}
//           className="bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-transform"
//           style={{
//             background: `linear-gradient(to bottom right, ${course.bg}, #fff)`,
//           }}
//         >
//           <h2 className="text-2xl font-bold text-gray-800">{course.tier} Plan</h2>
//           <p className="text-xl font-semibold text-gray-800 mt-2">{course.price}</p>
//           <ul className="text-gray-500 mt-4 space-y-2">
//             {course.features.map((feature, idx) => (
//               <li key={idx} className="flex items-center">
//                 <span className="text-green-500 mr-2">✔</span>
//                 {feature}
//               </li>
//             ))}
//           </ul>
//         </motion.div>
//       ))}
//     </div>
//   );
// }



// ------------------------
import { motion } from "framer-motion";

const plans = [
  {
    tier: "College",
    price: "₹400/subscription",
	price1: "(₹2000/subscription)",
    features: ["Premium courses", "Priority support", "Exclusive content"],
    bg: "#704CE4",
  },
  {
    tier: "Student",
    price: "₹600/subscription",
	price1: "(₹2000/subscription)",
    features: ["Premium courses", "Standard support"],
    bg: "#FFD700",
  },
  {
    tier: "Offer",
    price: "₹500/subscription if 5 students enroll together",
	price1: "(₹2000/subscription)",
    features: ["Premium courses", "Standard support"],
    bg: "#E5E4E2",
    //isOffer: true, // Mark as an offer for unique styling
  },
];

export default function CourseDetails() {
  const handleBuyNow = (tier) => {
    alert(`Buy Now clicked for ${tier} plan!`);
  };

  return (
    <div className="space-y-8 text-center max-w-4xl mx-auto">
      {plans.map((course, index) => (
        <motion.div
          key={course.tier}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.3, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className={`relative bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-transform border ${
            course.isOffer ? "border-red-500" : "border-gray-300"
          }`}
          style={{
            background: `linear-gradient(to bottom right, ${course.bg}, #fff)`,
          }}
        >
          {/* Unique Badge for Offer */}
          {course.isOffer && (
            <div className="absolute top-0 left-0 bg-red-500 text-white px-3 py-1 rounded-tr-lg rounded-bl-lg text-sm font-bold">
              Special Offer!
            </div>
          )}
          <h2 className="text-2xl font-bold text-gray-800">{course.tier} Plan</h2>
          <p
            className={`text-xl font-semibold mt-2 ${
              course.isOffer ? "text-red-500" : "text-gray-800"
            }`}
          >
            {course.price}
          </p>
		  <p className={`text-xl mt-2 ${
              course.isOffer ? "text-red-500" : "text-gray-800"
            }`}><s>{course.price1}</s></p>
          <ul className=" text-gray-800 mt-4 space-y-2">
            {course.features.map((feature, idx) => (
              <li key={idx} className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>
                {feature}
              </li>
            ))}
          </ul>
          <button
            className={`py-2 px-4 rounded-lg mt-4 transition-colors ${
              course.isOffer
                ? "bg-red-500 hover:bg-red-600"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
            onClick={() => handleBuyNow(course.tier)}
          >
            Buy Now
          </button>
        </motion.div>
      ))}
    </div>
  );
}
