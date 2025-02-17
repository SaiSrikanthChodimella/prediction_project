import { useEffect } from "react";

export function ResultModal({ show, onClose, result, error, isLoading }) {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [show]);

  return (
    show && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100/30 backdrop-blur-lg">
        <div className="bg-white/95 rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl transform transition-all border border-white/20">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-800">
              {isLoading ? "Analyzing..." : error ? "Error" : "Analysis Result"}
            </h3>
            {!isLoading && (
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>

          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-8">
              <svg
                className="animate-spin h-12 w-12 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
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
              </svg>
              <p className="mt-4 text-gray-600">Processing image...</p>
            </div>
          ) : error ? (
            <div className="text-red-600 bg-red-100/80 p-4 rounded-lg backdrop-blur-sm">
              {error}
            </div>
          ) : (
            result && (
              <div className="space-y-4">
                <div className="bg-gray-50/70 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    Predicted Animal:
                  </h4>
                  <p className="text-2xl font-bold text-blue-600 capitalize">
                    {result.prediction || "Unknown"}
                  </p>
                </div>
              </div>
            )
          )}

          {!isLoading && (
            <button
              onClick={onClose}
              className="mt-6 w-full px-4 py-2 bg-blue-600/90 text-white rounded-lg hover:bg-blue-700 transition-colors backdrop-blur-sm"
            >
              Close
            </button>
          )}
        </div>
      </div>
    )
  );
}
