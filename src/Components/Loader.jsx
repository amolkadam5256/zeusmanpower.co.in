// src/components/Loader.jsx
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <motion.div
        className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <p className="ml-4 text-lg">Loading...</p>
    </div>
  );
}
