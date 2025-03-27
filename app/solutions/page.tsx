'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Ban as Bank, Building2, HeartPulse, Briefcase, Factory, Plane, ShoppingBag, GraduationCap } from 'lucide-react';

export default function SolutionsPage() {
  const industries = [
    {
      icon: <Bank className="h-12 w-12" />,
      title: "Banking & Financial Services",
      description: "Digital solutions for modern banking operations and customer service.",
      features: ["Digital Account Opening", "Loan Origination", "Trade Finance", "Regulatory Compliance"]
    },
    {
      icon: <Briefcase className="h-12 w-12" />,
      title: "Insurance",
      description: "End-to-end solutions for insurance processes and customer engagement.",
      features: ["Claims Processing", "Policy Administration", "Underwriting", "Agent Portal"]
    },
    {
      icon: <Building2 className="h-12 w-12" />,
      title: "Government",
      description: "Digital transformation solutions for efficient public services.",
      features: ["Citizen Services", "Records Management", "Grant Management", "Tax Processing"]
    },
    {
      icon: <HeartPulse className="h-12 w-12" />,
      title: "Healthcare",
      description: "Digital solutions for improved patient care and operations.",
      features: ["Patient Records", "Claims Management", "Care Coordination", "Compliance"]
    },
    {
      icon: <Factory className="h-12 w-12" />,
      title: "Manufacturing",
      description: "Streamline operations and enhance productivity.",
      features: ["Supply Chain Management", "Quality Control", "Asset Management", "Compliance"]
    },
    {
      icon: <Plane className="h-12 w-12" />,
      title: "Transportation & Logistics",
      description: "Optimize logistics and transportation operations.",
      features: ["Fleet Management", "Shipment Tracking", "Documentation", "Compliance"]
    },
    {
      icon: <ShoppingBag className="h-12 w-12" />,
      title: "Retail",
      description: "Transform retail operations and customer experience.",
      features: ["Inventory Management", "Customer Service", "Order Processing", "Analytics"]
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "Education",
      description: "Digital solutions for modern educational institutions.",
      features: ["Student Management", "Course Management", "Documentation", "Compliance"]
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
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">Industry Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our digital transformation platform can revolutionize your industry with tailored solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="text-saffron mb-6">{industry.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{industry.title}</h3>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                <ul className="space-y-3 mb-6">
                  {industry.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-[#F48F1C] rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full btn-saffron">Learn More</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}