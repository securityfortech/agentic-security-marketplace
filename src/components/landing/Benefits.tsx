
import React from 'react';
import { CheckCircle } from 'lucide-react';

const benefitsData = [
  {
    title: "24/7 Continuous Monitoring",
    description: "Our agents never sleep, providing round-the-clock protection against emerging threats.",
    color: "blue"
  },
  {
    title: "Rapid Deployment",
    description: "Deploy specialized security agents in minutes, not weeks or months.",
    color: "green"
  },
  {
    title: "Scalable Security",
    description: "Easily scale your security operations up or down based on your evolving needs.",
    color: "purple"
  },
  {
    title: "Cost-Effective",
    description: "Reduce the cost of security operations while improving your overall security posture.",
    color: "orange"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Agentic Security</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Our AI-powered agents provide significant advantages over traditional security solutions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefitsData.map((benefit, index) => (
            <BenefitItem 
              key={index}
              title={benefit.title} 
              description={benefit.description} 
              color={benefit.color} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface BenefitItemProps {
  title: string;
  description: string;
  color: string;
}

const BenefitItem = ({ title, description, color }: BenefitItemProps) => {
  return (
    <div className="flex items-start gap-4">
      <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-${color}-100 flex items-center justify-center`}>
        <CheckCircle className={`text-${color}-600 w-6 h-6`} />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default Benefits;
