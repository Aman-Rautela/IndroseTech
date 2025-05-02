'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const menuItems = [
  {
    title: 'Products',
    path: '/products',
    items: [
      { name: 'Delivery Platform', path: '/products/dpa' },
      { name: 'Scrib Product', path: '/products/csp' },
      { name: 'Management Product', path: '/products/ceh' },
      { name: 'Ticket Solution', path: '/products/ceh' },
      { name: 'Community Connect', path: '/products/ceh' },
      { name: 'AI Solutions', path: '/products/ai' },
      { name: 'Support Products', path: '/products/ceh' }
    ],
  },
  {
    title: 'Business',
    path: '/solutions',
    items: [
      { name: 'Health Care', path: '/solutions/banking' },
      { name: 'AI', path: '/solutions/insurance' },
      { name: 'Commute/Logistics', path: '/solutions/government' },
      { name: 'Social Media', path: '/solutions/healthcare' }
    ],
  }//,
  // {
  //   title: 'Resources',
  //   path: '/resources',
  //   items: [
  //     { name: 'Case Studies', path: '/resources/case-studies' },
  //     { name: 'Whitepapers', path: '/resources/whitepapers' },
  //     { name: 'Webinars', path: '/resources/webinars' },
  //     { name: 'Blog', path: '/resources/blog' }
  //   ],
  // }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-saffron">Indorse</span><span className='text-2xl font-bold text-white'>tech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="hover:text-saffron">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        {item.items.map((subItem) => (
                          <li key={subItem.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={subItem.path}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                {subItem.name}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="/search">
              <Button variant="outline" size="icon" className="hover:text-saffron">
                <Search className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="btn-saffron">Contact Us</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-saffron"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4">
              {menuItems.map((item) => (
                <div key={item.title} className="py-2">
                  <Link
                    href={item.path}
                    className="flex items-center justify-between w-full py-2 hover:text-saffron"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{item.title}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  <div className="pl-4">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.path}
                        className="block py-2 text-gray-600 hover:text-saffron"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="mt-4 space-y-2">
                <Link href="/search" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full" variant="outline">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full btn-saffron">Contact Us</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}