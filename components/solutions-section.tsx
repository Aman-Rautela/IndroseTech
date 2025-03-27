'use client';

import { motion } from 'framer-motion';
import { Building2, Briefcase, HeartPulse, Ban as Bank } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

export function SolutionsSection() {
  const solutions = [
    {
      icon: <Bank className="h-12 w-12" />,
      title: "Banking & Finance",
      description: "Transform banking operations with intelligent automation and digital workflows",
      features: ["Account Opening", "Lending", "Trade Finance", "Compliance"],
      link: "/solutions/banking"
    },
    {
      icon: <Briefcase className="h-12 w-12" />,
      title: "Insurance",
      description: "Streamline insurance processes and enhance customer experience",
      features: ["Claims Processing", "Policy Administration", "Underwriting", "Customer Service"],
      link: "/solutions/insurance"
    },
    {
      icon: <Building2 className="h-12 w-12" />,
      title: "Government",
      description: "Modernize government services with digital transformation solutions",
      features: ["Citizen Services", "Records Management", "Compliance", "Process Automation"],
      link: "/solutions/government"
    },
    {
      icon: <HeartPulse className="h-12 w-12" />,
      title: "Healthcare",
      description: "Improve healthcare delivery with digital solutions",
      features: ["Patient Records", "Claims Management", "Compliance", "Care Coordination"],
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
          <h2 className="text-4xl font-bold mb-6">Industry Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our digital transformation platform can revolutionize your industry
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <Button variant="ghost" className="mt-6 w-full hover:text-saffron">
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