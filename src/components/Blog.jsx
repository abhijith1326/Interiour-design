import React, { useState } from 'react';
import { ArrowRight, Search, Tag } from 'lucide-react';
import './Blog.css';

export default function Blog({ onSelectArticle, onViewAllBlogs }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const articles = [
    {
      id: 1,
      category: 'DESIGN TIPS',
      title: 'How to Make Small Spaces Look Bigger',
      date: 'May 12, 2024',
      readTime: '5 min read',
      img: '/images/project_1.png',
      excerpt: 'Discover expert architectural tricks and furniture placement techniques to maximize space and natural light in compact rooms.'
    },
    {
      id: 2,
      category: 'INTERIOR TRENDS',
      title: 'Top Interior Design Trends in 2024',
      date: 'May 05, 2024',
      readTime: '4 min read',
      img: '/images/project_2.png',
      excerpt: 'Explore this year\'s defining aesthetics from warm organic curves and raw stone textures to rich ambient lighting palettes.'
    },
    {
      id: 3,
      category: 'HOME DECOR',
      title: 'Choosing the Right Colors for Your Home',
      date: 'Apr 28, 2024',
      readTime: '6 min read',
      img: '/images/about_img.png',
      excerpt: 'Learn how color psychology creates harmony, warmth, and sophistication in your living and dining areas.'
    },
    {
      id: 4,
      category: 'DESIGN TIPS',
      title: 'Lighting Ideas to Elevate Your Interiors',
      date: 'Apr 20, 2024',
      readTime: '4 min read',
      img: '/images/project_4.png',
      excerpt: 'Master layered lighting—combining architectural cove LED strips, statement chandeliers, and subtle accent fixtures.'
    }
  ];

  const categories = ['ALL', 'DESIGN TIPS', 'INTERIOR TRENDS', 'HOME DECOR'];

  const filteredArticles = articles.filter((item) => {
    const matchesCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
    const matchesQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">
        {/* Header */}
        <div className="blog-header">
          <div>
            <div className="section-tag">
              <span>LATEST INSIGHTS</span>
            </div>
            <h2 className="section-title-light">Design Tips & Ideas</h2>
          </div>

          <button className="btn-outline-dark" onClick={onViewAllBlogs}>
            <span>VIEW ALL BLOGS</span>
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Live Filter Controls */}
        <div className="blog-filter-bar">
          <div className="search-input-wrapper">
            <Search size={16} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search design articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="blog-search-input"
            />
          </div>

          <div className="blog-category-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                <Tag size={12} />
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Article Grid */}
        <div className="blog-grid">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((item) => (
              <article 
                key={item.id} 
                className="blog-card"
                onClick={() => onSelectArticle(item)}
              >
                <div className="blog-image-wrapper">
                  <img src={item.img} alt={item.title} className="blog-img" />
                  <span className="blog-category-badge">{item.category}</span>
                </div>

                <div className="blog-card-body">
                  <h3 className="blog-card-title">{item.title}</h3>
                  <p className="blog-card-excerpt">{item.excerpt}</p>
                  <div className="blog-meta">
                    <span>{item.date}</span>
                    <span className="meta-dot">•</span>
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="no-blogs-found">
              <p>No design articles match "{searchQuery}". Try a different keyword.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
