// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function Register() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch("/api/auth/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("Registration successful!");
//         router.push("/");
//       } else {
//         setError(data.message || "Registration failed.");
//       }
//     } catch (err) {
//       setError("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Register</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full p-2 border rounded-lg"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-2 border rounded-lg"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 border rounded-lg"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             className="w-full p-2 border rounded-lg"
//             required
//           />
//           {error && <p className="text-red-500 text-sm">{error}</p>}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
//           >
//             {loading ? "Registering..." : "Register"}
//           </button>
//         </form>
//         <p className="text-gray-500 mt-4 text-center">
//           Already have an account?{" "}
//           <a
//             href="/"
//             className="text-blue-500 hover:underline"
//           >
//             Login here
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// ------------------

// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import CourseDetails from "../components/CourseDetails/CourseDetails";

// export default function Register() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     const registerData = { username, email, password };

//     try {
//       const response = await fetch("/api/auth/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(registerData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("Registration successful! You can now log in.");
//       } else {
//         setError(data.message || "Registration failed. Please try again.");
//       }
//     } catch (error) {
//       setError("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md"
//       >
//         <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">Create an Account</h1>

//         <form onSubmit={handleRegister} className="space-y-6">
//           <div className="relative">
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Username"
//               required
//             />
//           </div>

//           <div className="relative">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Email"
//               required
//             />
//           </div>

//           <div className="relative">
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Password"
//               required
//             />
//           </div>

//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//             disabled={loading}
//           >
//             {loading ? "Registering..." : "Register"}
//           </button>
//         </form>
//       </motion.div>


//       <motion.div
//   initial={{ opacity: 0, x: 20 }}
//   animate={{ opacity: 1, x: 0 }}
//   transition={{ duration: 0.8 }}
//   className="w-full md:w-1/2 flex items-center justify-center relative p-8"
// >
//   <CourseDetails />
// </motion.div>
//     </div>
//   );
// }


// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import CourseDetails from "../components/CourseDetails/CourseDetails";

// export default function Register() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     const registerData = { username, email, password };

//     try {
//       const response = await fetch("/api/auth/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(registerData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("Registration successful! You can now log in.");
//       } else {
//         setError(data.message || "Registration failed. Please try again.");
//       }
//     } catch (error) {
//       setError("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md"
//       >
//         <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">Create an Account</h1>

//         <form onSubmit={handleRegister} className="space-y-6">
//           <div className="relative">
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Username"
//               required
//             />
//           </div>

//           <div className="relative">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Email"
//               required
//             />
//           </div>

//           <div className="relative">
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Password"
//               required
//             />
//           </div>

//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//             disabled={loading}
//           >
//             {loading ? "Registering..." : "Register"}
//           </button>
//         </form>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, x: 20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full md:w-1/2 flex items-center justify-center relative p-8"
//       >
//         <CourseDetails />
//       </motion.div>
//     </div>
//   );
// }


// pages/register.js
// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import BackgroundAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
// import CourseDetails from "../components/CourseDetails/CourseDetails";
// import Link from "next/link";

// export default function Register() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle registration logic here
//   };

//   return (
//     <div className="min-h-screen flex relative">
//       {/* Reuse the Background Animation */}
//       <BackgroundAnimation />

//       {/* Registration Form */}
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
//             Create Your Account
//           </motion.h1>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="relative">
//               <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="w-full pl-4 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
//                 placeholder="Username"
//                 required
//               />
//             </div>
//             <div className="relative">
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full pl-4 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
//                 placeholder="Password"
//                 required
//               />
//             </div>
//             <div className="relative">
//               <input
//                 type="password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="w-full pl-4 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
//                 placeholder="Confirm Password"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
//             >
//               Register
//             </button>
//           </form>
//            {/* Link to Login Page */}
//            <p className="text-center text-gray-600 mt-4">
//             Already registered?{" "}
//             <a href="/login" className="text-blue-500 font-medium hover:underline">
//             Log in
//             </a>

//           </p>
//         </div>
//       </motion.div>
//       <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="w-full md:w-1/2 flex items-center justify-center relative p-8"
//             >
//               <CourseDetails />
//             </motion.div>
//     </div>
//   );
// }
///////////////////////////////////////////////////////




// pages/register.js
// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
// import BackgroundAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
// import CourseDetails from "../components/CourseDetails/CourseDetails";


// export default function Register() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle registration logic here
//     };

//     return (
//         <div className="min-h-screen flex relative">
//             {/* Background Animation */}
//             <BackgroundAnimation />

//             {/* Registration Form */}
//             <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 1 }}
//                 className="w-full md:w-1/2 flex items-center justify-center relative"
//             >
//                 <div className="relative z-10 rounded-lg shadow-lg p-8 w-full max-w-md bg-white">
//                     <motion.h1
//                         className="text-3xl font-bold text-center text-gray-700 mb-6"
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.3, duration: 0.8 }}
//                     >
//                         Create Your Account
//                     </motion.h1>

//                     <form onSubmit={handleSubmit} className="space-y-6">
//                         {/* Username Field */}
//                         <motion.div
//                             initial={{ opacity: 0, y: -10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.5, duration: 0.6 }}
//                             className="relative"
//                         >
//                             <AiOutlineUser className="absolute left-3 top-3.5 text-gray-400 text-lg" />
//                             <input
//                                 id="username"
//                                 type="text"
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                                 className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
//                                 placeholder="Username"
//                                 required
//                             />
//                         </motion.div>

//                         {/* Password Field */}
//                         <motion.div
//                             initial={{ opacity: 0, y: -10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.6, duration: 0.6 }}
//                             className="relative"
//                         >
//                             <AiOutlineLock className="absolute left-3 top-3.5 text-gray-400 text-lg" />
//                             <input
//                                 id="password"
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
//                                 placeholder="Password"
//                                 required
//                             />
//                         </motion.div>

//                         {/* Confirm Password Field */}
//                         <motion.div
//                             initial={{ opacity: 0, y: -10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.7, duration: 0.6 }}
//                             className="relative"
//                         >
//                             <AiOutlineLock className="absolute left-3 top-3.5 text-gray-400 text-lg" />
//                             <input
//                                 id="confirm-password"
//                                 type="password"
//                                 value={confirmPassword}
//                                 onChange={(e) => setConfirmPassword(e.target.value)}
//                                 className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
//                                 placeholder="Confirm Password"
//                                 required
//                             />
//                         </motion.div>

//                         {/* Register Button */}
//                         <motion.button
//                             type="submit"
//                             className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300 flex justify-center items-center"
//                             disabled={loading}
//                             initial={{ opacity: 0, y: 10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.9, duration: 0.6 }}
//                         >
//                             {loading ? <ClipLoader size={20} color="#fff" /> : "Register"}
//                         </motion.button>
//                     </form>

//                     {/* Link to Login Page */}
//                     <motion.p
//                         className="text-gray-600 text-center mt-4"
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 1.3, duration: 0.6 }}
//                     >
//                         Already registered?{" "}
//                         <a href="/login" className="text-blue-500 font-medium hover:underline">
//                             Log in
//                         </a>
//                     </motion.p>
//                 </div>
//             </motion.div>

//             {/* Course Details Section */}
//             <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="w-full md:w-1/2 flex items-center justify-center relative p-8"
//             >
//                 <CourseDetails />
//             </motion.div>
//         </div>
//     );
// }






"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock,  AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import BackgroundAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/navigation";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // Manage password visibility
    const router = useRouter();

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            setLoading(false);
            return;
        }

        const registerData = { username, email, password };

        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(registerData),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Registration successful! You can now log in.");
                router.push("/login");
               
            } else {
                setError(data.message || "Registration failed. Please try again.");
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
            <BackgroundAnimation />

            {/* Registration Form */}
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
                        Create Your Account
                    </motion.h1>

                    <form onSubmit={handleRegister} className="space-y-6">
                        {/* Username Field */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="relative"
                        >
                            <AiOutlineUser className="absolute left-3 top-3.5 text-gray-400 text-lg" />
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
                                placeholder="Username"
                                required
                            />
                        </motion.div>

                        {/* Email Field */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="relative"
                        >
                            <AiOutlineMail className="absolute left-3 top-3.5 text-gray-400 text-lg" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
                                placeholder="Email"
                                required
                            />
                        </motion.div>

                        {/* Password Field */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="relative"
                        >
                            <AiOutlineLock className="absolute left-3 top-3.5 text-gray-400 text-lg" />
                            <input
                                type={showPassword ? "text" : "password"} // Toggle password visibility
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
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

                        {/* Confirm Password Field */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="relative"
                        >
                            <AiOutlineLock className="absolute left-3 top-3.5 text-gray-400 text-lg" />
                            <input
                                type={showPassword ? "text" : "password"} // Toggle password visibility
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
                                placeholder="Confirm Password"
                                required
                            />
                           
                        </motion.div>


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

                        {/* Register Button */}
                        <motion.button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300 flex justify-center items-center"
                            disabled={loading}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                        >
                            {loading ? <ClipLoader size={20} color="#fff" /> : "Register"}
                        </motion.button>
                    </form>

                    {/* Link to Login Page */}
                    <motion.p
                        className="text-gray-600 text-center mt-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.6 }}
                    >
                        Already registered?{" "}
                        <a href="/login" className="text-blue-500 font-medium hover:underline">
                            Log in
                        </a>
                    </motion.p>
                </div>
            </motion.div>

            {/* Course Details Section */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 flex items-center justify-center relative p-8"
            >
                <CourseDetails />
            </motion.div>
        </div>
    );
}
