import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

// This would typically come from a database or CMS
const blogPosts = {
  'the-future-of-work-ai-and-automation': {
    title: "The Future of Work: AI and Automation",
    content: `
      Artificial intelligence and automation are fundamentally changing how we work. This transformation is not just about replacing manual tasks; it's about augmenting human capabilities and creating new opportunities for innovation and growth.

      Key Impacts:
      
      1. Workplace Evolution
      - Automated routine tasks
      - Enhanced decision-making through AI
      - New roles and skill requirements
      
      2. Employee Skills
      - Increased focus on digital literacy
      - Emphasis on soft skills
      - Continuous learning and adaptation
      
      3. Business Operations
      - Streamlined processes
      - Data-driven insights
      - Improved efficiency and accuracy
      
      4. Future Considerations
      - Ethical AI implementation
      - Workforce transition strategies
      - Balance between automation and human touch
    `,
    author: "John Smith",
    date: "March 28, 2024",
    category: "Technology Trends",
    readTime: "5 min read"
  },
  'digital-banking-evolution': {
    title: "Digital Banking Evolution",
    content: `
      The banking sector is undergoing a dramatic transformation as digital technologies reshape customer expectations and operational models. Traditional banks are adapting to compete with fintech innovators and meet evolving customer needs.

      Key Trends:
      
      1. Digital Transformation
      - Mobile-first banking
      - AI-powered personalization
      - Real-time processing
      
      2. Customer Experience
      - Seamless omnichannel experience
      - Personalized financial insights
      - Enhanced security features
      
      3. Technology Integration
      - Cloud computing adoption
      - Blockchain implementation
      - API-driven architecture
      
      4. Future Outlook
      - Open banking expansion
      - Enhanced cybersecurity measures
      - Sustainable banking practices
    `,
    author: "Sarah Johnson",
    date: "March 25, 2024",
    category: "Banking",
    readTime: "7 min read"
  },
  'healthcare-innovation-through-technology': {
    title: "Healthcare Innovation Through Technology",
    content: `
      Digital transformation in healthcare is revolutionizing patient care, operational efficiency, and medical research. Technology is enabling more personalized, efficient, and accessible healthcare services.

      Key Areas:
      
      1. Patient Care
      - Telemedicine expansion
      - Remote monitoring
      - AI-assisted diagnosis
      
      2. Operational Efficiency
      - Digital health records
      - Automated scheduling
      - Resource optimization
      
      3. Data Management
      - Secure health information
      - Analytics-driven insights
      - Interoperability solutions
      
      4. Future Developments
      - Precision medicine
      - IoT integration
      - AI-powered research
    `,
    author: "Dr. Michael Chen",
    date: "March 22, 2024",
    category: "Healthcare",
    readTime: "6 min read"
  },
  'content-management-in-2024': {
    title: "Content Management in 2024",
    content: `
      Enterprise content management is evolving to meet the challenges of digital transformation. Modern solutions focus on accessibility, security, and intelligent processing of information.

      Key Aspects:
      
      1. Modern Architecture
      - Cloud-native solutions
      - Microservices approach
      - API-first design
      
      2. Intelligent Features
      - AI-powered classification
      - Automated workflows
      - Smart search capabilities
      
      3. Security & Compliance
      - Enhanced data protection
      - Regulatory compliance
      - Access control
      
      4. Future Trends
      - Federated content services
      - Blockchain integration
      - Advanced analytics
    `,
    author: "Emma Davis",
    date: "March 20, 2024",
    category: "Content Services",
    readTime: "4 min read"
  }
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

interface PageProps {
  params: {
    slug: keyof typeof blogPosts;
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/resources/blog">
              <Button variant="ghost" className="mb-8 hover:text-saffron">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            <div className="mb-8">
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-4">
                {post.category}
              </div>
              <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
              
              <div className="flex items-center gap-6 text-gray-600 mb-8">
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
            </div>

            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-semibold mb-6">Share this article</h3>
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1">
                  Share on LinkedIn
                </Button>
                <Button variant="outline" className="flex-1">
                  Share on Twitter
                </Button>
                <Button variant="outline" className="flex-1">
                  Share via Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
