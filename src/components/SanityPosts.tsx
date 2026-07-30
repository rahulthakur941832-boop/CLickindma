import React, { useEffect, useState } from 'react';
import { Calendar, ArrowRight, BookOpen, Sparkles, RefreshCw } from 'lucide-react';
import { client, urlFor } from '../sanity/client';
import { SanityPost } from '../types';

interface SanityPostsProps {
  onReadMoreClick?: (post: SanityPost) => void;
}

const FALLBACK_POSTS: SanityPost[] = [
  {
    _id: 'sample-1',
    title: 'How Modern Lead Automation Is Transforming Local Business Lead Generation in 2026',
    publishedAt: '2026-07-20T10:00:00Z',
    excerpt: 'Discover how automated lead scoring, CRM tracking, and instant WhatsApp workflows double sales conversion rates for digital agencies.',
    mainImage: {
      _type: 'image',
      asset: { _ref: 'image-sample-1' }
    }
  },
  {
    _id: 'sample-2',
    title: 'Top 7 High-Converting SEO Strategies for Indian E-Commerce Brands',
    publishedAt: '2026-07-15T08:30:00Z',
    excerpt: 'Step-by-step roadmap to ranking #1 on Google Local Pack and Google Search using schema markup and strategic content optimization.',
    mainImage: {
      _type: 'image',
      asset: { _ref: 'image-sample-2' }
    }
  },
  {
    _id: 'sample-3',
    title: 'Meta Ads vs Google PPC: Where Should You Spend Your Marketing Budget?',
    publishedAt: '2026-07-10T14:15:00Z',
    excerpt: 'A comprehensive ROAS breakdown comparing targeted Meta retargeting ads against high-intent Google search traffic.',
    mainImage: {
      _type: 'image',
      asset: { _ref: 'image-sample-3' }
    }
  }
];

export const SanityPosts: React.FC<SanityPostsProps> = ({ onReadMoreClick }) => {
  const [posts, setPosts] = useState<SanityPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isCmsConnected, setIsCmsConnected] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchPosts() {
      try {
        setLoading(true);
        // GROQ Query specified by prompt
        const query = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          publishedAt,
          mainImage,
          excerpt
        }`;

        const data = await client.fetch(query);
        if (isMounted) {
          if (data && Array.isArray(data) && data.length > 0) {
            setPosts(data);
            setIsCmsConnected(true);
          } else {
            // If dataset has no posts yet, fallback to high-quality sample posts
            setPosts(FALLBACK_POSTS);
            setIsCmsConnected(true);
          }
        }
      } catch (err) {
        console.warn('Sanity CMS fetch error, using fallback post data:', err);
        if (isMounted) {
          setPosts(FALLBACK_POSTS);
          setIsCmsConnected(false);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Recently Published';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch {
      return 'Recently Published';
    }
  };

  const getImageUrl = (post: SanityPost) => {
    if (post.mainImage) {
      try {
        return urlFor(post.mainImage).width(800).height(500).url();
      } catch {
        // Ignore fallback image error
      }
    }
    // High quality tech/marketing unsplash placeholder
    if (post._id === 'sample-1') return 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80';
    if (post._id === 'sample-2') return 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80';
    return 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80';
  };

  return (
    <section className="py-20 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-100/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-slate-200/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 font-bold text-xs tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Sanity Headless CMS</span>
              {isCmsConnected && (
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 ml-1 animate-pulse" title="Connected to Sanity Studio" />
              )}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Latest Insights & <span className="text-emerald-600">Growth Guides</span>
            </h2>
            <p className="text-slate-600 max-w-2xl text-sm sm:text-base font-medium">
              Explore marketing strategies, lead automation breakdowns, and SEO tutorials powered dynamically by Sanity CMS.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.sanity.io/manage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 hover:border-emerald-400 text-slate-700 hover:text-emerald-900 font-bold text-xs transition-all shadow-sm"
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
              <span>Sanity Studio Dashboard</span>
            </a>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex items-center justify-center py-16 gap-3 text-slate-500">
            <RefreshCw className="w-6 h-6 animate-spin text-emerald-600" />
            <span className="font-semibold text-sm">Fetching latest posts from Sanity...</span>
          </div>
        ) : (
          /* Posts Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const imageUrl = getImageUrl(post);
              return (
                <article
                  key={post._id}
                  className="group bg-white rounded-2xl border border-slate-200 hover:border-emerald-400 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Post Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        src={imageUrl}
                        alt={post.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />
                      
                      {/* Date Badge */}
                      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs text-slate-900 font-bold border border-slate-200 flex items-center gap-1.5 shadow-sm">
                        <Calendar className="w-3 h-3 text-emerald-600" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-slate-600 font-medium text-xs sm:text-sm line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Post Footer Action */}
                  <div className="p-6 pt-0 mt-auto">
                    <button
                      onClick={() => onReadMoreClick && onReadMoreClick(post)}
                      className="inline-flex items-center gap-2 text-xs font-black text-emerald-700 hover:text-emerald-900 transition-colors group/btn"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
