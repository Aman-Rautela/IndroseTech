'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Cpu, Database, Workflow, Bot } from 'lucide-react';

export default function ProductsPage() {
  const products = [
    {
      icon: <Workflow className="h-12 w-12" />,
      title: "Digital Process Automation",
      description: "Streamline and automate complex business processes with our intelligent workflow solutions.",
      features: [
        "Low-code process modeling",
        "Business rules engine",
        "Process analytics",
        "Mobile-enabled workflows"
      ]
    },
    {
      icon: <Database className="h-12 w-12" />,
      title: "Content Services Platform",
      description: "Manage and secure enterprise content with our comprehensive content services platform.",
      features: [
        "Document management",
        "Records management",
        "Content analytics",
        "Secure collaboration"
      ]
    },
    {
      icon: <Cpu className="h-12 w-12" />,
      title: "Customer Engagement Hub",
      description: "Create seamless, omnichannel customer experiences with our engagement solutions.",
      features: [
        "Omnichannel communication",
        "Customer journey mapping",
        "Digital forms",
        "Communication analytics"
      ]
    },
    {
      icon: <Bot className="h-12 w-12" />,
      title: "Contextual AI",
      description: "Leverage artificial intelligence to make informed decisions and automate processes.",
      features: [
        "Machine learning",
        "Natural language processing",
        "Predictive analytics",
        "Intelligent automation"
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
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive suite of digital transformation solutions designed to help enterprises innovate and grow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="text-saffron mb-6">{product.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature) => (
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