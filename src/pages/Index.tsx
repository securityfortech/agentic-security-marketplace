
import React from 'react';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Benefits from '@/components/landing/Benefits';
import CTA from '@/components/landing/CTA';
import Footer from '@/components/landing/Footer';
import LandingHeader from '@/components/landing/LandingHeader';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-br from-background to-card border-b border-border">
        <div className="container mx-auto px-4 py-6 md:py-8 max-w-6xl">
          <LandingHeader />
          <Hero />
        </div>
      </header>
      
      <Features />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
