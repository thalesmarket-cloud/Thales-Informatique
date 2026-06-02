import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Clock, Calendar, ArrowRight, Heart, MessageSquare } from "lucide-react";
import { BLOG_POSTS } from "../data";

interface BlogProps {
  onDemoClick: (solutionId?: string) => void;
  limit?: number;
}

export default function Blog({ onDemoClick, limit }: BlogProps) {
  const displayedPosts = limit ? BLOG_POSTS.slice(0, limit) : BLOG_POSTS;

  return (
    <section id="blog" className="relative py-24 bg-white text-[#001B3A] overflow-hidden border-b border-slate-100">
      {/* Decorative vectors */}
      <div className="absolute top-0 left-1/4 h-80 w-80 bg-[#007BFF]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#003B7A]/5 px-3.5 py-1.5 text-xs font-bold tracking-widest text-[#003B7A] uppercase">
            NOTRE ACTUALITÉ ERP & PILOTAGE
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#001B3A] sm:text-4xl">
            Le Blog Décisionnel de Thalès Informatique
          </h2>
          <p className="text-slate-600 font-medium text-sm leading-relaxed">
            Retrouvez les conseils juridiques, réglementaires, technologiques et logistiques 
            rédigés par nos ingénieurs consultants pour réussir votre transition au Maroc.
          </p>
        </div>

        {/* Articles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-grid">
          {displayedPosts.map((post) => (
            <motion.article
              key={post.id}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#007BFF]/20 transition-all duration-300 group"
            >
              {/* Cover cover picture with gradient fade-over */}
              <div className="relative h-48 overflow-hidden">
                <Link to={`/blog/${post.id}`} className="block h-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent z-10 opacity-75" />
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 z-20 rounded bg-[#003B7A] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-widest text-white shadow-sm">
                    {post.category}
                  </span>
                </Link>
              </div>

              {/* Core Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-[10px] text-slate-400 mb-3 font-mono font-bold uppercase">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-[#007BFF]" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-[#007BFF]" /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-[#001B3A] group-hover:text-[#007BFF] transition-colors leading-snug mb-3">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed font-semibold mb-5 line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-xs font-bold text-[#007BFF] hover:text-[#003B7A] transition-all flex items-center gap-1 group/btn cursor-pointer"
                  >
                    <span>Lire la suite</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </Link>

                  <div className="flex gap-2.5 text-slate-300">
                    <Heart className="h-3.5 w-3.5 hover:text-red-500 transition-colors cursor-pointer" />
                    <MessageSquare className="h-3.5 w-3.5 hover:text-[#007BFF] transition-colors cursor-pointer" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {limit && BLOG_POSTS.length > limit && (
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#003B7A] px-8 text-xs font-bold text-white shadow-lg shadow-blue-900/10 hover:bg-[#007BFF] hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <span>Voir tous nos articles</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
