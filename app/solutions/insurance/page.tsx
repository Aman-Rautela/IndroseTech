'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Briefcase, ArrowRight, FileCheck, Users, ClipboardCheck, BarChart } from 'lucide-react';
import Link from 'next/link';

export default function InsurancePage() {
  const features = [
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Claims Processing",
      description: "Automate claims processing for faster resolution and better customer experience"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Policy Administration",
      description: "Streamline policy lifecycle management with digital workflows"
    },
    {
      icon: <ClipboardCheck className="h-8 w-8" />,
      title: "Underwriting",
      description: "Risk assessment and underwriting automation for better decisions"
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Agent Portal",
      description: "Digital platform for agent enablement and productivity"
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
                <Briefcase className="h-16 w-16" />
              </div>
              <h1 className="text-5xl font-bold mb-6">Insurance Solutions</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modernize your insurance operations with our comprehensive digital transformation solutions.
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
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}