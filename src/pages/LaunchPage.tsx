import SignupForm from '../components/SignupForm';

interface LaunchPageProps {
  onViewDemo: () => void;
}

const LaunchPage = ({ onViewDemo }: LaunchPageProps) => {
  return (
    <div className="launch-page">
      <div className="launch-content">
        <h1 className="launch-title">SaleDirect</h1>
        <p className="launch-subtitle">
          Revolutionizing property sales with cutting-edge technology and seamless transactions.
        </p>
        <div className="max-w-md mx-auto">
          <SignupForm />
        </div>
        <button 
          onClick={onViewDemo}
          className="mt-12 px-8 py-3 bg-gray-800 text-white border-2 border-gray-800 hover:bg-gray-700 hover:border-gray-700 transition-colors duration-200 font-medium text-lg rounded"
        >
          View Demo Site
        </button>
      </div>
    </div>
  );
};

export default LaunchPage;
