'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Network, Zap, Brain } from 'lucide-react';
import { Button } from './ui/button';

export function AboutSection() {
  const features = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Process Automation",
      description: "Boost productivity by automating complex operations"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Inovation",
      description: "Our solution leverages cutting-edge invovation to drive exceptional results."
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Technology Solutions",
      description: "Boost productivity with technology solutions tailored for complex business needs."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Artificial Intelligence",
      description: "AI-enhanced insights for strategic decision-making."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Empowering Your Digital Journey</h2>
          <p className="text-xl text-gray-600 mb-8">
            We streamline intricate business operations by leveraging Process Automation, 
            Technlogy Solutions and Artifical Intelligence. Our commitment to continious 
            invoation is at the core of our product philosophy, ensuring and consistently
            capture the hearts of our customers whenever they embrace digital solutions.
          </p>
          {/* <div className="flex justify-center">
            <Button className="text-lg px-8 py-6" variant="outline">
              Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div> */}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 p-12 rounded-2xl"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">
              Robust Force In Unified Digital Advancement
            </h3>
            <p className="text-lg text-gray-600 mb-8">
             Worldwide, leading enterprises trust Indorse's tehcnology solutions
             to develop and deploy intricate business processes. From onboarding 
             to servide requests, and for numerous industry apllications.
            </p>
            <div className="inline-flex items-center text-primary font-semibold">
              Indorse simplefies business processes with unmatched speed and agility
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}