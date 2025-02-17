import { useEffect, useState } from "react";
import axios from "axios";
import SubmitAnimals from "./SubmitAnimals";

function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://my-api-nwy2.onrender.com/");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const renderData = (data) => {
    return (
      <div>
        {Object.keys(data).map((key) => (
          <div key={key}>{JSON.stringify(data[key], null, 2)}</div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
        {/* Navigation Bar */}
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold text-xl">
              Prediction<span className="text-blue-300">Project</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-blue-100 hover:text-white transition duration-300"
              >
                Features
              </a>
              <a
                href="#"
                className="text-blue-100 hover:text-white transition duration-300"
              >
                About
              </a>
              <a
                href="#"
                className="text-blue-100 hover:text-white transition duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left mb-16 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Welcome to the Prediction models
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                {data ? renderData(data) : <p>Loading...</p>}
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition duration-300 shadow-lg">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <SubmitAnimals />
          </div>
        </div>

        {/* Curved Divider */}
        <div className="relative -mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,256L48,245.3C96,235,192,213,288,186.7C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
