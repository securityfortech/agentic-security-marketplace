
import React from 'react';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Benefits from '@/components/landing/Benefits';
import CTA from '@/components/landing/CTA';
import Footer from '@/components/landing/Footer';
import LandingHeader from '@/components/landing/LandingHeader';
import HomepageHeader from '@/components/character-homepage/HomepageHeader';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <HomepageHeader />
      
      <div className="bg-gradient-to-br from-background to-card border-b border-border">
        <div className="container mx-auto px-4 py-6 md:py-8 max-w-6xl">
          <Hero />
        </div>
      </div>
      
      <Features />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
