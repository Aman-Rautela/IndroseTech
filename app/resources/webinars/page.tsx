'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Video, ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { atcb_action } from 'add-to-calendar-button';

export default function WebinarsPage() {
  const webinars = [
    {
      title: "Digital Banking Transformation",
      description: "Learn how banks are leveraging technology for digital transformation",
      date: "April 15, 2024",
      time: "10:00 AM EST",
      endTime: "11:00 AM EST",
      speakers: [
        "John Smith, Digital Banking Expert",
        "Sarah Johnson, FinTech Analyst"
      ]
    },
    {
      title: "AI in Process Automation",
      description: "Discover how AI is revolutionizing business process automation",
      date: "April 22, 2024",
      time: "2:00 PM EST",
      endTime: "3:00 PM EST",
      speakers: [
        "Dr. Michael Chen, AI Specialist",
        "Emma Davis, Process Automation Lead"
      ]
    },
    {
      title: "Future of Content Services",
      description: "Explore next-generation content management solutions",
      date: "April 29, 2024",
      time: "11:00 AM EST",
      endTime: "12:00 PM EST",
      speakers: [
        "David Wilson, Content Strategy Expert",
        "Lisa Brown, Enterprise Architect"
      ]
    },
    {
      title: "Healthcare Digital Innovation",
      description: "Digital transformation strategies for healthcare providers",
      date: "May 6, 2024",
      time: "1:00 PM EST",
      endTime: "2:00 PM EST",
      speakers: [
        "Dr. Rachel Green, Healthcare Technology Advisor",
        "Tom Anderson, Digital Health Strategist"
      ]
    }
  ];

  const handleAddToCalendar = (webinar: typeof webinars[0]) => {
    const [month, day, year] = new Date(webinar.date).toLocaleDateString('en-US').split('/');
    const startTime = webinar.time.replace(' EST', '');
    const endTime = webinar.endTime.replace(' EST', '');

    atcb_action({
      name: webinar.title,
      description: `${webinar.description}\n\nSpeakers:\n${webinar.speakers.join('\n')}`,
      startDate: `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`,
      endDate: `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`,
      startTime: startTime.split(' ')[0],
      endTime: endTime.split(' ')[0],
      options: ['Apple', 'Google', 'iCal', 'Microsoft365', 'Outlook.com', 'Yahoo'],
      timeZone: "America/New_York",
      location: "Online Webinar",
      iCalFileName: "Newgen-Webinar"
    });
  };

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
                <Video className="h-16 w-16" />
              </div>
              <h1 className="text-5xl font-bold mb-6">Webinars</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our expert-led webinars to learn about the latest trends and best practices in digital transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {webinars.map((webinar, index) => (
                <motion.div
                  key={webinar.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-xl"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-3">{webinar.title}</h3>
                    <p className="text-gray-600 mb-4">{webinar.description}</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="h-5 w-5 mr-3 text-primary" />
                      {webinar.date}
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Calendar className="h-5 w-5 mr-3 text-primary" />
                      {webinar.time} - {webinar.endTime}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Speakers:</h4>
                      {webinar.speakers.map((speaker, i) => (
                        <div key={i} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {speaker}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => handleAddToCalendar(webinar)}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Add to Calendar
                    </Button>
                    <Link href="/contact" className="flex-1">
                      <Button className="w-full btn-saffron">
                        Register Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}