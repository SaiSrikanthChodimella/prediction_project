export default function Footer() {
  const currentYear = new Date().getFullYear();
  const backendTech = [
    "Torch",
    "TorchVision",
    "Pillow",
    "FastAPI",
    "Python-IO",
    "Requests",
    "Uvicorn",
    "Python-Multipart",
  ];
  const frontendTech = ["React JavaScript", "Tailwind CSS", "Axios"];
  const contributors = ["Chaitanya Kottapalli", "Sai Srikanth Chodimella"];

  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <svg
                className="w-8 h-8 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <h3 className="text-xl font-bold text-gray-100">AnimalAI</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Advanced animal recognition system powered by deep learning and
              modern web technologies. Classifying 10+ animal species with
              state-of-the-art accuracy.
            </p>
          </div>

          {/* Middle Column - Tech Stack */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-100">Tech Stack</h4>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h5 className="text-sm font-medium text-blue-400 mb-3">
                  Backend
                </h5>
                <ul className="space-y-2">
                  {backendTech.map((tech) => (
                    <li
                      key={tech}
                      className="text-gray-300 text-sm hover:text-blue-400 transition-colors"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-medium text-blue-400 mb-3">
                  Frontend
                </h5>
                <ul className="space-y-2">
                  {frontendTech.map((tech) => (
                    <li
                      key={tech}
                      className="text-gray-300 text-sm hover:text-blue-400 transition-colors"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Development Team */}
          <div className="space-y-6">
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-100">
                Development Team
              </h4>
              <ul className="space-y-3">
                {contributors.map((contributor) => (
                  <li
                    key={contributor}
                    className="text-gray-300 text-sm hover:text-blue-400 transition-colors"
                  >
                    {contributor}
                  </li>
                ))}
              </ul>
            </div>

            {/* New Follow Us Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-100">
                Follow Us on GitHub
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://github.com/ChaitanyaKottapalli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">Chaitanya Kottapalli</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/SaiSrikanthChodimella"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">Sai Srikanth Chodimella</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} AnimalAI. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Crafted with passion by {contributors.join(" & ")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
