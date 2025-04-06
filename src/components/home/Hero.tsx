
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Calendar, MapPin, Train } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Experience Modern Railway Travel",
      description: "Connecting cities across Kenya with comfort, speed, and reliability.",
      image: "https://images.unsplash.com/photo-1535535112387-56ffe8db21ff?q=80&w=1984&auto=format&fit=crop"
      
    },
    {
      title: "Discover Kenya by Rail",
      description: "Explore the beauty of Kenya's landscapes through our extensive railway network.",
      image: "images/rt.jpg"
    },
    {
      title: "Sustainable Transportation",
      description: "Committed to eco-friendly travel solutions for a greener Kenya.",
      image: "images/ra.webp"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  const bgVariants = {
    initial: { scale: 1.1, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 1 } },
    exit: { scale: 1.1, opacity: 0, transition: { duration: 1 } }
  };
  
  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({ 
      y: 0, 
      opacity: 1, 
      transition: { delay: 0.3 + i * 0.1, duration: 0.8 }
    }),
    exit: { y: -20, opacity: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image Slider */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          variants={bgVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-black/40 z-10 hero-pattern"
            style={{ mixBlendMode: 'multiply' }}
          />
          <img 
            src={slides[currentSlide].image} 
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-white px-4 pt-20">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentSlide}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-6"
              >
                <motion.div
                  custom={0}
                  variants={textVariants}
                  className="inline-block bg-kenya-red px-4 py-2 rounded-md text-white font-medium"
                >
                  Kenya Railways
                </motion.div>
                
                <motion.h1
                  custom={1}
                  variants={textVariants}
                  className="text-4xl md:text-6xl font-bold font-playfair leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                
                <motion.p
                  custom={2}
                  variants={textVariants}
                  className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
                >
                  {slides[currentSlide].description}
                </motion.p>
                
                <motion.div
                  custom={3}
                  variants={textVariants}
                  className="flex flex-wrap justify-center gap-4 mt-8"
                >
                  <Button 
                    size="lg" 
                    className="bg-kenya-red hover:bg-kenya-red/90 text-white"
                    asChild
                  >
                    <Link to="/booking">
                      Book Your Journey
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-kenya-red"
                    asChild
                  >
                    <Link to="/schedule">
                      View Schedules
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      {/* Quick Search Box */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-30 py-6 px-4 shadow-lg rounded-t-3xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-kenya-red/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-kenya-red" />
              </div>
              <div className="flex-1">
                <label className="block text-sm text-muted-foreground">From</label>
                <select className="w-full bg-transparent border-none focus:outline-none font-medium text-foreground">
                  <option value="nairobi">Nairobi</option>
                  <option value="mombasa">Mombasa</option>
                  <option value="kisumu">Kisumu</option>
                  <option value="eldoret">Eldoret</option>
                </select>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-kenya-green/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-kenya-green" />
              </div>
              <div className="flex-1">
                <label className="block text-sm text-muted-foreground">To</label>
                <select className="w-full bg-transparent border-none focus:outline-none font-medium text-foreground">
                  <option value="mombasa">Mombasa</option>
                  <option value="nairobi">Nairobi</option>
                  <option value="kisumu">Kisumu</option>
                  <option value="eldoret">Eldoret</option>
                </select>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-kenya-gold/10 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-kenya-gold" />
              </div>
              <div className="flex-1">
                <label className="block text-sm text-muted-foreground">Date</label>
                <input 
                  type="date" 
                  className="w-full bg-transparent border-none focus:outline-none font-medium text-foreground"
                  defaultValue={new Date().toISOString().split('T')[0]}
                />
              </div>
              <Button className="bg-kenya-red hover:bg-kenya-red/90 text-white">
                Search
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-28 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/30'} transition-all duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
