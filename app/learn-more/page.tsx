'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, BarChart, Globe, Users, Shield, Rocket, Target, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function LearnMorePage() {
  const achievements = [
    {
      // number: "2000+",
      label: "Transforming Businesses ",
      icon: <Users className="h-6 w-6" />
    },
    {
      // number: "150+",
      label: "Globally Served",
      icon: <Globe className="h-6 w-6" />
    },
    {
      // number: "95%",
      label: "Customer Satisfaction",
      icon: <Award className="h-6 w-6" />
    },
    {
      // number: "30+",
      label: "Innovative Solutions",
      icon: <BarChart className="h-6 w-6" />
    }
  ];

  const capabilities = [
    {
      icon: <Target className="h-12 w-12" />,
      title: "Strategic Consulting",
      content: "Our skilled consultants collaborate with your team to create detailed digital transformation plans customizes to your business goals.",
      benefits: [
        "Assessing Digital Maturity",
        "Planning Technology Roadmaps",
        "Developing Change Management Strategy",
        "Conducting ROI Analysis"
      ],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: <Rocket className="h-12 w-12" />,
      title: "Implementation Excellence",
      content: "We guarentee seamless deployment and integration of solutions with your current systems, reducing disruption while enhancing value.",
      benefits: [
        "Swift Deployment",
        "System Integration",
        "Data Migration",
        "User Training"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Managed Services",
      content: "Holistic support and maintenance services to ensure your digital transformation efforts consistently provide value.",
      benefits: [
        "Round-the-CLock Support",
        "Performance Monitoring",
        "Security Management",
        "Regular Updates"
      ],
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Innovation Lab",
      content: "Leverage stte-of-the-art technologies and proof-of-concept development to stay ahead of the curve.",
      benefits: [
        "Emerging Tech Research",
        "Prototype Development",
        "Innovation Workshops",
        "Technology Pilots"
      ],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-saffron/90 to-saffron/70">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-multiply opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Fast-track Your Digital Transformation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-8"
            >
              Uncover the potential of your extensive skill and established expertise to revolutionize your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/demo">
                <Button className="bg-white text-saffron hover:bg-gray-100 px-8 py-4 text-lg">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Trusted by Global Enterprises</h2>
            <p className="text-lg text-gray-600">
              Our proven track record speaks for itself. Join thousands of satisfied customers worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="text-saffron flex justify-center mb-4">{stat.icon}</div>
                {/* <div className="text-3xl font-bold mb-2 text-gray-900">{stat.number}</div> */}
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Extensive Expertise</h2>
            <p className="text-lg text-gray-600">
              Customized, comprehensive solutions designed to meet your specific business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 w-full">
                  <Image 
                    src={capability.image}
                    alt={capability.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="text-saffron mb-6">{capability.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{capability.title}</h3>
                  <p className="text-gray-600 mb-6">{capability.content}</p>
                  <div className="space-y-3">
                    {capability.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-saffron rounded-full mr-3" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative h-32 w-32 flex-shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="CEO Testimonial"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <blockquote className="text-xl text-gray-700 mb-6">
                  "Newgen's platform transformed our operations completely. Within 6 months, we saw a 40% increase in efficiency and a 30% reduction in costs."
                </blockquote>
                <div>
                  <p className="font-bold text-gray-900">Sarah Johnson</p>
                  <p className="text-gray-600">CEO, GlobalTech Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section - Perfectly Fixed Buttons */}
      <section className="py-16 bg-saffron">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-bkack mb-6">Excited to Revolutionize Your Business?</h2>
            <p className="text-lg text-black/90 mb-8">
            Our experts are here to demonstrate how Indorse&apos;s digital transformation platform can help you achieve your business objectives.
            </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto mx-auto">
                <Link href="/demo" className="w-full sm:w-auto">
                  <Button className="border-2 bg-white text-saffron hover:bg-gray-100 hover:text-saffron px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg w-full">
                    Request Demo <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="border-2  bg-transparent text-saffron hover:bg-gray-100 hover:text-saffron px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg w-full">
                    Contact Sales <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </Link>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}