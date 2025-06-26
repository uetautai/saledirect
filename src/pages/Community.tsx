import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Users, 
  MessageSquare, 
  ThumbsUp, 
  Reply, 
  Plus,
  Search,
  Filter,
  Star,
  Award,
  TrendingUp,
  Clock
} from 'lucide-react';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';
import toast from 'react-hot-toast';

const Community: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewPost, setShowNewPost] = useState(false);

  const categories = [
    'Success Stories',
    'Tips & Tricks',
    'Legal Questions',
    'Market Discussion',
    'Photography',
    'Pricing Advice',
    'General Discussion'
  ];

  const posts = [
    {
      id: '1',
      title: 'Sold my Sydney property in 10 days - here\'s how!',
      author: 'Sarah M.',
      authorRole: 'Verified Seller',
      category: 'Success Stories',
      content: 'Just wanted to share my amazing experience selling through SaleDirect. Listed my Bondi apartment and had 3 offers within a week...',
      likes: 24,
      replies: 8,
      timeAgo: '2 hours ago',
      featured: true,
      tags: ['Sydney', 'Apartment', 'Quick Sale']
    },
    {
      id: '2',
      title: 'Best photography tips for property listings?',
      author: 'Mike R.',
      authorRole: 'New Seller',
      category: 'Photography',
      content: 'I\'m about to list my first property and want to take great photos myself. What are your top tips for making rooms look spacious and bright?',
      likes: 12,
      replies: 15,
      timeAgo: '4 hours ago',
      featured: false,
      tags: ['Photography', 'DIY', 'Tips']
    },
    {
      id: '3',
      title: 'QLD disclosure requirements - need clarification',
      author: 'Jenny L.',
      authorRole: 'Experienced Seller',
      category: 'Legal Questions',
      content: 'Can someone help clarify the pool safety certificate requirements for QLD? My property has a spa, does this count as a pool?',
      likes: 8,
      replies: 6,
      timeAgo: '6 hours ago',
      featured: false,
      tags: ['Queensland', 'Legal', 'Pool Safety']
    },
    {
      id: '4',
      title: 'Melbourne market heating up - perfect time to sell',
      author: 'David K.',
      authorRole: 'Market Expert',
      category: 'Market Discussion',
      content: 'Seeing strong buyer activity in Melbourne\'s inner suburbs. Auction clearance rates up 15% this month. Great time for private sellers to capitalize...',
      likes: 31,
      replies: 12,
      timeAgo: '8 hours ago',
      featured: true,
      tags: ['Melbourne', 'Market Trends', 'Timing']
    },
    {
      id: '5',
      title: 'How I saved $35,000 in agent fees',
      author: 'Lisa T.',
      authorRole: 'Verified Seller',
      category: 'Success Stories',
      content: 'Sharing my journey of selling a $1.4M property in Perth without an agent. The process was smoother than I expected and the savings were incredible...',
      likes: 45,
      replies: 22,
      timeAgo: '1 day ago',
      featured: true,
      tags: ['Perth', 'Savings', 'High Value']
    }
  ];

  const topContributors = [
    { name: 'Sarah M.', posts: 12, likes: 156, badge: 'Expert Seller' },
    { name: 'David K.', posts: 8, likes: 134, badge: 'Market Expert' },
    { name: 'Lisa T.', posts: 6, likes: 98, badge: 'Success Story' },
    { name: 'Mike R.', posts: 15, likes: 87, badge: 'Helper' }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const handleNewPost = () => {
    toast.success('Post created successfully!');
    setShowNewPost(false);
  };

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
              <Users className="h-4 w-4 mr-2" />
              5,000+ Active Members
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Community Forum
            </h1>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Connect with other property sellers, share experiences, get advice, 
              and learn from successful sales across Australia.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search discussions, tips, and stories..."
                    className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
              
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={() => setShowNewPost(true)}
                variant="primary"
                icon={Plus}
              >
                Start New Discussion
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-neutral-900">
                {filteredPosts.length} Discussions
              </h2>
              
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" icon={TrendingUp}>
                  Trending
                </Button>
                <Button variant="ghost" size="sm" icon={Clock}>
                  Recent
                </Button>
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-6">
              {filteredPosts.map((post, index) => (
                <Card
                  key={post.id}
                  hover={true}
                  className={`animate-fade-in ${post.featured ? 'ring-2 ring-primary-200' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
                >
                  {post.featured && (
                    <div className="flex items-center space-x-2 mb-4">
                      <Star className="h-4 w-4 text-primary-500" />
                      <span className="text-sm font-medium text-primary-600">Featured Discussion</span>
                    </div>
                  )}

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold text-lg">
                        {post.author.charAt(0)}
                      </span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-neutral-900 hover:text-primary-600 cursor-pointer">
                          {post.title}
                        </h3>
                        <span className="text-xs font-medium text-primary-600 bg-primary-100 px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-3 text-sm text-neutral-600">
                        <span className="font-medium">{post.author}</span>
                        <span className="text-primary-600">{post.authorRole}</span>
                        <span>{post.timeAgo}</span>
                      </div>
                      
                      <p className="text-neutral-700 mb-4 line-clamp-2">
                        {post.content}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map(tag => (
                          <span
                            key={tag}
                            className="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-2 text-neutral-600 hover:text-primary-600 transition-colors">
                          <ThumbsUp className="h-4 w-4" />
                          <span className="text-sm">{post.likes}</span>
                        </button>
                        
                        <button className="flex items-center space-x-2 text-neutral-600 hover:text-primary-600 transition-colors">
                          <MessageSquare className="h-4 w-4" />
                          <span className="text-sm">{post.replies} replies</span>
                        </button>
                        
                        <button className="flex items-center space-x-2 text-neutral-600 hover:text-primary-600 transition-colors">
                          <Reply className="h-4 w-4" />
                          <span className="text-sm">Reply</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">💬</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  No discussions found
                </h3>
                <p className="text-neutral-600 mb-6">
                  Try adjusting your search or start a new discussion
                </p>
                <Button
                  onClick={() => setShowNewPost(true)}
                  variant="primary"
                  icon={Plus}
                >
                  Start Discussion
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <Card>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Community Stats
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Total Members</span>
                  <span className="font-semibold text-neutral-900">5,247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Discussions</span>
                  <span className="font-semibold text-neutral-900">1,834</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Success Stories</span>
                  <span className="font-semibold text-green-600">342</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Active Today</span>
                  <span className="font-semibold text-primary-600">156</span>
                </div>
              </div>
            </Card>

            {/* Top Contributors */}
            <Card>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Top Contributors
              </h3>
              
              <div className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {contributor.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-neutral-900">{contributor.name}</div>
                      <div className="text-xs text-primary-600">{contributor.badge}</div>
                      <div className="text-xs text-neutral-500">
                        {contributor.posts} posts • {contributor.likes} likes
                      </div>
                    </div>
                    <Award className="h-4 w-4 text-orange-500" />
                  </div>
                ))}
              </div>
            </Card>

            {/* Categories */}
            <Card>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Popular Categories
              </h3>
              
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-neutral-600 hover:bg-neutral-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </Card>

            {/* Community Guidelines */}
            <Card>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Community Guidelines
              </h3>
              
              <div className="space-y-3 text-sm text-neutral-600">
                <p>• Be respectful and helpful to other members</p>
                <p>• Share accurate information and experiences</p>
                <p>• No spam or promotional content</p>
                <p>• Keep discussions relevant to property sales</p>
                <p>• Report inappropriate content</p>
              </div>
              
              <Button variant="outline" size="sm" className="w-full mt-4">
                Read Full Guidelines
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* New Post Modal */}
      {showNewPost && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-neutral-900">Start New Discussion</h3>
              <button
                onClick={() => setShowNewPost(false)}
                className="text-neutral-400 hover:text-neutral-600"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Category
                </label>
                <select className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="What would you like to discuss?"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Description
                </label>
                <textarea
                  rows={6}
                  placeholder="Share your thoughts, questions, or experiences..."
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Tags (optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g., Sydney, First-time-seller, Tips"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div className="flex space-x-3 pt-4">
                <Button
                  onClick={handleNewPost}
                  variant="primary"
                  className="flex-1"
                >
                  Post Discussion
                </Button>
                <Button
                  onClick={() => setShowNewPost(false)}
                  variant="outline"
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Community;