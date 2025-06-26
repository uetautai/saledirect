import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Plus, 
  Eye, 
  MessageSquare, 
  DollarSign, 
  Calendar,
  TrendingUp,
  Users,
  FileText,
  Settings,
  Bell,
  Heart,
  Edit,
  Trash2
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';

const Dashboard: React.FC = () => {
  const { user } = useAuthStore();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for dashboard
  const stats = [
    {
      title: 'Active Listings',
      value: '3',
      change: '+1 this month',
      icon: FileText,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Total Views',
      value: '1,247',
      change: '+23% this week',
      icon: Eye,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Messages',
      value: '18',
      change: '5 unread',
      icon: MessageSquare,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Offers Received',
      value: '7',
      change: '2 pending',
      icon: DollarSign,
      color: 'from-coral-500 to-coral-600'
    }
  ];

  const recentListings = [
    {
      id: '1',
      title: 'Modern Family Home with Pool',
      address: 'Bondi Beach, NSW',
      price: 850000,
      views: 245,
      offers: 3,
      status: 'active',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '2',
      title: 'Luxury Apartment with City Views',
      address: 'Melbourne, VIC',
      price: 1200000,
      views: 189,
      offers: 2,
      status: 'under_offer',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '3',
      title: 'Charming Queenslander',
      address: 'Paddington, QLD',
      price: 675000,
      views: 156,
      offers: 1,
      status: 'active',
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const recentMessages = [
    {
      id: '1',
      from: 'John Smith',
      subject: 'Interested in your Bondi property',
      time: '2 hours ago',
      unread: true
    },
    {
      id: '2',
      from: 'Sarah Johnson',
      subject: 'Viewing request for Melbourne apartment',
      time: '5 hours ago',
      unread: true
    },
    {
      id: '3',
      from: 'Mike Wilson',
      subject: 'Follow-up on offer',
      time: '1 day ago',
      unread: false
    }
  ];

  const upcomingInspections = [
    {
      id: '1',
      property: 'Modern Family Home with Pool',
      date: '2024-02-10',
      time: '10:00 AM',
      type: 'Open Inspection',
      attendees: 8
    },
    {
      id: '2',
      property: 'Luxury Apartment with City Views',
      date: '2024-02-12',
      time: '6:00 PM',
      type: 'Private Inspection',
      attendees: 2
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'under_offer':
        return 'bg-orange-100 text-orange-800';
      case 'sold':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'under_offer':
        return 'Under Offer';
      case 'sold':
        return 'Sold';
      default:
        return 'Draft';
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-display font-bold text-neutral-900">
                Welcome back, {user?.firstName}!
              </h1>
              <p className="text-neutral-600 mt-1">
                Manage your property listings and track your sales progress
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" icon={Bell}>
                Notifications
              </Button>
              <Link to="/create-listing">
                <Button variant="primary" icon={Plus}>
                  New Listing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.title}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-neutral-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-neutral-900 mt-2">{stat.value}</p>
                    <p className="text-sm text-primary-600 mt-1">{stat.change}</p>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Listings */}
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-neutral-900">Your Listings</h2>
                <Link to="/create-listing">
                  <Button variant="outline" size="sm" icon={Plus}>
                    Add Listing
                  </Button>
                </Link>
              </div>
              
              <div className="space-y-4">
                {recentListings.map((listing) => (
                  <div key={listing.id} className="flex items-center space-x-4 p-4 border border-neutral-200 rounded-lg hover:border-primary-200 transition-colors">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-neutral-900">{listing.title}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(listing.status)}`}>
                          {getStatusText(listing.status)}
                        </span>
                      </div>
                      
                      <p className="text-neutral-600 text-sm mb-2">{listing.address}</p>
                      <p className="text-lg font-bold text-primary-600">${listing.price.toLocaleString()}</p>
                      
                      <div className="flex items-center space-x-4 mt-2 text-sm text-neutral-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{listing.views} views</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="h-4 w-4" />
                          <span>{listing.offers} offers</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" icon={Edit}>
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" icon={Eye}>
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Upcoming Inspections */}
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-neutral-900">Upcoming Inspections</h2>
                <Button variant="outline" size="sm" icon={Calendar}>
                  Schedule New
                </Button>
              </div>
              
              <div className="space-y-4">
                {upcomingInspections.map((inspection) => (
                  <div key={inspection.id} className="flex items-center justify-between p-4 bg-primary-50 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-neutral-900">{inspection.property}</h3>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-neutral-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(inspection.date).toLocaleDateString()}</span>
                        </div>
                        <span>{inspection.time}</span>
                        <span>• {inspection.type}</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-semibold text-primary-600">
                        {inspection.attendees}
                      </div>
                      <div className="text-sm text-neutral-500">attendees</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link to="/create-listing">
                  <Button variant="outline" className="w-full justify-start" icon={Plus}>
                    Create New Listing
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start" icon={MessageSquare}>
                  View Messages
                </Button>
                <Button variant="outline" className="w-full justify-start" icon={Calendar}>
                  Schedule Inspection
                </Button>
                <Button variant="outline" className="w-full justify-start" icon={TrendingUp}>
                  View Analytics
                </Button>
              </div>
            </Card>

            {/* Recent Messages */}
            <Card>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-neutral-900">Recent Messages</h3>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </div>
              
              <div className="space-y-3">
                {recentMessages.map((message) => (
                  <div key={message.id} className={`p-3 rounded-lg border ${message.unread ? 'bg-primary-50 border-primary-200' : 'bg-neutral-50 border-neutral-200'}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-neutral-900">{message.from}</span>
                      {message.unread && (
                        <div className="w-2 h-2 bg-primary-500 rounded-full" />
                      )}
                    </div>
                    <p className="text-sm text-neutral-600 mb-1">{message.subject}</p>
                    <p className="text-xs text-neutral-500">{message.time}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Account Status */}
            <Card>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Account Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Current Plan</span>
                  <span className="font-medium text-primary-600">Elite Plan</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Listings Used</span>
                  <span className="font-medium text-neutral-900">3 / 5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Next Billing</span>
                  <span className="font-medium text-neutral-900">Feb 15, 2024</span>
                </div>
                
                <div className="pt-3 border-t border-neutral-200">
                  <Link to="/pricing">
                    <Button variant="outline" size="sm" className="w-full">
                      Upgrade Plan
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;