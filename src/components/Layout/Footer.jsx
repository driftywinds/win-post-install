const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">About</h3>
            <p className="text-gray-600 text-sm">
              Create custom installation scripts that automatically install selected programs
              and adjust selected settings. Everything automatically with a single script file.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://learn.microsoft.com/en-us/windows/package-manager/winget/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Winget Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://winget.run/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Winget Package Search
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kaic/win-post-install"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Usage</h3>
            <ol className="space-y-2 text-sm text-gray-600">
              <li>1. Select your desired software and configurations</li>
              <li>2. Download the generated script</li>
              <li>3. Run as Administrator on Windows</li>
            </ol>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>Created with React + Vite + Tailwind CSS • All scripts use winget (Windows Package Manager)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
