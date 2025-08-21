import { motion } from "framer-motion";
import {
  CheckCircle,
  Languages,
  BarChart3,
  Bot,
  GraduationCap,
  BarChart,
} from "lucide-react";
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
function Matrabhasha() {
  return (
    <>
      <motion.div
        variants={fadeInUp}
        // whileHover={{ y: -12, rotate: 1 }}
        className="product-card bg-white/90 backdrop-blur-xl rounded-xl p-8 shadow-lg  border border-blue-100/50 hover:shadow-blue-200/50 group "
        style={{ transform: `translateY(${scrollY * 0.03}px)` }}
      >
        <div className="flex items-center mb-8">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600 to-indigo-700 p-4 rounded-2xl shadow-lg"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L3 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-1.254.145a1 1 0 11-.992-1.736L14 6l-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.723V12a1 1 0 11-2 0v-1.277l-1.246-.855a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.277l1.246.855a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.277V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.99a.995.995 0 01-1.022 0l-1.735-.99a1 1 0 01-.372-1.364z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
          <div className="ml-6">
            <h3 className="text-3xl font-bold text-blue-800 mb-2">
              Matrabhasha
            </h3>
            <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-500 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg">
              Flagship Product
            </span>
          </div>
        </div>

        <p className=" mb-4 leading-relaxed text-lg">
          First AI-powered learning platform that lets students study complex
          concepts
          <span className="font-bold text-blue-800">
            {" "}
            in their mother tongue
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
            {
              icon: <CheckCircle />,
              text: "Personalized Learning Paths & AI Q&A",
            },
            { icon: <Languages />, text: "22+ Indian Languages Support" },
            { icon: <BarChart />, text: "Interactive Visual Learning" },
            { icon: <Bot />, text: "2<4×7 AI Tutor & Engagement Tracking" },
            { icon: <GraduationCap />, text: "University & School Ready" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex items-center  transition-transform duration-300"
            >
              <span className="text-blue-600 text-xl mr-4">{feature.icon}</span>
              <span className=" text-gray-700 text-sm font-medium">
                {feature.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Learn More
        </motion.button> */}
      </motion.div>
    </>
  );
}

export default Matrabhasha;
