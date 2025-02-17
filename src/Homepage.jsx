import SubmitAnimals from "./SubmitAnimals";

function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 pt-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Content Section */}
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div className="max-w-2xl mx-auto lg:mx-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Intelligent Animal Recognition System
                </h1>
                <p className="text-lg md:text-xl text-blue-100 mb-8">
                  Leverage advanced machine learning to accurately identify 10
                  distinct animal species from any image. Our AI-powered
                  solution delivers instant classification with industry-leading
                  accuracy.
                </p>
              </div>

              {/* Supported Animals Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-2xl">
                {[
                  "Dog",
                  "Horse",
                  "Elephant",
                  "Butterfly",
                  "Chicken",
                  "Cat",
                  "Cow",
                  "Spider",
                  "Sheep",
                  "Squirrel",
                ].map((animal) => (
                  <div
                    key={animal}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center"
                  >
                    <span className="text-blue-100 font-medium">{animal}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://github.com/ChaitanyaKottapalli/my-api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 border-2 border-white/30 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  API Source Code
                </a>
                <a
                  href="https://github.com/SaiSrikanthChodimella/prediction_project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-blue-50 border-2 border-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  UI Source Code
                </a>
              </div>
            </div>

            {/* Input Card */}
            <div className="w-full lg:flex-1 max-w-xl xl:max-w-2xl">
              <SubmitAnimals />
            </div>
          </div>
        </div>

        {/* Wave Transition */}
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
