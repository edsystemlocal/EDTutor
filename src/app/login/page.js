

// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { AiOutlineUser, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { ClipLoader } from "react-spinners";

// export default function LoginWithCourses() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const togglePasswordVisibility = () => setShowPassword(!showPassword);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem("isLoggedIn", "true");
//         localStorage.setItem("authToken", data.token);
//         router.push("/home");
//       } else {
//         setError(data.message || "Invalid username or password.");
//       }
//     } catch (error) {
//       setError("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex relative">
//       {/* Background Animation */}
//       <motion.div
//         className="absolute inset-0"
//         animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         style={{
//           backgroundImage: "linear-gradient(45deg, #ff7e5f, #feb47b, #86a8e7, #91eae4)",
//           backgroundSize: "200% 200%",
//         }}
//       />

//       {/* Left Side: Login Form */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//         className="w-full md:w-1/2 flex items-center justify-center relative"
//       >
//         <div className="relative z-10 rounded-lg shadow-lg p-8 w-full max-w-md bg-white">
//           <motion.h1
//             className="text-3xl font-bold text-center text-gray-700 mb-6"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//           >
//             Welcome Back!
//           </motion.h1>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 0.6 }}
//               className="relative"
//             >
//               <AiOutlineUser className="absolute left-3 top-3.5 text-gray-400 text-lg" />
//               <input
//                 id="username"
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
//                 placeholder="Username"
//                 required
//               />
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7, duration: 0.6 }}
//               className="relative"
//             >
//               <AiOutlineLock className="absolute left-3 top-3.5 text-gray-400 text-lg" />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
//                 placeholder="Password"
//                 required
//               />
//               <button
//                 type="button"
//                 className="absolute right-3 top-3.5 text-gray-400 text-lg focus:outline-none"
//                 onClick={togglePasswordVisibility}
//               >
//                 {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//               </button>
//             </motion.div>

//             {error && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="bg-red-100 text-red-500 text-sm rounded-lg p-3"
//               >
//                 {error}
//               </motion.div>
//             )}

//             <motion.button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300 flex justify-center items-center"
//               disabled={loading}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.9, duration: 0.6 }}
//             >
//               {loading ? <ClipLoader size={20} color="#fff" /> : "Login"}
//             </motion.button>
//           </form>

//           <motion.p
//             className="text-gray-500 text-center mt-4"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.1, duration: 0.6 }}
//           >
//             Forgot your password?{" "}
//             <a href="#" className="text-blue-500 font-medium hover:underline">
//               Reset Password
//             </a>
//           </motion.p>

//           <motion.p
//             className="text-gray-500 text-center mt-2"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.3, duration: 0.6 }}
//           >
//             Don't have an account?{" "}
//             <a href="#" className="text-blue-500 font-medium hover:underline">
//               Sign Up
//             </a>
//           </motion.p>
//         </div>
//       </motion.div>

//       {/* Right Side: Course Details */}
//       <motion.div
//         initial={{ opacity: 0, x: 20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full md:w-1/2 flex items-center justify-center relative p-8"
//       >
//         <div className="space-y-6 text-center">
//           {[{ tier: "Silver", price: "$29/month", features: ["Access to basic courses", "Standard support"] }, { tier: "Gold", price: "$49/month", features: ["All Silver features", "Premium courses", "Priority support"] }, { tier: "Platinum", price: "$79/month", features: ["All Gold features", "Exclusive content", "Dedicated support"] }].map((course, index) => (
//             <motion.div
//               key={course.tier}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.3, duration: 0.6 }}
//               whileHover={{ scale: 1.05 }}
//               className="bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-transform"
//               style={{
//                 background: `linear-gradient(to bottom right, ${course.tier === "Silver" ? "#C0C0C0" : course.tier === "Gold" ? "#FFD700" : "#E5E4E2"}, #fff)`,
//               }}
//             >
//               <h2 className="text-2xl font-bold text-gray-800">{course.tier} Plan</h2>
//               <p className="text-xl font-semibold text-gray-800 mt-2">{course.price}</p>
//               <ul className="text-gray-500 mt-4 space-y-2">
//                 {course.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-center">
//                     <span className="text-green-500 mr-2">✔</span>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// ------------------
// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { AiOutlineUser, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { ClipLoader } from "react-spinners";

// export default function LoginWithCourses() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [otp, setOtp] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [isOtpLogin, setIsOtpLogin] = useState(false); // State to toggle between OTP and password login
//   const router = useRouter();

//   const togglePasswordVisibility = () => setShowPassword(!showPassword);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       let response;
//       if (isOtpLogin) {
//         // Handle OTP login
//         response = await fetch("/api/auth/login/otp", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ username, otp }), // Send OTP instead of password
//         });
//       } else {
//         // Handle username and password login
//         response = await fetch("/api/auth/login", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ username, password }),
//         });
//       }

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem("isLoggedIn", "true");
//         localStorage.setItem("authToken", data.token);
//         router.push("/home");
//       } else {
//         setError(data.message || "Invalid username or credentials.");
//       }
//     } catch (error) {
//       setError("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex relative">
//       {/* Background Animation */}
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-70"
//         animate={{ backgroundPosition: "100% 50%" }}
//         transition={{
//           duration: 15,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         style={{
//           backgroundSize: "400% 400%",
//         }}
//       />

//       {/* Left Side: Login Form */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//         className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative"
//       >
//         <div className="relative z-10 rounded-lg shadow-lg p-8 w-full max-w-md bg-white">
//           <motion.h1
//             className="text-3xl font-bold text-center text-gray-700 mb-6"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//           >
//             {isOtpLogin ? "Enter OTP" : "Welcome Back!"}
//           </motion.h1>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 0.6 }}
//               className="relative"
//             >
//               <AiOutlineUser className="absolute left-3 top-3.5 text-gray-400 text-lg" />
//               <input
//                 id="username"
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
//                 placeholder="Username"
//                 required
//               />
//             </motion.div>

//             {!isOtpLogin && (
//               <>
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.7, duration: 0.6 }}
//                   className="relative"
//                 >
//                   <AiOutlineLock className="absolute left-3 top-3.5 text-gray-400 text-lg" />
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
//                     placeholder="Password"
//                     required
//                   />
//                   <button
//                     type="button"
//                     className="absolute right-3 top-3.5 text-gray-400 text-lg focus:outline-none"
//                     onClick={togglePasswordVisibility}
//                   >
//                     {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//                   </button>
//                 </motion.div>
//               </>
//             )}

//             {isOtpLogin && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.7, duration: 0.6 }}
//                 className="relative"
//               >
//                 <input
//                   type="text"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
//                   placeholder="Enter OTP"
//                   required
//                 />
//               </motion.div>
//             )}

//             {error && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="bg-red-100 text-red-500 text-sm rounded-lg p-3"
//               >
//                 {error}
//               </motion.div>
//             )}

//             <motion.button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300 flex justify-center items-center"
//               disabled={loading}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.9, duration: 0.6 }}
//             >
//               {loading ? <ClipLoader size={20} color="#fff" /> : isOtpLogin ? "Verify OTP" : "Login"}
//             </motion.button>
//           </form>

//           <motion.p
//             className="text-gray-500 text-center mt-4"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.1, duration: 0.6 }}
//           >
//             Forgot your password?{" "}
//             <a href="#" className="text-blue-500 font-medium hover:underline">
//               Reset Password
//             </a>
//           </motion.p>

//           <motion.p
//             className="text-gray-500 text-center mt-2"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.3, duration: 0.6 }}
//           >
//             Don't have an account?{" "}
//             <a href="#" className="text-blue-500 font-medium hover:underline">
//               Sign Up
//             </a>
//           </motion.p>

//           {/* Toggle Login Mode */}
//           <motion.button
//             type="button"
//             onClick={() => setIsOtpLogin(!isOtpLogin)}
//             className="w-full text-center text-blue-500 font-medium hover:underline mt-4"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.5, duration: 0.6 }}
//           >
//             {isOtpLogin ? "Use Password Login" : "Use OTP Login"}
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* Right Side: Course Details */}
//       <motion.div
//         initial={{ opacity: 0, x: 20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-r from-purple-300 to-pink-500 p-8 z-10"
//       >
//         <div className="space-y-6 text-center">
//           {[{ tier: "Silver", price: "$29/month", features: ["Access to basic courses", "Standard support"] }, { tier: "Gold", price: "$49/month", features: ["All Silver features", "Premium courses", "Priority support"] }, { tier: "Platinum", price: "$79/month", features: ["All Gold features", "Exclusive content", "Dedicated support"] }].map((course, index) => (
//             <motion.div
//               key={course.tier}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.3, duration: 0.6 }}
//               whileHover={{ scale: 1.05 }}
//               className="bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-transform"
//               style={{
//                 background: `linear-gradient(to bottom right, ${
//                   course.tier === "Silver"
//                     ? "#C0C0C0"
//                     : course.tier === "Gold"
//                     ? "#FFD700"
//                     : "#E5E4E2"
//                 }, #fff)`,
//               }}
//             >
//               <h2 className="text-2xl font-bold text-gray-800">{course.tier} Plan</h2>
//               <p className="text-xl font-semibold text-gray-800 mt-2">{course.price}</p>
//               <ul className="text-gray-500 mt-4 space-y-2">
//                 {course.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-center">
//                     <span className="text-green-500 mr-2">✔</span>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }




"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { AiOutlineUser, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { ClipLoader } from "react-spinners";

export default function LoginWithCourses() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");  // OTP state
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOtpLogin, setIsOtpLogin] = useState(false);  // Toggle between OTP and password login
  const router = useRouter();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const loginData = isOtpLogin ? { username, otp } : { username, password };  // Use OTP or password based on the toggle

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("authToken", data.token);
        router.push("/home");
      } else {
        setError(data.message || "Invalid username or credentials.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex relative">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: "linear-gradient(45deg, #ff7e5f, #feb47b, #86a8e7, #91eae4)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Left Side: Login Form */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 flex items-center justify-center relative"
      >
        <div className="relative z-10 rounded-lg shadow-lg p-8 w-full max-w-md bg-white">
          <motion.h1
            className="text-3xl font-bold text-center text-gray-700 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Welcome Back!
          </motion.h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative"
            >
              <AiOutlineUser className="absolute left-3 top-3.5 text-gray-400 text-lg" />
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
                placeholder="Username"
                required
              />
            </motion.div>

            {/* Password or OTP Field */}
            {isOtpLogin ? (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="relative"
              >
                <input
                  id="otp"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
                  placeholder="OTP"
                  required
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="relative"
              >
                <AiOutlineLock className="absolute left-3 top-3.5 text-gray-400 text-lg" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-3.5 text-gray-400 text-lg focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
              </motion.div>
            )}

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-red-100 text-red-500 text-sm rounded-lg p-3"
              >
                {error}
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300 flex justify-center items-center"
              disabled={loading}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              {loading ? <ClipLoader size={20} color="#fff" /> : "Login"}
            </motion.button>
          </form>

          <motion.p
            className="text-gray-500 text-center mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            Forgot your password?{" "}
            <a href="#" className="text-blue-500 font-medium hover:underline">
              Reset Password
            </a>
          </motion.p>

          <motion.p
            className="text-gray-500 text-center mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 font-medium hover:underline">
              Sign Up
            </a>
          </motion.p>

          {/* OTP Toggle */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsOtpLogin(!isOtpLogin)}
              className="text-blue-500 font-medium hover:underline"
            >
              {isOtpLogin ? "Use Password Login" : "Use OTP Login"}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Right Side: Course Details */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex items-center justify-center relative p-8"
      >
        <div className="space-y-6 text-center">
          {[{ tier: "Silver", price: "$29/month", features: ["Access to basic courses", "Standard support"] }, { tier: "Gold", price: "$49/month", features: ["All Silver features", "Premium courses", "Priority support"] }, { tier: "Platinum", price: "$79/month", features: ["All Gold features", "Exclusive content", "Dedicated support"] }].map((course, index) => (
            <motion.div
              key={course.tier}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-transform"
              style={{
                background: `linear-gradient(to bottom right, ${course.tier === "Silver" ? "#C0C0C0" : course.tier === "Gold" ? "#FFD700" : "#E5E4E2"}, #fff)` }}
            >
              <h2 className="text-2xl font-bold text-gray-800">{course.tier} Plan</h2>
              <p className="text-xl font-semibold text-gray-800 mt-2">{course.price}</p>
              <ul className="text-gray-500 mt-4 space-y-2">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
