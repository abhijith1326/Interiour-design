import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import LightboxModal from './components/LightboxModal';
import BlogModal from './components/BlogModal';
import AboutModal from './components/AboutModal';
import './index.css';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteTitle, setQuoteTitle] = useState("Request a Quote");
  const [activeLightboxItem, setActiveLightboxItem] = useState(null);
  const [lightboxItems, setLightboxItems] = useState([]);
  const [activeArticle, setActiveArticle] = useState(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handleOpenQuote = (title = "Request a Quote") => {
    setQuoteTitle(title);
    setIsQuoteOpen(true);
  };

  const handleOpenLightbox = (item, items) => {
    setActiveLightboxItem(item);
    setLightboxItems(items);
  };

  return (
    <div className="app-main">
      {/* Top Header Navigation */}
      <Navbar onOpenQuote={() => handleOpenQuote("Get a Custom Quote")} />

      {/* Main Page Sections */}
      <main>
        <Hero onExplore={() => handleOpenQuote("Schedule a Consultation")} />
        
        <About onOpenAboutModal={() => setIsAboutOpen(true)} />
        
        <Services 
          onSelectService={(service) => handleOpenQuote(`Inquire About ${service.title}`)}
          onViewAllServices={() => handleOpenQuote("Custom Service Consultation")}
        />
        
        <Projects 
          onOpenLightbox={handleOpenLightbox}
          onViewAllProjects={() => handleOpenQuote("Discuss Your Project Vision")}
        />
        
        <Process />
        
        <Testimonials />
        
        <Blog 
          onSelectArticle={(article) => setActiveArticle(article)}
          onViewAllBlogs={() => handleOpenQuote("Design Advisory Consultation")}
        />
        
        <CtaBanner onSchedule={() => handleOpenQuote("Schedule a Consultation")} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)}
        title={quoteTitle}
      />

      <LightboxModal
        activeItem={activeLightboxItem}
        items={lightboxItems}
        onClose={() => setActiveLightboxItem(null)}
        onNavigate={(item) => setActiveLightboxItem(item)}
      />

      <BlogModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onOpenQuote={handleOpenQuote}
      />
    </div>
  );
}
