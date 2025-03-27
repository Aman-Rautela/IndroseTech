'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Database, ArrowRight, FileText, Shield, Search, Share2 } from 'lucide-react';
import Link from 'next/link';

export default function CSPPage() {
  const features = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Document Management",
      description: "Centralized repository for all your enterprise content with version control"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Records Management",
      description: "Ensure compliance with automated records lifecycle management"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Content Analytics",
      description: "Extract insights from your content with advanced analytics"
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Secure Collaboration",
      description: "Enable team collaboration with enterprise-grade security"
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
                <Database className="h-16 w-16" />
              </div>
              <h1 className="text-5xl font-bold mb-6">Content Services Platform</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Manage and secure enterprise content with our comprehensive platform designed for the digital age.
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
                  Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}