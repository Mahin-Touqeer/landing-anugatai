import { motion } from "framer-motion";
import { BookOpen, Home, RefreshCw, Users, Zap } from "lucide-react";
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: -1,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
  },
};
const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
function Samayak() {
  return (
    <>
      <motion.div
        variants={fadeInUp}
        // whileHover={{ y: -12, rotate: -0.5 }}
        className="product-card bg-white/90 backdrop-blur-xl rounded-xl p-8 shadow-lg  border border-green-100/50 hover:shadow-blue-200/50 group "
        style={{ transform: `translateY(${scrollY * 0.025}px)` }}
      >
        <div className="flex items-center mb-8">
          <motion.div
            // whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-2xl shadow-lg"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
          <div className="ml-6">
            <h3 className="text-3xl font-bold text-blue-500 mb-2">Samayak</h3>
            <span className="inline-block bg-gradient-to-r from-blue-400 to-blue-400 text-white px-4 py-2 rounded-xl text-sm font-bold shadow">
              Management Platform
            </span>
          </div>
        </div>

        <p className="text-[#212121] mb-4 leading-relaxed text-lg">
          Comprehensive web platform for
          <span className="font-bold text-blue-400">
            {" "}
            smart timetable management
          </span>{" "}
          and institutional scheduling.
        </p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 "
        >
          {[
            { icon: <Zap />, text: "Smart Timetable Generation" },
            { icon: <Users />, text: "Meeting & Event Scheduling" },
            { icon: <Home />, text: "Room Booking Management" },
            { icon: <BookOpen />, text: "Extra Class Coordination" },
            { icon: <RefreshCw />, text: "Real-time Sync & Updates" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex items-center  transition-transform duration-300"
            >
              <span className="text-blue-400 text-xl mr-4">{feature.icon}</span>
              <span className="text-sm font-medium text-gray-700">
                {feature.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
        {/* 
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Explore Features
        </motion.button> */}
      </motion.div>
    </>
  );
}

export default Samayak;
