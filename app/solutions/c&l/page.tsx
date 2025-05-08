'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Bus, ArrowRight, MapPin, Route, Clock, TrafficCone } from 'lucide-react';
import Link from 'next/link';

export default function CommutePage() {
  const features = [
    {
      icon: <Route className="h-8 w-8" />,
      title: "Route Optimization",
      description: "Smart algorithms to find the most efficient routes for public transit"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Real-time Tracking",
      description: "Live updates on vehicle locations and estimated arrival times"
    },
    {
      icon: <TrafficCone className="h-8 w-8" />,
      title: "Traffic Management",
      description: "Monitor and manage traffic flow with intelligent systems"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Smart Infrastructure",
      description: "Integrated solutions for bus stops, stations, and transit hubs"
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
                <Bus className="h-16 w-16" />
              </div>
              <h1 className="text-5xl font-bold mb-6">Commute & Logistics Solutions</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Revolutionize urban mobility and transportation with our smart logistics and commute management platform.
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