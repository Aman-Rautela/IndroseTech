'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Brain, Cpu, Network, Zap } from 'lucide-react';
import { Button } from './ui/button';

export function AboutSection() {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Process Automation",
      description: "Streamline complex workflows with intelligent automation"
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Content Services",
      description: "Unified platform for content management and collaboration"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Customer Engagement",
      description: "Create seamless digital experiences for your customers"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Intelligence",
      description: "AI-powered insights for informed decision making"
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
          <h2 className="text-4xl font-bold mb-6">The ONE for Digital Transformation</h2>
          <p className="text-xl text-gray-600 mb-8">
            We simplify the most complex business processes by combining the power of process automation,
            content services, customer engagement, and intelligence. Continuous innovation runs deep in
            our product philosophy, helping us win over customers' hearts—every time they think digital.
          </p>
          <div className="flex justify-center">
            <Button className="text-lg px-8 py-6" variant="outline">
              Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
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
              Leading Provider of Unified Digital Transformation
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Globally, successful enterprises rely on Newgen's industry-recognized low code application
              platform to develop and deploy complex, content-driven, and customer-engaging business
              applications on the cloud. From onboarding to service requests, lending to underwriting,
              and for many more use cases across industries.
            </p>
            <div className="inline-flex items-center text-primary font-semibold">
              Newgen unlocks simple with speed and agility
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}