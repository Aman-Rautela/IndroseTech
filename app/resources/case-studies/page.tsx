'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FileText, ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Digital Transformation in Banking",
      description: "How a leading bank transformed their operations with Newgen's digital solutions",
      industry: "Banking",
      results: [
        "50% reduction in account opening time",
        "90% improvement in customer satisfaction",
        "35% increase in operational efficiency"
      ]
    },
    {
      title: "Insurance Claims Automation",
      description: "Streamlining claims processing for better customer experience",
      industry: "Insurance",
      results: [
        "70% faster claims processing",
        "40% reduction in operational costs",
        "95% customer satisfaction rate"
      ]
    },
    {
      title: "Government Records Digitization",
      description: "Modernizing record management for a state government",
      industry: "Government",
      results: [
        "1M+ records digitized",
        "60% reduction in retrieval time",
        "100% compliance achievement"
      ]
    },
    {
      title: "Healthcare Provider Transformation",
      description: "Improving patient care through digital workflows",
      industry: "Healthcare",
      results: [
        "45% reduction in wait times",
        "80% paperless operations",
        "30% increase in patient satisfaction"
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
                <FileText className="h-16 w-16" />
              </div>
              <h1 className="text-5xl font-bold mb-6">Case Studies</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore how organizations across industries have achieved digital transformation success with Newgen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-xl"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-3">{study.title}</h3>
                    <p className="text-gray-600 mb-4">{study.description}</p>
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-6">
                      {study.industry}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold">Key Results:</h4>
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {result}
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
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
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