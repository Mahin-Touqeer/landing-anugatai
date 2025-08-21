import { motion } from "framer-motion";
import { Languages, LineChart, Lock, ShieldCheck, Zap } from "lucide-react";
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
function Vaani() {
  return (
    <>
      <motion.div
        variants={fadeInUp}
        // whileHover={{ y: -12, rotate: 0.5 }}
        className="product-card bg-white/90 backdrop-blur-xl  rounded-2xl p-8 shadow-lg  border border-purple-100/50 hover:shadow-purple-200/50 group "
        style={{ transform: `translateY(${scrollY * 0.02}px)` }}
      >
        <div className="flex items-center mb-8">
          <motion.div
            // whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-500 to-indigo-600 p-4 rounded-2xl shadow-lg"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
          <div className="ml-6">
            <h3 className="text-3xl font-bold text-blue-800 mb-2">Vaani</h3>
            <span className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg">
              AI Assistant
            </span>
          </div>
        </div>

        <p className=" mb-4 leading-relaxed text-lg">
          AI-native query automation platform that transforms every website into
          a
          <span className="font-bold text-purple-800">
            {" "}
            responsive human assistant
          </span>
          .
        </p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 "
        >
          {[
            { icon: <Zap />, text: "Instant Query Resolution" },
            { icon: <Lock />, text: "Secure Domain-bound Embedding" },
            { icon: <LineChart />, text: "Advanced Analytics & Lead Capture" },
            { icon: <Languages />, text: "Multi-language RAG Pipeline" },
            { icon: <ShieldCheck />, text: "LLM Resilience & Fallback" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex items-center  transition-transform duration-300"
            >
              <span className="text-purple-600 text-xl mr-4">
                {feature.icon}
              </span>
              <span className="text-sm text-gray-700 font-medium">
                {feature.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Discover Vaani
        </motion.button> */}
      </motion.div>
    </>
  );
}

export default Vaani;
