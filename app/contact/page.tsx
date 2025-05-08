'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Phone, MapPin, Clock, Check } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  // const offices = [
  //   {
  //     location: "New York",
  //     address: "123 Business Avenue, NY 10001",
  //     phone: "+1 (212) 555-0123",
  //     email: "ny@newgen.com"
  //   },
  //   {
  //     location: "London",
  //     address: "456 Tech Street, London EC1A 1BB",
  //     phone: "+44 20 7123 4567",
  //     email: "london@newgen.com"
  //   },
  //   {
  //     location: "Singapore",
  //     address: "789 Innovation Road, Singapore 018956",
  //     phone: "+65 6789 0123",
  //     email: "singapore@newgen.com"
  //   }
  // ];

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
              <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to transform your business? Let's discuss how we can help you achieve your digital transformation goals.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <div className="space-y-8 mb-12">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-saffron mr-4" />
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <p className="text-gray-600">+91 8669039635</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-saffron mr-4" />
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <p className="text-gray-600">arpitrautela01@indorsetech.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-saffron mr-4" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MessageSquare className="h-6 w-6 text-saffron mr-4" />
                    <div>
                      <h3 className="font-semibold">Live Chat</h3>
                      <p className="text-gray-600">Chat with our support team</p>
                    </div>
                  </div>
                </div>

                {/* <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-4">Global Offices</h3>
                  {offices.map((office) => (
                    <div key={office.location} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-lg mb-2">{office.location}</h4>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {office.address}
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          {office.phone}
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-2" />
                          {office.email}
                        </div>
                      </div>
                    </div>
                  ))}
                </div> */}
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
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="john@example.com" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <Input placeholder="Your company name" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input type="tel" placeholder="+1 (555) 000-0000" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea placeholder="How can we help you?" className="h-32" required />
                  </div>
                  
                  <Button type="submit" className="w-full btn-saffron">
                    {isSubmitted ? (
                      <span className="flex items-center">
                        <Check className="h-4 w-4 mr-2" />
                        Message Sent!
                      </span>
                    ) : (
                      'Send Message'
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