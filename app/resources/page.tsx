'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FileText, Video, BookOpen, Newspaper, Download, ExternalLink } from 'lucide-react';

export default function ResourcesPage() {
  const resources = [
    {
      type: "Case Studies",
      icon: <FileText className="h-6 w-6" />,
      items: [
        {
          title: "Digital Transformation in Banking",
          description: "How a leading bank transformed their operations with Newgen",
          link: "#"
        },
        {
          title: "Insurance Claims Automation",
          description: "Streamlining claims processing for better customer experience",
          link: "#"
        }
      ]
    },
    {
      type: "Webinars",
      icon: <Video className="h-6 w-6" />,
      items: [
        {
          title: "Future of Digital Banking",
          description: "Expert insights on emerging trends in digital banking",
          link: "#"
        },
        {
          title: "AI in Process Automation",
          description: "Leveraging AI for intelligent process automation",
          link: "#"
        }
      ]
    },
    {
      type: "Whitepapers",
      icon: <BookOpen className="h-6 w-6" />,
      items: [
        {
          title: "Low-Code Development Guide",
          description: "Comprehensive guide to low-code application development",
          link: "#"
        },
        {
          title: "Digital Transformation Strategy",
          description: "Framework for successful digital transformation",
          link: "#"
        }
      ]
    },
    {
      type: "Blog",
      icon: <Newspaper className="h-6 w-6" />,
      items: [
        {
          title: "The Future of Work",
          description: "How AI is reshaping workplace automation",
          link: "#"
        },
        {
          title: "Customer Experience Trends",
          description: "Latest trends in digital customer experience",
          link: "#"
        }
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
            <h1 className="text-5xl font-bold mb-6">Resources</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our collection of resources to help you understand and implement digital transformation solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="text-saffron mr-3">{resource.icon}</div>
                  <h2 className="text-2xl font-semibold">{resource.type}</h2>
                </div>
                <div className="space-y-6">
                  {resource.items.map((item) => (
                    <div key={item.title} className="border-b border-gray-100 pb-6 last:border-0">
                      <h3 className="text-xl font-semibold mb-2 hover-saffron">
                        <a href={item.link} className="flex items-center">
                          {item.title}
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </a>
                      </h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <Button variant="outline" className="hover:text-saffron">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}