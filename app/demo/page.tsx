'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Check, Clock, Users } from 'lucide-react';

export default function DemoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const timeSlots = [
    "09:00 AM - 10:00 AM",
    "11:00 AM - 12:00 PM",
    "02:00 PM - 03:00 PM",
    "04:00 PM - 05:00 PM"
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6">Schedule a Demo</h1>
              <p className="text-xl text-gray-600">
                Discover how Indorse's digital transformation platform can transform your business operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="bg-gray-50 p-8 rounded-xl mb-8">
                  <h3 className="text-2xl font-semibold mb-6">What to Expect</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-saffron mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">30-Minute Personalized Demo</h4>
                        <p className="text-gray-600">Customized showcase of features 
                        aligned with your specific business requirements.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-6 w-6 text-saffron mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Expert Consultation</h4>
                        <p className="text-gray-600">Consult with our solution expert to address  your unique needs.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="h-6 w-6 text-saffron mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Flexible Scheduling</h4>
                        <p className="text-gray-600">Select a convenient time for your team</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="John" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Doe" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Business Email</label>
                    <Input type="email" placeholder="john@company.com" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Company Name</label>
                    <Input placeholder="Your company name" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Job Title</label>
                    <Input placeholder="Your role" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Demo Time</label>
                    <select 
                      className="w-full rounded-md border border-gray-300 p-2"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      required
                    >
                      <option value="">Select a time slot</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Additional Notes</label>
                    <Textarea 
                      placeholder="Tell us about your specific requirements or areas of interest"
                      className="h-32"
                    />
                  </div>

                  <Button type="submit" className="w-full btn-saffron">
                    {isSubmitted ? (
                      <span className="flex items-center justify-center">
                        <Check className="h-4 w-4 mr-2" />
                        Demo Requested!
                      </span>
                    ) : (
                      'Schedule Demo'
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}