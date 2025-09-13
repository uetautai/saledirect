import { useState } from 'react';
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
import LaunchPage from './pages/LaunchPage';

function App() {
  // Simple local state for launch page
  const [showLaunchPage, setShowLaunchPage] = useState(true);

  if (showLaunchPage) {
    return <LaunchPage onViewDemo={() => setShowLaunchPage(false)} />;
  }

  return (
    <Router>
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
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<PropertyDetails />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/resources" element={<Resources />}>
            <Route path="legal" element={<LegalGuides />} />
            <Route path="compliance" element={<StateCompliance />} />
            <Route path="insights" element={<MarketInsights />} />
          </Route>
          <Route path="/support" element={<Support />} />
          <Route path="/community" element={<Community />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-listing" element={<CreateListing />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
