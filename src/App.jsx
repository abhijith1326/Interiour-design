import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Projects from './components/Projects';
import DesignStyles from './components/DesignStyles';
import StatsSection from './components/StatsSection';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import SeoSection from './components/SeoSection';
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
        
        <WhyUs />

        <Process />

        <Projects 
          onOpenLightbox={handleOpenLightbox}
          onViewAllProjects={() => handleOpenQuote("Discuss Your Project Vision")}
        />
        
        <DesignStyles onOpenQuote={handleOpenQuote} />

        <StatsSection />

        <Testimonials />
        
        <Blog 
          onSelectArticle={(article) => setActiveArticle(article)}
          onViewAllBlogs={() => handleOpenQuote("Design Advisory Consultation")}
        />
        
        <SeoSection />

        <CtaBanner 
          onStartProject={() => handleOpenQuote("Let's Talk About Your Space")}
          onSchedule={(title) => handleOpenQuote(title || "Book a Consultation")} 
        />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

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
        onOpenQuote={handleOpenQuote}
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

