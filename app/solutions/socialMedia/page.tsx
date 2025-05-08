'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Share2, MessageSquare, TrendingUp, Users, Hash, Image, Video, BarChart, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SocialMediaPage() {
  const solutions = [
    {
      icon: <Share2 className="h-12 w-12" />,
      title: "Content Management",
      description: "Streamline your social media content creation and publishing.",
      features: ["Content Calendar", "Multi-platform Publishing", "Post Scheduling", "Visual Content Tools"]
    },
    {
      icon: <MessageSquare className="h-12 w-12" />,
      title: "Community Engagement",
      description: "Build and nurture your online community effectively.",
      features: ["Comment Management", "Direct Messaging", "Influencer Collaboration", "Response Templates"]
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Growth Analytics",
      description: "Data-driven insights to grow your social presence.",
      features: ["Performance Metrics", "Audience Insights", "Competitor Analysis", "ROI Tracking"]
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Audience Targeting",
      description: "Reach the right people with precision targeting.",
      features: ["Demographic Filters", "Interest-based Targeting", "Lookalike Audiences", "Behavioral Analysis"]
    },
    {
      icon: <Hash className="h-12 w-12" />,
      title: "Hashtag Strategy",
      description: "Maximize your discoverability with smart hashtag tools.",
      features: ["Hashtag Research", "Performance Tracking", "Trend Analysis", "Campaign-specific Tags"]
    },
    {
      icon: <Image className="h-12 w-12" />,
      title: "Visual Content",
      description: "Create stunning visuals for your social channels.",
      features: ["Image Editing", "Template Library", "Brand Kit", "A/B Testing"]
    },
    {
      icon: <Video className="h-12 w-12" />,
      title: "Video Marketing",
      description: "Powerful tools for video content creation.",
      features: ["Video Editing", "Story Creation", "Live Streaming", "Reels/TikTok Tools"]
    },
    {
      icon: <BarChart className="h-12 w-12" />,
      title: "Performance Dashboard",
      description: "Comprehensive analytics at your fingertips.",
      features: ["Cross-platform Metrics", "Custom Reports", "Real-time Monitoring", "Benchmarking"]
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
            <div className="text-saffron flex justify-center mb-6">
              <Globe className="h-16 w-16" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Social Media Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your social media presence with our comprehensive suite of tools designed to amplify your brand's digital voice.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="text-saffron mb-6">{solution.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-[#F48F1C] rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* <Link href={`/social-media/${solution.title.toLowerCase().replace(/ /g, '-')}`}>
                  <Button className="w-full btn-saffron">Learn More</Button>
                </Link> */}
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Social Media?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our social media experts will help you develop a strategy that delivers real results.
            </p>
            <Link href="/contact">
              <Button className="btn-saffron text-lg px-8 py-6">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}