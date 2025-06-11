'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

const heroItems = [
  {
    bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
    title: 'Transform Your Enterprise with Intelligent Automation',
    subtitle: 'Accelerate your digital transformation journey with our comprehensive suite of solutions',
    particles: ['🔮', '⚡', '🌐'],
    color: 'from-purple-600/80 to-blue-600/80'
  },
  {
    bgImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Next-Gen Technology Solutions',
    subtitle: 'Leverage cutting-edge technologies to drive business innovation',
    particles: ['🧠', '🚀', '💡'],
    color: 'from-blue-600/80 to-emerald-600/80'
  },
  {
    bgImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    title: 'Seamless Digital Transformation',
    subtitle: 'End-to-end solutions tailored to your business needs',
    particles: ['🔗', '🌀', '✨'],
    color: 'from-emerald-600/80 to-purple-600/80'
  }
];

const FloatingEmoji = ({ emoji, index }: { emoji: string; index: number }) => {
  const positions = [
    { x: 30, y: 40 },
    { x: -20, y: 60 },
    { x: 50, y: -10 }
  ];
  const pos = positions[index % positions.length];
  
  return (
    <motion.div
      className="text-3xl absolute"
      initial={{
        opacity: 0,
        scale: 0,
        x: pos.x,
        y: pos.y
      }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.3, 0],
        x: pos.x * 2,
        y: pos.y * 2,
        rotate: 360
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: 'reverse',
        delay: index * 0.5
      }}
    >
      {emoji}
    </motion.div>
  );
};

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const constraintsRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentIndex((prev) => (prev + 1) % heroItems.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovering]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      ref={constraintsRef}
    >
      {/* Background Image Carousel - FULLY VISIBLE */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '-100%' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${heroItems[currentIndex].bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </AnimatePresence>
      </div>

      {/* Light Gradient Overlay */}
      <motion.div
        className={`absolute inset-0 z-0 bg-gradient-to-br ${heroItems[currentIndex].color}`}
        style={{ opacity: 0.2 }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear'
        }}
      />

      {/* Client-side only elements */}
      {isMounted && (
        <>
          {/* Particle Effects */}
          {/* <div className="absolute inset-0 overflow-hidden z-0">
            {heroItems[currentIndex].particles.map((emoji, i) => (
              <FloatingEmoji key={i} emoji={emoji} index={i} />
            ))}
          </div> */}

          {/* Floating Shapes */}
          <motion.div
            className="absolute inset-0 z-0 overflow-hidden"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          >
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute border-2 border-white/20 rounded-full"
                style={{
                  width: `${150 + i * 100}px`,
                  height: `${150 + i * 50}px`,
                  left: `${20 + i * 20}%`,
                  top: `${10 + i * 25}%`,
                }}
                drag
                dragConstraints={constraintsRef}
                animate={{
                  x: [0, i % 2 ? 50 : -50],
                  y: [0, i % 3 ? 30 : -30],
                  rotate: 360
                }}
                transition={{
                  duration: 20 + i * 5,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
            ))}
          </motion.div>
        </>
      )}

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentIndex}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                whileHover={{
                  scale: 1.02,
                  textShadow: '0 0 15px rgba(0,0,0,0.7)'
                }}
              >
                {heroItems[currentIndex].title.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                whileHover={{ scale: 1.01 }}
              >
                {heroItems[currentIndex].subtitle}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/demo">
              <Button 
                size="lg" 
                className="text-lg px-8 relative overflow-hidden group bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:border-white/80"
              >
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center">
                  Request Demo
                  <motion.div
                    className="ml-2"
                    animate={{
                      x: [0, 5, 0],
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M8 12L12 16L16 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </span>
              </Button>
            </Link>
            <Link href="/learn-more">
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 relative overflow-hidden group bg-white/5 backdrop-blur-sm border-2 border-white/30 hover:border-white/80"
              >
                <motion.span
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center">
                  Why Choose Us
                  <motion.div
                    className="ml-2"
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center"
        >
          <motion.div
            className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1 relative"
          >
            <motion.div
              className="w-1 h-3 bg-white rounded-full"
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white/30"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.2, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Dot Navigation */}
      <div className="absolute bottom-8 right-8 flex gap-3 z-20">
        {heroItems.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className="relative w-4 h-4"
            aria-label={`Go to slide ${index + 1}`}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-white/30"
              animate={{
                scale: currentIndex === index ? [1, 1.2, 1] : 1,
                opacity: currentIndex === index ? [0.6, 1, 0.6] : 0.6
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            />
            {currentIndex === index && (
              <motion.div
                className="absolute inset-0 rounded-full bg-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
            <motion.div
              className="absolute inset-0 rounded-full border border-white/50"
              whileHover={{ scale: 1.5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            />
          </button>
        ))}
      </div>

      {/* Grid Overlay */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>
    </section>
  );
}