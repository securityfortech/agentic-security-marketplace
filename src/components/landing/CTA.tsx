
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-t border-border">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to enhance your security team?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Sign up today and start deploying AI security agents to strengthen your defenses and respond to threats faster.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="font-medium rounded-full">
            <Link to="/signup">Get Started</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/marketplace">Explore Agents</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
