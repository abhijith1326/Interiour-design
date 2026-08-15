import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

export default function Testimonials() {
  const [activeDot, setActiveDot] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Intria transformed our house into a dream home. Their attention to detail, architectural taste, and material selection is exceptional!",
      name: "Ananya K.",
      role: "Homeowner, Villa 42",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      rating: 5
    },
    {
      id: 2,
      quote: "A professional team that thoroughly understands complex commercial requirements and delivers beyond expectations on time.",
      name: "Rajeev M.",
      role: "CEO, TechPark Innovations",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      rating: 5
    },
    {
      id: 3,
      quote: "They designed our executive office space beautifully, boosting productivity and receiving compliments from every visiting client.",
      name: "Neha R.",
      role: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      rating: 5
    },
    {
      id: 4,
      quote: "From initial moodboards to final lighting execution, working with Intria was an absolute joy. Highly recommended!",
      name: "Vikram Sethi",
      role: "Penthouse Owner",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveDot((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveDot((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <div>
            <div className="section-tag">
              <span>TESTIMONIALS</span>
            </div>
            <h2 className="section-title-dark">What Our Clients Say</h2>
          </div>

          <div className="testimonial-arrow-controls">
            <button className="testimonial-arrow-btn" onClick={handlePrev} aria-label="Previous testimonial">
              <ChevronLeft size={18} />
            </button>
            <button className="testimonial-arrow-btn" onClick={handleNext} aria-label="Next testimonial">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Dynamic Cards View */}
        <div className="testimonials-grid">
          {testimonials.map((item, idx) => (
            <div 
              key={item.id} 
              className={`testimonial-card ${activeDot === idx ? 'featured' : ''}`}
              onClick={() => setActiveDot(idx)}
            >
              <div className="quote-mark">
                <Quote size={32} />
              </div>

              <p className="testimonial-text">{item.quote}</p>

              <div className="testimonial-author-row">
                <div className="author-info">
                  <img src={item.avatar} alt={item.name} className="author-avatar" />
                  <div className="author-details">
                    <h4 className="author-name">{item.name}</h4>
                    <span className="author-role">{item.role}</span>
                  </div>
                </div>

                <div className="stars-row">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#c69c52" color="#c69c52" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Pagination */}
        <div className="testimonial-dots">
          {testimonials.map((_, dotIdx) => (
            <button
              key={dotIdx}
              className={`dot-btn ${activeDot === dotIdx ? 'active' : ''}`}
              onClick={() => setActiveDot(dotIdx)}
              aria-label={`Slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
