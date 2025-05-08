'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search as SearchIcon, FileText, Book, Video, Newspaper, X, Clock, Trash2 } from 'lucide-react';

// Mock database of searchable items
const searchDatabase = [
  {
    type: 'Product',
    icon: <FileText className="h-5 w-5" />,
    title: 'AI Business Automation',
    description: 'Transform operations with AI-powered process automation.',
    link: '/products#ai-automation',
    keywords: ['AI', 'automation', 'business', 'process']
  },
  {
    type: 'Solution',
    icon: <Book className="h-5 w-5" />,
    title: 'Enterprise AI Solutions',
    description: 'Comprehensive AI solutions for large-scale businesses.',
    link: '/solutions#enterprise-ai',
    keywords: ['enterprise', 'AI', 'solutions', 'business']
  },
  {
    type: 'Webinar',
    icon: <Video className="h-5 w-5" />,
    title: 'AI in Modern Business',
    description: 'Learn how AI is transforming contemporary business practices.',
    link: '/resources#webinars',
    keywords: ['webinar', 'AI', 'business', 'transformation']
  },
  {
    type: 'Blog',
    icon: <Newspaper className="h-5 w-5" />,
    title: 'Implementing AI Strategically',
    description: 'Best practices for AI implementation in business contexts.',
    link: '/resources#blog',
    keywords: ['AI', 'strategy', 'implementation', 'business']
  }
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [filteredResults, setFilteredResults] = useState<any[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Load search history from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Save search history to localStorage
  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  // Handle clicks outside the search box
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Generate suggestions based on input
  const generateSuggestions = (query: string) => {
    if (query.length === 0) {
      // Show recent searches when input is empty
      const recentSearches = searchHistory.slice(0, 5).map(term => ({
        type: 'history',
        title: term,
        icon: <Clock className="h-5 w-5" />
      }));
      setSuggestions(recentSearches);
      return;
    }

    // Find matches in search database
    const dbMatches = searchDatabase.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.keywords.some(keyword => 
        keyword.toLowerCase().includes(query.toLowerCase())
      )
    ).slice(0, 5);

    // Find matches in search history
    const historyMatches = searchHistory
      .filter(term => term.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 5)
      .map(term => ({
        type: 'history',
        title: term,
        icon: <Clock className="h-5 w-5" />
      }));

    setSuggestions([...dbMatches, ...historyMatches]);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() === '') return;

    setIsSearching(true);
    
    // Add to search history if not already there
    if (!searchHistory.includes(searchQuery)) {
      setSearchHistory(prev => [searchQuery, ...prev].slice(0, 10));
    }

    // Filter results based on search query
    const results = searchDatabase.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.keywords.some(keyword => 
        keyword.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

    setFilteredResults(results);
    setShowSuggestions(false);
    
    // Simulated search delay
    setTimeout(() => setIsSearching(false), 500);
  };

  const handleSuggestionClick = (suggestion: any) => {
    if (suggestion.type === 'history') {
      setSearchQuery(suggestion.title);
      // Trigger search when clicking a history item
      const results = searchDatabase.filter(item => 
        item.title.toLowerCase().includes(suggestion.title.toLowerCase()) ||
        item.description.toLowerCase().includes(suggestion.title.toLowerCase()) ||
        item.keywords.some(keyword => 
          keyword.toLowerCase().includes(suggestion.title.toLowerCase())
        )
      );
      setFilteredResults(results);
    } else {
      // For database items, navigate directly
      window.location.href = suggestion.link;
    }
    setShowSuggestions(false);
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  const removeHistoryItem = (item: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSearchHistory(prev => prev.filter(term => term !== item));
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-white min-h-screen">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-6">Search AI Business Solutions</h1>
              <p className="text-xl text-gray-600">
                Discover AI-powered products, enterprise solutions, and business resources.
              </p>
            </div>

            <div className="relative mb-12" ref={searchRef}>
              <form onSubmit={handleSearch}>
                <div className="flex gap-4 relative">
                  <Input
                    type="search"
                    placeholder="Search AI solutions, business cases, or resources..."
                    className="text-lg py-6"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      generateSuggestions(e.target.value);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                  />
                  <Button type="submit" className="btn-saffron" size="lg" disabled={isSearching}>
                    {isSearching ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <SearchIcon className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </form>

              {/* Suggestions dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-200 max-h-96 overflow-y-auto"
                >
                  <ul className="py-2">
                    {suggestions.map((suggestion, index) => (
                      <li key={index}>
                        <button
                          type="button"
                          className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center gap-3"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          <div className="text-saffron">
                            {suggestion.icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{suggestion.title}</div>
                            {suggestion.description && (
                              <div className="text-sm text-gray-500">{suggestion.description}</div>
                            )}
                          </div>
                          {suggestion.type === 'history' && (
                            <button
                              type="button"
                              className="text-gray-400 hover:text-gray-600"
                              onClick={(e) => removeHistoryItem(suggestion.title, e)}
                            >
                              <X className="h-4 w-4" />
                            </button>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                  {searchHistory.length > 0 && (
                    <div className="border-t border-gray-200 px-4 py-2 flex justify-between items-center">
                      <span className="text-sm text-gray-500">Recent searches</span>
                      <button
                        type="button"
                        className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
                        onClick={clearSearchHistory}
                      >
                        <Trash2 className="h-4 w-4" /> Clear
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </div>

            {/* Search results */}
            <div className="space-y-6">
              {(filteredResults.length > 0 ? filteredResults : searchDatabase).map((result) => (
                <motion.div
                  key={result.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="text-saffron mr-4">{result.icon}</div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{result.type}</div>
                      <h3 className="text-xl font-semibold mb-2">
                        <a href={result.link} className="hover:text-saffron transition-colors">
                          {result.title}
                        </a>
                      </h3>
                      <p className="text-gray-600">{result.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}