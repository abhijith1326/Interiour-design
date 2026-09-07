import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

export default function Testimonials() {
  const [activeDot, setActiveDot] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Space Design understood exactly what we wanted and transformed our home into something we never imagined. The design is beautiful, practical and completely us.",
      role: "Residential Client",
      rating: 5
    },
    {
      id: 2,
      quote: "The attention to detail was excellent. From the initial design to the final installation, the entire process was handled professionally.",
      role: "Homeowner",
      rating: 5
    },
    {
      id: 3,
      quote: "We wanted a modern interior without losing the warmth of our home. Space Design delivered exactly that.",
      role: "3 BHK Homeowner",
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
            <p className="testimonials-subheading">
              Real experiences from people who trusted Space Design with their spaces.
            </p>
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
        <div className="testimonials-grid-3">
          {testimonials.map((item, idx) => (
            <div 
              key={item.id} 
              className={`testimonial-card-lux ${activeDot === idx ? 'featured' : ''}`}
              onClick={() => setActiveDot(idx)}
            >
              <div className="quote-mark">
                <Quote size={28} />
              </div>

              <p className="testimonial-text">"{item.quote}"</p>

              <div className="testimonial-author-row">
                <div className="author-info">
                  <span className="author-role-title">— {item.role}</span>
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
