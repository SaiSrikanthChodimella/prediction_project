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
  const frontendTech = ["GitHub", "React", "Tailwind CSS"];
  const contributors = ["Chaitanya Kottapalli", "Sai Srikanth Chodimella"];

  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            {/* Left Column - Project Info */}
            <div className="space-y-4 mb-8 xl:mb-0">
              <h3 className="text-xl font-bold text-blue-400">
                AI Project Stack
              </h3>
              <p className="text-gray-400">
                Powered by cutting-edge technologies and dedicated contributors
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/your-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Technology Stack Columns */}
            <div className="grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                {/* Backend Technologies */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                    Backend Stack
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {backendTech.map((tech) => (
                      <li
                        key={tech}
                        className="text-gray-400 hover:text-blue-300 transition-colors"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Frontend Technologies */}
                <div className="mt-12 md:mt-0 space-y-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                    Frontend Stack
                  </h4>
                  <ul className="space-y-2">
                    {frontendTech.map((tech) => (
                      <li
                        key={tech}
                        className="text-gray-400 hover:text-blue-300 transition-colors"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contributors Column */}
              <div className="md:grid md:grid-cols-1 md:gap-8">
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                    Core Contributors
                  </h4>
                  <ul className="space-y-2">
                    {contributors.map((contributor) => (
                      <li
                        key={contributor}
                        className="text-gray-400 hover:text-blue-300 transition-colors"
                      >
                        {contributor}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-12 border-t border-gray-800 pt-8">
            <p className="text-base text-gray-400 text-center">
              &copy; {currentYear} AI Development Project.
              <br className="md:hidden" />
              Built with ❤️ by {contributors.join(" & ")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
