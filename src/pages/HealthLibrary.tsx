import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, BookOpen, Bone, Scale, Heart, Activity } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Topics', icon: BookOpen },
  { id: 'orthopedic', label: 'Orthopedic Health', icon: Bone },
  { id: 'bariatric', label: 'Weight & Metabolism', icon: Scale },
  { id: 'general', label: 'General Health', icon: Heart },
  { id: 'wellness', label: 'Wellness', icon: Activity },
];

const articles = [
  {
    id: 'hip-pain',
    title: '5 Causes of Women\'s Hip Pain',
    excerpt: 'Hip pain can affect women of all ages. Learn about the common causes including arthritis, bursitis, and hip fractures, and when to see a specialist.',
    category: 'orthopedic',
    readTime: '5 min read',
    image: '/images/nurse-talking-to-female-patient-healthy-highlight.jpg'
  },
  {
    id: 'back-pain',
    title: 'A Real Pain in the Back',
    excerpt: 'Studies show that 80% of Americans will experience back pain. Discover common causes, risk factors, and treatment options for back problems.',
    category: 'orthopedic',
    readTime: '6 min read',
    image: '/images/avangard4.jpg'
  },
  {
    id: 'joint-sounds',
    title: 'Assessing Joint Sounds and Health',
    excerpt: 'What\'s that sound? Learn about clicking, cracking, and popping joints - when they\'re normal and when to be concerned.',
    category: 'orthopedic',
    readTime: '4 min read',
    image: '/images/medicos.png'
  },
  {
    id: 'safe-movements',
    title: 'Avoid Injuries with Safe Body Movements',
    excerpt: 'Even simple actions can put you at risk for injury. Learn proper techniques for bending, lifting, and daily activities.',
    category: 'orthopedic',
    readTime: '5 min read',
    image: '/images/perder-barriga-ilustracao.jpg'
  },
  {
    id: 'sports-injuries',
    title: 'Avoiding Sprains and Other Athletic Injuries',
    excerpt: 'Whether you\'re a professional athlete or amateur, learn how to identify and prevent common sports injuries.',
    category: 'orthopedic',
    readTime: '7 min read',
    image: '/images/faca-as-pazes-com-a-balanca.jpg'
  },
  {
    id: 'bone-health',
    title: 'Bone to Be Wild',
    excerpt: 'May is National Women\'s Health Awareness Month. Learn about osteoporosis and how to maintain strong bones as you age.',
    category: 'general',
    readTime: '5 min read',
    image: '/images/avangard3.jpg'
  },
  {
    id: 'carpal-tunnel',
    title: 'Carpal Tunnel Syndrome',
    excerpt: 'More than eight million people are affected by carpal tunnel syndrome annually. Learn about symptoms, risk factors, and treatments.',
    category: 'orthopedic',
    readTime: '6 min read',
    image: '/images/Fotos-308-768x512.jpg'
  },
  {
    id: 'hip-replacement',
    title: 'Do You Need A Hip Replacement?',
    excerpt: 'Hip replacements have increased 30% between 2007 and 2017. Learn when surgery might be necessary and what to expect.',
    category: 'orthopedic',
    readTime: '8 min read',
    image: '/images/avangard2.jpg'
  },
  {
    id: 'exercise-pain',
    title: 'Exercise Soreness Vs Injury Pain',
    excerpt: 'It\'s essential to know the difference between "good" pain after a workout versus injury pain that needs medical attention.',
    category: 'wellness',
    readTime: '4 min read',
    image: '/images/avangard5.jpg'
  },
  {
    id: 'chronic-conditions',
    title: 'Fighting January Flare-Ups',
    excerpt: 'Learn how colder weather can affect chronic conditions like arthritis and what you can do to manage symptoms.',
    category: 'general',
    readTime: '6 min read',
    image: '/images/bypass.png'
  },
];

export default function HealthLibrary() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <nav className="text-sm text-blue-200 mb-4">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Health Library</span>
            </nav>
            <h1 className="text-3xl lg:text-4xl font-bold">Health Library</h1>
            <p className="text-blue-100 mt-2 max-w-2xl">
              Trusted health information to help you make informed decisions about your care.
            </p>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="bg-white border-b sticky top-16 z-40">
        <div className="px-4 lg:px-8 py-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/20 outline-none"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-[#003366] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="py-12 lg:py-16">
        <div className="px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6 text-gray-600">
              Showing {filteredArticles.length} articles
            </div>

            {filteredArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <Link 
                    key={article.id}
                    to={`/health-library/${article.id}`}
                    className="bg-white rounded-xl overflow-hidden card-shadow card-hover block"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-[#003366]/10 text-[#003366] text-xs font-medium px-2 py-1 rounded">
                          {categories.find(c => c.id === article.category)?.label}
                        </span>
                        <span className="text-gray-400 text-xs">{article.readTime}</span>
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">{article.title}</h3>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4">{article.excerpt}</p>
                      <span className="text-[#003366] font-medium text-sm flex items-center gap-1">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-50 py-8">
        <div className="px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-500 text-sm">
              <strong>Disclaimer:</strong> The information provided in our Health Library is for educational 
              purposes only and should not be used as a substitute for professional medical advice, diagnosis, 
              or treatment. Always seek the advice of your physician or other qualified health provider with 
              any questions you may have regarding a medical condition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
