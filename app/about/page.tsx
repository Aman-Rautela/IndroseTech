'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, BarChart, Globe, Users, Rocket, Target, Shield } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    {
      number: "2000+",
      label: "Enterprise Customers",
      icon: <Users className="h-6 w-6" />
    },
    {
      number: "150+",
      label: "Countries Served",
      icon: <Globe className="h-6 w-6" />
    },
    {
      number: "95%",
      label: "Customer Satisfaction",
      icon: <Award className="h-6 w-6" />
    },
    {
      number: "30+",
      label: "Years of Innovation",
      icon: <BarChart className="h-6 w-6" />
    }
  ];

  const sections = [
    {
      id: "mission",
      icon: <Target className="h-12 w-12" />,
      title: "Our Mission",
      content: "To empower organizations worldwide with innovative digital transformation solutions that drive growth, efficiency, and customer satisfaction. We strive to be the catalyst that enables businesses to thrive in the digital age through cutting-edge technology and exceptional service."
    },
    {
      id: "technology",
      icon: <Rocket className="h-12 w-12" />,
      title: "Technology Leadership",
      content: "Leading the industry with cutting-edge AI, automation, and digital process management solutions. Our commitment to innovation ensures that our clients always have access to the most advanced and effective digital transformation tools available."
    },
    {
      id: "global",
      icon: <Globe className="h-12 w-12" />,
      title: "Global Presence",
      content: "With operations spanning across continents, we deliver localized expertise while maintaining global best practices. Our diverse team of experts understands the unique challenges and opportunities in different markets, ensuring optimal solutions for every client."
    },
    {
      id: "innovation",
      icon: <Shield className="h-12 w-12" />,
      title: "Innovation Focus",
      content: "Our dedicated R&D team continuously works on developing next-generation solutions that address emerging business challenges. We invest heavily in research and development to stay ahead of technological trends and deliver cutting-edge solutions to our clients."
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
              <h1 className="text-5xl font-bold mb-6">About Newgen</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A global provider of digital transformation platform helping enterprises innovate and transform their operations.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 bg-gray-50 rounded-xl"
                >
                  <div className="text-saffron flex justify-center mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-xl"
                >
                  <div className="flex items-start gap-6">
                    <div className="text-saffron">{section.icon}</div>
                    <div>
                      <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">{section.content}</p>
                      <Link href="/contact">
                        <Button variant="ghost" className="hover:text-saffron">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link href="/contact">
                <Button className="btn-saffron text-lg px-8 py-6">
                  Get Started with Newgen
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}