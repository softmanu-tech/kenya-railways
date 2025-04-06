
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Train, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
        variant: "default",
      });
    }, 1000);
  };
  
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const linkVariants = {
    hover: { scale: 1.05, x: 5 }
  };
  
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" }
  ];
  
  const quickLinks = [
    { name: "Schedule", href: "/schedule" },
    { name: "Booking", href: "/booking" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQs", href: "/faqs" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" }
  ];
  
  const contactInfo = [
    { icon: <Phone className="h-5 w-5" />, text: "+254 20 222 1111" },
    { icon: <Mail className="h-5 w-5" />, text: "info@kenyarailways.co.ke" },
    { icon: <MapPin className="h-5 w-5" />, text: "Kenya Railways Headquarters, Nairobi" }
  ];
  
  return (
    <motion.footer 
      className="bg-muted pt-16 pb-8 relative mt-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-2 mb-4">
              <Train className="h-8 w-8 text-kenya-red" />
              <span className="text-2xl font-bold font-playfair">
                <span className="text-kenya-red">Kenya</span> Railways
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              Connecting Kenya through modern, efficient, and reliable railway transportation services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="bg-background p-2 rounded-full text-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-playfair font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover="hover">
                  <motion.div variants={linkVariants}>
                    <Link 
                      to={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                    >
                      <span className="mr-2">›</span>
                      {link.name}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-playfair font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start space-x-3 text-muted-foreground"
                  whileHover={{ x: 3 }}
                >
                  <span className="text-primary mt-1">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-playfair font-semibold mb-6">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Stay updated with our latest news and special offers.
            </p>
            <form className="space-y-3" onSubmit={handleNewsletterSubmit}>
              <div className="relative">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full pr-12"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {isSubmitting && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg className="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                )}
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit"
                  className="w-full bg-kenya-red text-white py-2 rounded-md hover:bg-kenya-red/90 transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </motion.div>
            </form>
            
            {/* Newsletter benefits */}
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">What you'll receive:</h4>
              <ul className="space-y-2">
                <li className="flex items-start text-xs text-muted-foreground">
                  <Check className="h-3 w-3 text-kenya-red mr-2 mt-0.5" />
                  <span>Weekly schedule updates</span>
                </li>
                <li className="flex items-start text-xs text-muted-foreground">
                  <Check className="h-3 w-3 text-kenya-red mr-2 mt-0.5" />
                  <span>Exclusive promotions and discounts</span>
                </li>
                <li className="flex items-start text-xs text-muted-foreground">
                  <Check className="h-3 w-3 text-kenya-red mr-2 mt-0.5" />
                  <span>Travel tips and insights</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 pt-8 border-t border-border text-center text-muted-foreground"
          variants={itemVariants}
        >
          <p>© {new Date().getFullYear()} Kenya Railways. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
