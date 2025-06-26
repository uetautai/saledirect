import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  TrendingUp, 
  TrendingDown, 
  Calendar, 
  MapPin,
  DollarSign,
  Home,
  BarChart3,
  Download,
  Filter
} from 'lucide-react';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';

const MarketInsights: React.FC = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('3months');

  const states = ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'];
  const periods = [
    { value: '1month', label: 'Last Month' },
    { value: '3months', label: 'Last 3 Months' },
    { value: '6months', label: 'Last 6 Months' },
    { value: '1year', label: 'Last Year' }
  ];

  const marketData = [
    {
      state: 'NSW',
      medianPrice: 1200000,
      priceChange: 2.3,
      daysOnMarket: 28,
      salesVolume: 1247,
      trend: 'up'
    },
    {
      state: 'VIC',
      medianPrice: 950000,
      priceChange: 1.8,
      daysOnMarket: 32,
      salesVolume: 1089,
      trend: 'up'
    },
    {
      state: 'QLD',
      medianPrice: 675000,
      priceChange: 4.2,
      daysOnMarket: 21,
      salesVolume: 892,
      trend: 'up'
    },
    {
      state: 'WA',
      medianPrice: 580000,
      priceChange: 3.1,
      daysOnMarket: 25,
      salesVolume: 567,
      trend: 'up'
    },
    {
      state: 'SA',
      medianPrice: 520000,
      priceChange: 2.7,
      daysOnMarket: 30,
      salesVolume: 423,
      trend: 'up'
    },
    {
      state: 'TAS',
      medianPrice: 485000,
      priceChange: 1.2,
      daysOnMarket: 35,
      salesVolume: 156,
      trend: 'up'
    }
  ];

  const insights = [
    {
      id: '1',
      title: 'Sydney Property Market Shows Strong Recovery',
      category: 'Market Trend',
      state: 'NSW',
      date: '2024-01-15',
      summary: 'Sydney property prices have increased 2.3% in the last quarter, with strong demand in the eastern suburbs driving growth.',
      keyPoints: [
        'Eastern suburbs leading price growth at 3.1%',
        'First home buyer activity up 15%',
        'Auction clearance rates at 68%',
        'Rental yields improving in outer suburbs'
      ]
    },
    {
      id: '2',
      title: 'Melbourne Market Stabilizes After Recent Volatility',
      category: 'Market Update',
      state: 'VIC',
      date: '2024-01-12',
      summary: 'Melbourne property market shows signs of stabilization with steady price growth and improved buyer confidence.',
      keyPoints: [
        'Inner city apartments showing renewed interest',
        'Days on market decreasing to 32 days average',
        'New listings down 8% compared to last year',
        'Regional Victoria outperforming metro areas'
      ]
    },
    {
      id: '3',
      title: 'Queensland Leads National Price Growth',
      category: 'Price Update',
      state: 'QLD',
      date: '2024-01-10',
      summary: 'Queensland continues to lead national price growth with a 4.2% increase, driven by interstate migration.',
      keyPoints: [
        'Brisbane median price reaches $675,000',
        'Gold Coast luxury market particularly strong',
        'Rental vacancy rates at historic lows',
        'Infrastructure projects boosting regional areas'
      ]
    }
  ];

  const topSuburbs = [
    { suburb: 'Bondi Beach', state: 'NSW', medianPrice: 2100000, growth: 5.2 },
    { suburb: 'Toorak', state: 'VIC', medianPrice: 3200000, growth: 3.8 },
    { suburb: 'New Farm', state: 'QLD', medianPrice: 1150000, growth: 6.1 },
    { suburb: 'Cottesloe', state: 'WA', medianPrice: 1850000, growth: 4.3 },
    { suburb: 'Unley', state: 'SA', medianPrice: 890000, growth: 3.9 }
  ];

  const filteredData = selectedState 
    ? marketData.filter(data => data.state === selectedState)
    : marketData;

  const filteredInsights = selectedState
    ? insights.filter(insight => insight.state === selectedState)
    : insights;

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/resources"
              className="flex items-center text-neutral-600 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Resources
            </Link>
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              <TrendingUp className="h-4 w-4 mr-2" />
              Market Intelligence
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Property Market Insights
            </h1>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Stay informed with the latest property market trends, pricing data, 
              and insights across Australia to make informed selling decisions.
            </p>
          </div>

          {/* Filters */}
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Filter by State
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">All States</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Time Period
                </label>
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  {periods.map(period => (
                    <option key={period.value} value={period.value}>{period.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Market Overview */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900">
              Market Overview
            </h2>
            <Button variant="outline" icon={Download}>
              Download Report
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((data, index) => (
              <Card
                key={data.state}
                hover={true}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-neutral-900">{data.state}</h3>
                  <div className={`flex items-center space-x-1 ${
                    data.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {data.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    <span className="text-sm font-medium">
                      {data.priceChange > 0 ? '+' : ''}{data.priceChange}%
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-neutral-400" />
                      <span className="text-sm text-neutral-600">Median Price</span>
                    </div>
                    <span className="font-semibold text-neutral-900">
                      ${data.medianPrice.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-neutral-400" />
                      <span className="text-sm text-neutral-600">Days on Market</span>
                    </div>
                    <span className="font-semibold text-neutral-900">
                      {data.daysOnMarket} days
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Home className="h-4 w-4 text-neutral-400" />
                      <span className="text-sm text-neutral-600">Sales Volume</span>
                    </div>
                    <span className="font-semibold text-neutral-900">
                      {data.salesVolume.toLocaleString()}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Market Insights */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
                Latest Market Insights
              </h2>
              
              <div className="space-y-6">
                {filteredInsights.map((insight, index) => (
                  <Card
                    key={insight.id}
                    hover={true}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                          <BarChart3 className="h-6 w-6 text-primary-600" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-xs font-medium text-primary-600 bg-primary-100 px-2 py-1 rounded-full">
                              {insight.state}
                            </span>
                            <span className="text-xs font-medium text-neutral-600 bg-neutral-100 px-2 py-1 rounded-full">
                              {insight.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-neutral-900">
                            {insight.title}
                          </h3>
                        </div>
                      </div>
                      
                      <div className="text-sm text-neutral-500">
                        {new Date(insight.date).toLocaleDateString()}
                      </div>
                    </div>

                    <p className="text-neutral-600 mb-4">
                      {insight.summary}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-neutral-900">Key Points:</h4>
                      {insight.keyPoints.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-neutral-700">{point}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Performing Suburbs */}
            <Card>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Top Performing Suburbs
              </h3>
              
              <div className="space-y-4">
                {topSuburbs.map((suburb, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-neutral-900">{suburb.suburb}</div>
                      <div className="text-sm text-neutral-600">{suburb.state}</div>
                      <div className="text-sm font-medium text-neutral-900">
                        ${suburb.medianPrice.toLocaleString()}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 text-green-600">
                        <TrendingUp className="h-4 w-4" />
                        <span className="text-sm font-medium">+{suburb.growth}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Stats */}
            <Card>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                National Averages
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Median Price</span>
                  <span className="font-semibold text-neutral-900">$847,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Price Growth (YoY)</span>
                  <span className="font-semibold text-green-600">+2.8%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Days on Market</span>
                  <span className="font-semibold text-neutral-900">29 days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Clearance Rate</span>
                  <span className="font-semibold text-neutral-900">67%</span>
                </div>
              </div>
            </Card>

            {/* Market Tools */}
            <Card>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Market Tools
              </h3>
              
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" icon={DollarSign}>
                  Property Valuation Tool
                </Button>
                <Button variant="outline" className="w-full justify-start" icon={BarChart3}>
                  Suburb Comparison
                </Button>
                <Button variant="outline" className="w-full justify-start" icon={TrendingUp}>
                  Price Prediction
                </Button>
                <Button variant="outline" className="w-full justify-start" icon={Calendar}>
                  Best Time to Sell
                </Button>
              </div>
            </Card>

            {/* Newsletter Signup */}
            <Card>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Market Updates
              </h3>
              
              <p className="text-sm text-neutral-600 mb-4">
                Get weekly market insights delivered to your inbox
              </p>
              
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                />
                <Button variant="primary" size="sm" className="w-full">
                  Subscribe
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInsights;