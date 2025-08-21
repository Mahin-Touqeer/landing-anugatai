import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import { Clock } from "lucide-react";
import CountdownTimer from "./components/CountdownTimer";
import Matrabhasha from "./components/cards/Matrabhasha";
import Samayak from "./components/cards/samayak";
import Vaani from "./components/cards/Vaani";

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: -1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
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

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{
            animationDelay: "2s",
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-200/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{
            animationDelay: "4s",
            transform: `translate(-50%, -50%) translateY(${scrollY * 0.05}px)`,
          }}
        />
      </div>

      <Navbar />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pb-4 py-8">
        {/* Launch Date Highlight */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className=" backdrop-blur-xl rounded-2xl  py-4  md:px-0 md:py-0 md:mb-12 text-center max-w-6xl  mx-auto flex justify-between items-center"
          style={{ transform: `translateY(${scrollY * 0.06}px)` }}
        >
          <div className="mb-8 md:w-1/2 p-4">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl text-left font-bold bg-gradient-to-r from-sky-400 via-cyan-600 to-cyan-700 bg-clip-text text-transparent mb-6 leading-tight"
            >
              AI-Powered Learning &<br />
              <span className="bg-gradient-to-r from-sky-400 to-cyan-700 bg-clip-text text-transparent">
                Management Solutions
              </span>
            </motion.h1>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-xl text-left text-gray-400    max-w-4xl mx-auto leading-relaxed font-medium"
            >
              Empowering institutes and learners with cutting-edge AI
              technology. Learn in your mother tongue, manage efficiently, and
              automate intelligently.
            </motion.p>
          </div>
          {/* <div className="w-1/2  bg-green-100"> */}
          <img
            src="./Scrum board.gif"
            className="hidden md:block max-h-lg"
            alt=""
          />
          {/* </div> */}
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-8"
          // style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        >
          <motion.div
            className="inline-flex items-center bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400 text-[#fff]  px-8 py-3 rounded-xl shadow transition-all duration-300"
            // whileHover={{ scale: 1.05 }}
            // whileTap={{ scale: 0.95 }}
          >
            <Clock className="w-6 h-6 mr-2" />
            <span className="font-bold text-lg text-shadow">
              Launching on 14 September 2025
            </span>
          </motion.div>
        </motion.div>
        <CountdownTimer />
        {/* Hero Card */}

        {/* Products Section */}
        <motion.div
          className="max-w-7xl mx-auto px-4"
          id="products"
          style={{ transform: `translateY(${scrollY * 0.04}px)` }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl pb-2 font-bold bg-gradient-to-r from-teal-700 to-blue-600 bg-clip-text text-transparent mb-6">
              Our Revolutionary Products
            </h2>
            <p className="text-xl text-gray-500  max-w-3xl mx-auto font-medium">
              Three powerful AI-driven solutions designed to transform education
              and institutional management
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            <Matrabhasha />
            <Samayak />
            <Vaani />
          </motion.div>
        </motion.div>
      </div>
      {/* Newsletter Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mt-36 bg-[#e8f4fc] backdrop-blur-2xl p-12  mx-auto text-center shadow   border border-white/30"
        style={{
          transform: `translateY(${scrollY * 0.015}px)`,
          width: "100vw",
        }}
      >
        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-700 to-blue-700 bg-clip-text text-transparent mb-2">
          Be First to Experience the Future
        </h3>
        <p className="text text-blue-700/80 mb-5 font-medium">
          Join our exclusive early access program
          <br /> Get notified when we launch on <i>September 14th.</i>
        </p>

        <motion.form
          onSubmit={handleEmailSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.input
            variants={fadeInLeft}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-1 rounded-2xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 backdrop-blur-sm text-blue-900 placeholder-blue-500/60 font-medium"
            required
          />
          <motion.button
            // variants={fadeInUp}
            // whileHover={{ scale: 1.05 }}
            // whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSubmitted}
            className="bg-gradient-to-r from-blue-600 to-blue-500  text-white px-6 py-3 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer hover:to-blue-600 hover:from-blue-500"
          >
            {isSubmitted ? (
              <>
                <motion.svg
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </motion.svg>
                Subscribed!
              </>
            ) : (
              <>
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Notify Me
              </>
            )}
          </motion.button>
        </motion.form>
      </motion.div>
      {/* Footer */}
      <div
        initial="hidden"
        // whileInView="visible"
        viewport={{ once: true }}
        // variants={fadeInUp}
        className="my-12 text-center"
        // style={{ transform: `translateY(${scrollY * 0.01}px)` }}
      >
        <motion.div
          variants={staggerContainer}
          className="flex justify-center space-x-6 mb-8"
        >
          {["linkedin", "instagram"].map((social, index) => (
            <motion.a
              key={index}
              variants={scaleIn}
              href={
                social === "linkedin"
                  ? "https://www.linkedin.com/company/anugat-ai/?viewAsMember=true"
                  : "https://www.instagram.com/anugat.ai/"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm p-4 rounded-xl transition-all duration-300 shadow text-blue-700 hover:text-white hover:bg-blue-600"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d={
                    social === "linkedin"
                      ? "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" // LinkedIn
                      : "M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm4.5 3.5a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm0 2A3 3 0 1 0 12 15a3 3 0 0 0 0-6zm5.25-2.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0z" // Instagram
                  }
                />
              </svg>
            </motion.a>
          ))}
        </motion.div>
        <p className="text-blue-600/70 text-lg font-medium">
          © 2025 Anugat AI. All rights reserved. | Transforming Education with
          Intelligence
        </p>
      </div>
      <style jsx>{`
        .product-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        /* Responsive improvements */
        @media (max-width: 640px) {
          .text-5xl {
            font-size: 2.5rem;
          }
          .text-7xl {
            font-size: 3.5rem;
          }
          .text-4xl {
            font-size: 2rem;
          }
          .text-3xl {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
