'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Newspaper, ArrowRight, Calendar, User } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Future of Work: AI and Automation",
      description: "Explore how artificial intelligence and automation are reshaping workplace dynamics and job roles",
      author: "John Smith",
      date: "March 28, 2024",
      category: "Technology Trends",
      readTime: "5 min read",
      slug: "the-future-of-work-ai-and-automation"
    },
    {
      title: "Digital Banking Evolution",
      description: "Understanding the transformation of traditional banking in the digital age",
      author: "Sarah Johnson",
      date: "March 25, 2024",
      category: "Banking",
      readTime: "7 min read",
      slug: "digital-banking-evolution"
    },
    {
      title: "Healthcare Innovation Through Technology",
      description: "How digital solutions are improving patient care and operational efficiency",
      author: "Dr. Michael Chen",
      date: "March 22, 2024",
      category: "Healthcare",
      readTime: "6 min read",
      slug: "healthcare-innovation-through-technology"
    },
    {
      title: "Content Management in 2024",
      description: "Latest trends and best practices in enterprise content management",
      author: "Emma Davis",
      date: "March 20, 2024",
      category: "Content Services",
      readTime: "4 min read",
      slug: "content-management-in-2024"
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
                <Newspaper className="h-16 w-16" />
              </div>
              <h1 className="text-5xl font-bold mb-6">Blog</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Insights and perspectives on digital transformation, technology trends, and industry innovations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-xl"
                >
                  <div className="mb-6">
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-4">
                      {post.category}
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {post.date}
                    </div>
                    <div>{post.readTime}</div>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <Button className="w-full btn-saffron">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}