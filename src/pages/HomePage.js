// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import heartImage from '../assets/heart.png';
import { motion } from 'framer-motion';

function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      className="relative min-h-screen p-6 bg-gradient-to-b from-blue-100 to-gray-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Navigation Links */}
      <motion.div className="absolute top-4 right-4" variants={itemVariants}>
        <Link to="/predict">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300 ease-in-out">
            Predict Heart Disease
          </button>
        </Link>
      </motion.div>

      {/* Home Page Content */}
      <motion.div className="text-center mt-20" variants={itemVariants}>
        <h2 className="text-5xl font-extrabold mb-8 text-blue-800">Welcome to the Heart Disease Prediction App</h2>
        <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto">Use our advanced prediction feature to analyze your health parameters and make informed decisions for your cardiovascular health.</p>
      </motion.div>

      {/* Feature Cards */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16" variants={containerVariants}>
        <motion.div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out" variants={itemVariants}>
          <h3 className="text-3xl font-bold mb-6 text-gray-800">Heart Disease Prediction</h3>
          <p className="text-gray-600 mb-6">Enter your health parameters to predict the likelihood of heart disease using our advanced prediction models.</p>
          <Link to="/predict">
            <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300 ease-in-out">
              Get Started
            </button>
          </Link>
        </motion.div>
        <motion.div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out" variants={itemVariants}>
          <h3 className="text-3xl font-bold mb-6 text-gray-800">View Prediction History</h3>
          <p className="text-gray-600 mb-6">View your previous predictions and track your health over time.</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
            Coming Soon
          </button>
        </motion.div>
        <motion.div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out" variants={itemVariants}>
          <h3 className="text-3xl font-bold mb-6 text-gray-800">Health Tips</h3>
          <p className="text-gray-600 mb-6">Get personalized health tips to improve your cardiovascular health.</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
            Coming Soon
          </button>
        </motion.div>
      </motion.div>

      {/* Heart Disease Information Section */}
      <motion.div className="bg-white mt-16 p-10 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out" variants={itemVariants}>
        <h3 className="text-4xl font-bold mb-6 text-red-700 text-center">Understanding Heart Disease</h3>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img src={heartImage} alt="Heart Illustration" className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105" />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <p className="text-gray-700 text-lg mb-4">Heart disease, also known as cardiovascular disease, encompasses a range of conditions that affect the heart. It is primarily caused by the buildup of fatty deposits in the arteries, which can lead to reduced blood flow to the heart muscle. This process is called atherosclerosis, and it is the underlying cause of many heart-related issues, including heart attacks and angina (chest pain).</p>
            <p className="text-gray-700 text-lg mb-4">Common risk factors for heart disease include high blood pressure, high cholesterol levels, smoking, diabetes, obesity, poor diet, physical inactivity, and excessive alcohol consumption. Genetics and family history also play a significant role in an individual's susceptibility to heart disease.</p>
            <p className="text-gray-700 text-lg mb-4">Heart disease is a leading cause of death worldwide, but it is often preventable through lifestyle changes. Maintaining a healthy diet, engaging in regular physical activity, managing stress, and avoiding smoking can significantly reduce the risk of developing heart disease.</p>
            <p className="text-gray-700 text-lg">Early detection is key to managing heart disease effectively. Our prediction tool helps you understand your risk level by analyzing key health parameters, enabling you to take proactive steps for better heart health.</p>
            <p className="text-gray-600 mt-4 italic">Sources: American Heart Association, Mayo Clinic, World Health Organization</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default HomePage;