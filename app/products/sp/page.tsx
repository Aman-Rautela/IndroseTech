'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PenTool, ArrowRight, FileText, Layers, Share2, BarChart } from 'lucide-react';
import Link from 'next/link';

export default function ScribProductPage() {
  const features = [
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Smart Authoring",
      description: "AI-powered tools to help you create content faster and smarter"
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Structured Content",
      description: "Organize your documentation with modular, reusable components"
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Seamless Collaboration",
      description: "Real-time co-authoring and review workflows for teams"
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Content Analytics",
      description: "Measure engagement and optimize your documentation strategy"
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
                <FileText className="h-16 w-16" />
              </div>
              <h1 className="text-5xl font-bold mb-6">Scrib Product</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform how organizations create, manage, and deliver technical content at scale.
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
                  Enhance Your Content <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}