import { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for your interest! We'll notify you at ${email} when we launch.`);
    setEmail('');
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-medium text-gray-800 mb-6">Join Our Waitlist</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-4 bg-white border border-gray-300 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-3 px-6 font-medium rounded hover:bg-gray-700 transition-colors duration-200"
        >
          Get Notified
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
