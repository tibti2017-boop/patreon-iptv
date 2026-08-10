import React, { useState } from 'react';
import { X, BookOpen, Search, Clock, ArrowRight, ChevronLeft, MessageCircle, Zap, Tag, Share2, CheckCircle2, Copy, Check } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogPosts';
import { handlePosterImageError } from '../utils/imageUtils';

export { BLOG_POSTS, type BlogPost };

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenOrder: () => void;
  onOpenTrial: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({
  isOpen,
  onClose,
  onOpenOrder,
  onOpenTrial,
}) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  if (!isOpen) return null;

  const categories = ['All', 'Setup Guides', 'Best Apps', 'Troubleshooting', 'Sports & Streaming', 'Guides & Tutorials', 'IPTV News'];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesQuery = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl text-zinc-100 my-6 max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-zinc-800/80 bg-zinc-900/60 shrink-0">
          <div className="flex items-center gap-3">
            {selectedPost ? (
              <button
                onClick={() => setSelectedPost(null)}
                className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-bold"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back to Articles</span>
              </button>
            ) : (
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    PATREON IPTV Blog & Guides
                  </h2>
                  <p className="text-xs text-zinc-400">Tutorials, setup guides, app reviews & sports streaming news</p>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6 flex-1">
          {selectedPost ? (
            /* Article Detailed View */
            <article className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
              {/* Meta Badges */}
              <div className="flex flex-wrap items-center gap-2.5 text-xs">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-extrabold uppercase tracking-wider">
                  {selectedPost.category}
                </span>
                <span className="text-zinc-400 flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedPost.readTime}
                </span>
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-400 font-medium">{selectedPost.date}</span>
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-400 font-medium">By {selectedPost.author}</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                {selectedPost.title}
              </h1>

              {/* Hero Image */}
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-xl max-h-[320px]">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => handlePosterImageError(e, selectedPost.title)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
              </div>

              {/* Content Paragraphs */}
              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                {selectedPost.content.map((paragraph, idx) => (
                  <p key={idx} className="bg-zinc-900/40 p-4 rounded-xl border border-zinc-800/60">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-2">
                <Tag className="w-4 h-4 text-zinc-500 mr-1" />
                {selectedPost.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-semibold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Article Call to Action Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/60 via-zinc-900 to-blue-950/60 border border-cyan-500/30 space-y-4 shadow-xl text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="text-lg font-black text-white">Ready for 25,000+ 4K Channels?</h4>
                  <p className="text-xs text-zinc-300">Test PATREON IPTV for 24 hours risk-free with zero commitment.</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenTrial();
                    }}
                    className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-amber-400 font-bold text-xs uppercase"
                  >
                    Free 24H Trial
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenOrder();
                    }}
                    className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20"
                  >
                    Get Subscription
                  </button>
                </div>
              </div>
            </article>
          ) : (
            /* Articles List & Grid View */
            <div className="space-y-6">
              {/* Search & Category Filter Header */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-zinc-800/80">
                {/* Search Bar */}
                <div className="relative w-full md:w-80">
                  <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search tutorials, apps, buffering fix..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                {/* Category Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 text-xs">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all ${
                        selectedCategory === cat
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                          : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid of Posts */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {filteredPosts.map(post => (
                    <div
                      key={post.id}
                      onClick={() => setSelectedPost(post)}
                      className="group cursor-pointer rounded-2xl bg-zinc-900/80 border border-zinc-800/80 hover:border-cyan-500/50 hover:bg-zinc-900 p-4 transition-all duration-300 flex flex-col justify-between shadow-lg"
                    >
                      <div className="space-y-3">
                        {/* Thumbnail */}
                        <div className="relative h-44 rounded-xl overflow-hidden border border-zinc-800">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                            onError={(e) => handlePosterImageError(e, post.title)}
                          />
                          <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-zinc-950/80 backdrop-blur-md border border-zinc-700/80 text-[10px] font-extrabold uppercase text-cyan-400">
                            {post.category}
                          </div>
                        </div>

                        {/* Title & Read Time */}
                        <div>
                          <div className="flex items-center gap-2 text-[11px] text-zinc-400 mb-1.5 font-medium">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1 text-zinc-400">
                              <Clock className="w-3 h-3 text-cyan-400" />
                              {post.readTime}
                            </span>
                          </div>
                          <h3 className="text-base font-black text-white group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
                            {post.title}
                          </h3>
                        </div>

                        {/* Excerpt */}
                        <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Read More Footer */}
                      <div className="pt-4 mt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-bold text-cyan-400 group-hover:text-cyan-300">
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 space-y-3 bg-zinc-900/40 rounded-2xl border border-zinc-800">
                  <BookOpen className="w-8 h-8 text-zinc-600 mx-auto" />
                  <p className="text-sm font-bold text-zinc-400">No blog articles match your search criteria.</p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                    }}
                    className="text-xs text-cyan-400 underline font-semibold"
                  >
                    Clear search filters
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-zinc-800/80 bg-zinc-900/60 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-zinc-400 flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Official PATREON IPTV Knowledge Base & Guides</span>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenTrial();
              }}
              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-amber-400 font-bold text-xs uppercase"
            >
              24H Free Trial
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenOrder();
              }}
              className="w-full sm:w-auto px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-md"
            >
              Order Subscription
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
