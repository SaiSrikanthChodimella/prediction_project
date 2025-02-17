// SubmitAnimals.jsx
import { useState } from "react";
import axios from "axios";
import { ResultModal } from "./ResultModal";

export default function SubmitAnimals() {
  const [url, setUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // SubmitAnimals.jsx
  async function search(event) {
    event.preventDefault();
    setError(null);
    setShowModal(true);
    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://my-api-nwy2.onrender.com/predict_url/?image_url=${encodeURIComponent(
          url
        )}`
      );
      setResult(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please check the URL and try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="relative">
      <form
        onSubmit={search}
        className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
      >
        <div className="relative flex items-center">
          <input
            type="url"
            name="query"
            placeholder="Enter animal image URL"
            className="w-full py-4 pl-12 pr-6 text-lg text-gray-700 bg-gray-50 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-blue-300"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />

          <svg
            className="absolute left-4 h-6 w-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <button
            type="submit"
            className="ml-4 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md"
            disabled={isLoading}
          >
            {isLoading ? "Analyzing..." : "Analyze"}
          </button>
        </div>
      </form>

      <ResultModal
        show={showModal}
        onClose={() => setShowModal(false)}
        result={result}
        error={error}
        isLoading={isLoading}
      />
    </div>
  );
}
