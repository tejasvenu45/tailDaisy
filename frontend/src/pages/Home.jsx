import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Mental Health Awareness
        </h1>
        <p className="text-lg text-gray-600">
          Supporting mental well-being for a healthier society
        </p>
      </header>

      <main className="mt-8 text-center">
        <p className="text-lg text-gray-700">
          Mental health is as important as physical health. It affects how we
          think, feel, and act. Let's break the stigma and talk openly about
          mental health.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Our platform provides resources, articles, and support to help you
          prioritize your mental well-being.
        </p>
      </main>

      <footer className="mt-8 text-center">
        <Link
          to="/resources"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Explore Resources
        </Link>
      </footer>
    </div>
  );
};

export default Home;
