import React from 'react';
import { BookOpen, Clock, ArrowRight, Sparkles, HelpCircle, Layers } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogPosts';

interface BlogSectionProps {
  onOpenBlog: () => void;
  onSelectPost?: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenBlog }) => {
  return (
    <section id="blog" className="py-20 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-black uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>30 EXPERT GUIDES & ARTICLES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Latest IPTV <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">Tutorials & Insights</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Learn how to setup IPTV Smarters Pro, optimize Firestick streaming speeds, fix buffering issues, TiviMate settings, and watch live 4K sports.
            </p>
          </div>

          <button
            onClick={onOpenBlog}
            className="self-start md:self-end px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-cyan-400 font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-2 group shrink-0 shadow-lg"
          >
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>EXPLORE ALL 30 ARTICLES</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Featured Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.slice(0, 6).map((post) => (
            <div
              key={post.id}
              onClick={onOpenBlog}
              className="group cursor-pointer rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-cyan-500/40 hover:bg-zinc-900/90 p-5 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-4">
                {/* Image */}
                <div className="relative h-48 rounded-xl overflow-hidden border border-zinc-800">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src = '/sports/champions-league.jpg';
                    }}
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-zinc-950/85 backdrop-blur-md border border-zinc-700/80 text-[10px] font-black uppercase text-cyan-400">
                    {post.category}
                  </div>
                </div>

                {/* Article Info */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-zinc-400 font-medium">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-cyan-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-white group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read Action Footer */}
              <div className="pt-4 mt-5 border-t border-zinc-800/60 flex items-center justify-between text-xs font-extrabold text-cyan-400 group-hover:text-cyan-300">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
