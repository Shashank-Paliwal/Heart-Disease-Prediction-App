// PredictionPage.js
import React, { useState } from 'react';
import { useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { motion } from 'framer-motion';
import { VictoryPie } from 'victory';

function PredictionPage() {
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [chestPainType, setChestPainType] = useState('');
  const [restingBloodPressure, setRestingBloodPressure] = useState('');
  const [cholesterol, setCholesterol] = useState('');
  const [maxHeartRate, setMaxHeartRate] = useState('');
  const [exerciseAngina, setExerciseAngina] = useState('');
  const [oldpeak, setOldpeak] = useState('');
  const [slope, setSlope] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePredict = () => {
    if (!age || !sex || !chestPainType || !restingBloodPressure || !cholesterol || !maxHeartRate || !exerciseAngina || !oldpeak || !slope) {
      setError('All fields are required.');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    setTimeout(() => {
      // Placeholder for prediction logic
      const prediction = Math.random() > 0.5 ? 'High Risk' : 'Low Risk';
      setResult(prediction);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex items-center justify-center bg-gray-900"
    >
      <div className="max-w-5xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-2xl backdrop-blur-md bg-opacity-90">
        <h2 className="text-4xl font-extrabold mb-8 text-blue-800 text-center">Heart Disease Prediction</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-lg font-medium text-gray-800">Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-800">Sex (1 = Male, 0 = Female)</label>
              <input
                type="number"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-800">Chest Pain Type (0-3)</label>
              <input
                type="number"
                value={chestPainType}
                onChange={(e) => setChestPainType(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-800">Resting Blood Pressure (mm Hg)</label>
              <input
                type="number"
                value={restingBloodPressure}
                onChange={(e) => setRestingBloodPressure(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-800">Cholesterol Level (mg/dL)</label>
              <input
                type="number"
                value={cholesterol}
                onChange={(e) => setCholesterol(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-800">Max Heart Rate Achieved (bpm)</label>
              <input
                type="number"
                value={maxHeartRate}
                onChange={(e) => setMaxHeartRate(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-800">Exercise-Induced Angina (1 = Yes, 0 = No)</label>
              <input
                type="number"
                value={exerciseAngina}
                onChange={(e) => setExerciseAngina(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-800">ST Depression Induced by Exercise (oldpeak)</label>
              <input
                type="number"
                value={oldpeak}
                onChange={(e) => setOldpeak(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-800">Slope of the Peak Exercise ST Segment (0-2)</label>
              <input
                type="number"
                value={slope}
                onChange={(e) => setSlope(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400"
              />
            </div>
          </div>
          {error && <p className="text-red-600 text-center font-bold mt-4">{error}</p>}
          <button
            type="button"
            onClick={handlePredict}
            className="w-full py-4 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 transition duration-300 ease-in-out mt-8"
          >
            {loading ? 'Predicting...' : 'Predict'}
          </button>
        </form>
        {loading && (
          <div className="mt-8 text-center">
            <ClipLoader color={"#4A90E2"} loading={loading} size={50} />
          </div>
        )}
        {result && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-10 flex flex-col md:flex-row items-center justify-center"
          >
            <p className={`text-3xl font-bold ${result === 'High Risk' ? 'text-red-600' : 'text-green-600'} mb-6 md:mb-0 md:mr-8`}>Prediction Result: {result}</p>
            <div className="flex justify-center items-center">
              <VictoryPie
                data={[{ x: 'Risk', y: result === 'High Risk' ? 70 : 30 }, { x: 'No Risk', y: result === 'High Risk' ? 30 : 70 }]}
                colorScale={[result === 'High Risk' ? 'red' : 'green', 'gray']}
                animate={{ duration: 1500, easing: 'bounce' }}
                innerRadius={80}
                labels={({ datum }) => `${datum.x}: ${datum.y}%`}
                style={{ labels: { fill: 'black', fontSize: 14, fontWeight: 'bold', padding: 5 } }}
                width={300}
                height={300}
                padAngle={3}
                labelRadius={100}
              />
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default PredictionPage;