'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BrainCircuit, ArrowRight, Bot, BarChart, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function AIBusinessPage() {
  const features = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Intelligent Automation",
      description: "Streamline operations with AI-powered process automation"
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Predictive Analytics",
      description: "Anticipate market trends and customer needs with data-driven insights"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "AI Security",
      description: "Protect your business with intelligent threat detection systems"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Customer Intelligence",
      description: "Enhance engagement with AI-driven personalization"
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <div className="text-saffron flex justify-center mb-6">
                <BrainCircuit className="h-16 w-16" />
              </div>
              <h1 className="text-5xl font-bold mb-6">AI for Business Transformation</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leverage cutting-edge artificial intelligence to drive innovation, efficiency and competitive advantage across your organization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-xl"
                >
                  <div className="text-saffron mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/contact">
                <Button className="btn-saffron text-lg px-8 py-6">
                  Transform Your Business <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}