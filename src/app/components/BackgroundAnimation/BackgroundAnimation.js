// components/BackgroundAnimation.js
import { motion } from "framer-motion";

export default function BackgroundAnimation() {
  return (
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
  );
}
