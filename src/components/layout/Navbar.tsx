
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Train } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Close menu when route changes
    setIsOpen(false);
  }, [location]);
  
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Schedule", path: "/schedule" },
    { title: "Booking", path: "/booking" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];
  
  const serviceLinks = [
    { title: "Passenger Services", path: "/services/passenger" },
    { title: "Freight Services", path: "/services/freight" },
    { title: "Special Services", path: "/services/special" },
    { title: "Corporate Services", path: "/services/corporate" },
  ];
  
  const resourceLinks = [
    { title: "Travel Guide", path: "/resources/travel-guide" },
    { title: "FAQs", path: "/faqs" },
    { title: "News & Events", path: "/news" },
    { title: "Safety Information", path: "/safety" },
  ];
  
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: 0.05 * i,
        duration: 0.5
      } 
    })
  };
  
  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'} transition-all duration-300`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ rotate: -20 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Train className="h-8 w-8 text-kenya-red" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-2xl font-bold font-playfair tracking-tight">
                <span className="text-kenya-red">Kenya</span> Railways
              </span>
            </motion.div>
          </Link>
          
          {/* Desktop Navigation with NavigationMenu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {serviceLinks.map((link, index) => (
                        <li key={index} className="row-span-1">
                          <NavigationMenuLink asChild>
                            <Link
                              to={link.path}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{link.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Explore our {link.title.toLowerCase()} options and offerings.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/schedule">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Schedule
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {resourceLinks.map((link, index) => (
                        <li key={index} className="row-span-1">
                          <NavigationMenuLink asChild>
                            <Link
                              to={link.path}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{link.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Access helpful information and resources for your journey.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/contact">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button 
              variant="default" 
              className="bg-kenya-red hover:bg-kenya-red/90 text-white ml-4"
              asChild
            >
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="md:hidden text-foreground"
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-background z-50 md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center mb-8">
                <Link to="/" className="flex items-center space-x-2">
                  <Train className="h-8 w-8 text-kenya-red" />
                  <span className="text-2xl font-bold font-playfair">
                    <span className="text-kenya-red">Kenya</span> Railways
                  </span>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleMenu}
                  className="text-foreground"
                  aria-label="Close Menu"
                >
                  <X className="h-6 w-6" />
                </motion.button>
              </div>
              
              <nav className="flex flex-col space-y-6 py-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                  >
                    <Link 
                      to={link.path} 
                      className={`text-xl font-medium ${location.pathname === link.path ? 'text-primary font-semibold' : 'text-foreground'}`}
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * navLinks.length, duration: 0.4 }}
                >
                  <Button 
                    variant="default" 
                    className="w-full bg-kenya-red hover:bg-kenya-red/90 text-white"
                    asChild
                  >
                    <Link to="/booking">Book Now</Link>
                  </Button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
