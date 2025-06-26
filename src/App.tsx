import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import Pricing from './pages/Pricing';
import Sell from './pages/Sell';
import Resources from './pages/Resources';
import Support from './pages/Support';
import Dashboard from './pages/Dashboard';
import CreateListing from './pages/CreateListing';
import LegalGuides from './pages/LegalGuides';
import StateCompliance from './pages/StateCompliance';
import MarketInsights from './pages/MarketInsights';
import Community from './pages/Community';
import Launch from './pages/Launch';

function App() {
  // --- Launch Page Toggle Logic ---
  // 1. Code-based toggle (env var)
  const showLaunchByEnv = import.meta.env.VITE_SHOW_LAUNCH_PAGE === 'true';

  // 2. Supabase-based toggle (remote)
  const [showLaunchBySupabase, setShowLaunchBySupabase] = React.useState<boolean | null>(null);
  React.useEffect(() => {
    if (!showLaunchByEnv) {
      // Only fetch from Supabase if env var is not true
      import('./lib/supabase').then(({ supabase }) => {
        supabase
          .from('settings')
          .select('show_launch_page')
          .single()
          .then(({ data }) => setShowLaunchBySupabase(!!data?.show_launch_page))
          .catch(() => setShowLaunchBySupabase(false));
      });
    }
  }, [showLaunchByEnv]);

  // 3. Decide what to render
  const showLaunchPage = showLaunchByEnv || showLaunchBySupabase;

  if (showLaunchPage === true) {
    // Show launch page for all routes
    return (
      <Router>
        <Routes>
          <Route path="/*" element={<Launch />} />
        </Routes>
      </Router>
    );
  }
  if (showLaunchPage === null) {
    // Show loading spinner while fetching toggle
    return <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white">Loading...</div>;
  }
  // Fallback: show normal app
  return (
    <>
      <Router>
        <Routes>
          <Route path="/launch" element={<Launch />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/legal" element={<LegalGuides />} />
            <Route path="/resources/compliance" element={<StateCompliance />} />
            <Route path="/resources/insights" element={<MarketInsights />} />
            <Route path="/support" element={<Support />} />
            <Route path="/community" element={<Community />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-listing" element={<CreateListing />} />
          </Route>
        </Routes>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </Router>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </>
  );
}

export default App;