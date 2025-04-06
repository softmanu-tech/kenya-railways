
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Calendar, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PopularRoutes = () => {
  const routes = [
    {
      id: 1,
      from: "Nairobi",
      to: "Mombasa",
      image: "https://images.unsplash.com/photo-1591021619627-725cd5dda4ea?q=80&w=1974&auto=format&fit=crop",
      duration: "4.5 hours",
      price: "KSh 1,000",
      departures: "Daily at 8:00 AM & 3:30 PM"
    },
    {
      id: 2,
      from: "Nairobi",
      to: "Kisumu",
      image: "https://images.unsplash.com/photo-1564186847273-a4a30b94f273?q=80&w=2021&auto=format&fit=crop",
      duration: "3.5 hours",
      price: "KSh 800",
      departures: "Daily at 9:30 AM & 4:00 PM"
    },
    {
      id: 3,
      from: "Mombasa",
      to: "Nairobi",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1974&auto=format&fit=crop",
      duration: "4.5 hours",
      price: "KSh 1,000",
      departures: "Daily at 7:00 AM & 2:30 PM"
    },
    {
      id: 4,
      from: "Nairobi",
      to: "Nakuru",
      image: "https://images.unsplash.com/photo-1568214798573-187e8b53f870?q=80&w=2070&auto=format&fit=crop",
      duration: "2 hours",
      price: "KSh 500",
      departures: "Daily at 11:00 AM & 6:00 PM"
    }
  ];
  
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Popular Routes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our most traveled routes connecting major cities across Kenya with convenience and comfort.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {routes.map((route) => (
            <motion.div
              key={route.id}
              variants={itemVariants}
              className="rounded-xl overflow-hidden shadow-md bg-background"
              onMouseEnter={() => setHoveredId(route.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={route.image} 
                  alt={`${route.from} to ${route.to}`}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{ 
                    transform: hoveredId === route.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{route.from}</span>
                    <ArrowRight className="h-4 w-4 mx-2" />
                    <span className="font-medium">{route.to}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{route.duration}</span>
                  </div>
                  <span className="font-bold text-primary">{route.price}</span>
                </div>
                
                <div className="flex items-start space-x-2 mb-4">
                  <Calendar className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{route.departures}</span>
                </div>
                
                <Button 
                  className="w-full bg-kenya-red hover:bg-kenya-red/90 text-white"
                  asChild
                >
                  <Link to="/booking">Book This Route</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <Link to="/schedule">View All Routes</Link>
          </Button>
        </motion.div>
      </div>
      
      {/* Decorative pattern */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none kenya-pattern opacity-30 -z-10" />
    </section>
  );
};

export default PopularRoutes;
