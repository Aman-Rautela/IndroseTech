'use client';

import { motion } from 'framer-motion';
import { Network, Briefcase, HeartPulse, Brain } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

export function SolutionsSection() {
  const solutions = [
    {
      icon: <Network className="h-12 w-12" />,
      title: "Social Media",
      description: "Revolutionizing your growth with AI-powered, automated social media management",
      features: ["Social Media Manager", "Hyper Local Interest Communities"],
      link: "/solutions/banking"
    },
    {
      icon: <Briefcase className="h-12 w-12" />,
      title: "Commute/Logistics",
      description: "Streamlining your commute with cutting-edge software solutions.",
      features: ["Metro/Bus ticket Solutions"],
      link: "/solutions/insurance"
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: "AI",
      description: "Empowring your future with innovative AI software solutions.",
      features: ["Chat Support Agent for Businesses", "Paralegal (Doc Review)", "Courtroom Scribe", "Technical Documentation(API/SDK)"
        , "Call Center AVI Voice Agent", "Online Test Drills/Exams preparations"
      ],
      link: "/solutions/government"
    },
    {
      icon: <HeartPulse className="h-12 w-12" />,
      title: "Healthcare",
      description: "Improve healthcare delivery with digital solutions",
      features: ["Medical Scribe", "Medical Essentials Delivery For Providers"],
      link: "/solutions/healthcare"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Business Technology Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how our digital transformation platform can transform your industry
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-primary mb-6">{solution.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <ul className="space-y-3">
                {solution.features.map((feature) => (
                  <li key={feature} className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={solution.link}>
                <Button variant="ghost" className="mt-8 w-full hover:text-saffron">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}