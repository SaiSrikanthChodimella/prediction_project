export default function APIDocumentation() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Animal Classification API Documentation
        </h1>

        {/* API Overview */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Overview</h2>
          <p className="text-gray-600">
            This API provides animal image classification capabilities for 10
            different animals:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
            {[
              "dog",
              "horse",
              "elephant",
              "butterfly",
              "chicken",
              "cat",
              "cow",
              "spider",
              "sheep",
              "squirrel",
            ].map((animal) => (
              <span
                key={animal}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {animal}
              </span>
            ))}
          </div>
        </div>

        {/* Root Endpoint */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Root Endpoint
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <code className="text-sm font-mono text-gray-700 block mb-2">
              GET / (Welcome Message)
            </code>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
              {`{
    "message": "Welcome to the Animal Classification API! ..."
  }`}
            </pre>
          </div>
        </div>

        {/* Image Upload Endpoint */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Image Upload Prediction
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <code className="text-sm font-mono text-gray-700 block mb-2">
              POST /predict/ (Image File Upload)
            </code>
            <div className="space-y-4">
              <div>
                <span className="font-semibold text-gray-600">Request:</span>
                <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mt-2">
                  {`curl -X POST \\
    -F "file=@image.jpg" \\
    http://your-api-url/predict/`}
                </pre>
              </div>
              <div>
                <span className="font-semibold text-gray-600">Response:</span>
                <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mt-2">
                  {`{
    "prediction": "dog"
  }`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* URL Prediction Endpoint */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            URL Prediction
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <code className="text-sm font-mono text-gray-700 block mb-2">
              GET /predict_url/ (Image URL Prediction)
            </code>
            <div className="space-y-4">
              <div>
                <span className="font-semibold text-gray-600">Request:</span>
                <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mt-2">
                  {`curl http://your-api-url/predict_url/?image_url=https://example.com/image.jpg`}
                </pre>
              </div>
              <div>
                <span className="font-semibold text-gray-600">Response:</span>
                <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mt-2">
                  {`{
    "prediction": "cat"
  }`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Error Handling */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Error Responses
          </h2>
          <div className="bg-red-50 p-4 rounded-lg">
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">
              {`{
    "detail": "Error message description"
  }`}
            </pre>
            <div className="mt-4 text-sm text-gray-600">
              <p>Common status codes:</p>
              <ul className="list-disc list-inside mt-2">
                <li>400 - Bad Request (Invalid image URL or format)</li>
                <li>500 - Internal Server Error</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Important Notes</h3>
          <ul className="list-disc list-inside text-blue-700 space-y-2">
            <li>Supported image formats: JPEG, PNG</li>
            <li>Maximum image size: 5MB</li>
            <li>API rate limit: 10 requests/minute (adjust as needed)</li>
            <li>CORS enabled for all origins</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
