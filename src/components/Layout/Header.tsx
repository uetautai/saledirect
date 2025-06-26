import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, X, User, Bell, Search, LogOut, LayoutDashboard } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import SignInModal from '../Auth/SignInModal';
import SignUpModal from '../Auth/SignUpModal';
import toast from 'react-hot-toast';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const location = useLocation();
  const { user, isSignedIn, signOut } = useAuthStore();

  const navigation = [
    { name: 'Buy', href: '/properties' },
    { name: 'Sell', href: '/sell' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Resources', href: '/resources' },
    { name: 'Support', href: '/support' }
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = () => {
    signOut();
    toast.success('Signed out successfully');
  };

  return (
    <>
      <header className="bg-gradient-to-b from-[#181F2F] via-[#232946] to-[#181F2F] shadow-none border-b-0 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-4 group">
            <span className="font-display text-2xl font-extrabold text-white group-hover:text-primary-400 transition-colors">Sale</span>
            <span className="inline-block w-4 h-4 rounded-full bg-gradient-to-br from-primary-400 via-blue-400 to-pink-400 shadow-lg"></span>
            <span className="font-display text-2xl font-extrabold text-blue-400 group-hover:text-blue-200 transition-colors">Direct</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-white border-b-2 border-white pb-1'
                    : 'text-white hover:text-primary-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 text-neutral-400 hover:text-neutral-600 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              
              {isSignedIn ? (
                <>
                  <button className="p-2 text-neutral-400 hover:text-neutral-600 transition-colors">
                    <Bell className="h-5 w-5" />
                  </button>
                  <Link
                    to="/dashboard"
                    className="p-2 text-neutral-400 hover:text-primary-600 transition-colors"
                    title="Dashboard"
                  >
                    <LayoutDashboard className="h-5 w-5" />
                  </Link>
                  <div className="flex items-center space-x-3">
                    <div className="text-sm">
                      <div className="font-medium text-neutral-900">
                        {user?.firstName} {user?.lastName}
                      </div>
                      <div className="text-neutral-500 capitalize">{user?.role}</div>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="p-2 text-neutral-400 hover:text-red-600 transition-colors"
                      title="Sign Out"
                    >
                      <LogOut className="h-5 w-5" />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setShowSignIn(true)}
                    className="text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setShowSignUp(true)}
                    className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    Get Started
                  </button>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </header>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-neutral-200 shadow-lg">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-neutral-600 hover:text-primary-600 hover:bg-neutral-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-neutral-200 pt-2 mt-2">
                {isSignedIn ? (
                  <div className="px-3 py-2">
                    <div className="text-sm font-medium text-neutral-900 mb-1">
                      {user?.firstName} {user?.lastName}
                    </div>
                    <Link
                      to="/dashboard"
                      className="block text-sm text-primary-600 hover:text-primary-700 mb-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        handleSignOut();
                        setIsMenuOpen(false);
                      }}
                      className="text-sm text-red-600 hover:text-red-700"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setShowSignIn(true);
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-md transition-colors"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => {
                        setShowSignUp(true);
                        setIsMenuOpen(false);
                      }}
                      className="block w-full px-3 py-2 text-base font-medium bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-md mt-1 text-center"
                    >
                      Get Started
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

      {/* Auth Modals */}
      <SignInModal
        isOpen={showSignIn}
        onClose={() => setShowSignIn(false)}
        onSwitchToSignUp={() => {
          setShowSignIn(false);
          setShowSignUp(true);
        }}
      />
      <SignUpModal
        isOpen={showSignUp}
        onClose={() => setShowSignUp(false)}
        onSwitchToSignIn={() => {
          setShowSignUp(false);
          setShowSignIn(true);
        }}
      />
    </>
  );
};

export default Header;