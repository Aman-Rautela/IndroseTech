'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

export default function WhitepapersPage() {
  const whitepapers = [
    {
      title: "The Future of Digital Banking",
      description: "Explore emerging trends and technologies shaping the future of banking",
      topics: [
        "Open Banking",
        "AI in Financial Services",
        "Digital-Only Banks",
        "Blockchain Integration"
      ]
    },
    {
      title: "Intelligent Process Automation Guide",
      description: "Comprehensive guide to implementing intelligent automation",
      topics: [
        "RPA vs IPA",
        "AI/ML Integration",
        "Process Mining",
        "Implementation Strategy"
      ]
    },
    {
      title: "Digital Transformation Framework",
      description: "Strategic framework for enterprise digital transformation",
      topics: [
        "Assessment Methods",
        "Technology Selection",
        "Change Management",
        "ROI Measurement"
      ]
    },
    {
      title: "Content Services Evolution",
      description: "Modern approaches to enterprise content management",
      topics: [
        "Cloud Integration",
        "AI-Powered Analytics",
        "Compliance Management",
        "User Experience"
      ]
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
                <BookOpen className="h-16 w-16" />
              </div>
              <h1 className="text-5xl font-bold mb-6">Whitepapers</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                In-depth research and insights on digital transformation trends and strategies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {whitepapers.map((paper, index) => (
                <motion.div
                  key={paper.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-xl"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-3">{paper.title}</h3>
                    <p className="text-gray-600 mb-6">{paper.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold">Key Topics:</h4>
                    {paper.topics.map((topic, i) => (
                      <div key={i} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {topic}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button className="flex-1" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                    <Link href="/contact" className="flex-1">
                      <Button className="w-full btn-saffron">
                        Request Full Access <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}