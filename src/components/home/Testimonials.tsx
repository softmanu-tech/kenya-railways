
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "James Mwangi",
      title: "Business Traveler",
      quote: "Kenya Railways has transformed my business travel between Nairobi and Mombasa. The punctuality and comfort make it my preferred mode of transportation.",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Kamau",
      title: "Tourist",
      quote: "Traveling to Naivasha on Kenya Railways was a highlight of my trip. The scenic views and excellent service made for an unforgettable experience.",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "John Odhiambo",
      title: "Regular Commuter",
      quote: "As someone who travels weekly, I appreciate the consistency and reliability of Kenya Railways. The staff are always friendly and helpful.",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 4
    }
  ];
  
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const testimonialVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.5 } }
  };
  
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-background" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }} />
      
      <motion.div 
        className="absolute top-20 right-20 text-primary-foreground/10 transform rotate-12"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Quote className="w-32 h-32" />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">What Our Passengers Say</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Hear from travelers who have experienced our services across Kenya.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative py-10">
            <AnimatePresence mode='wait'>
              <motion.div
                key={current}
                variants={testimonialVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20">
                      <img 
                        src={testimonials[current].avatar} 
                        alt={testimonials[current].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-4 flex justify-center md:justify-start">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`h-5 w-5 ${i < testimonials[current].rating ? 'text-kenya-gold fill-kenya-gold' : 'text-primary-foreground/30'}`}
                        />
                      ))}
                    </div>
                    <blockquote className="text-xl mb-6 italic">
                      "{testimonials[current].quote}"
                    </blockquote>
                    <div>
                      <h4 className="font-bold text-lg">{testimonials[current].name}</h4>
                      <p className="text-primary-foreground/70">{testimonials[current].title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === index ? 'bg-white scale-125' : 'bg-white/30'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 md:-left-12 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 md:-right-12 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-background" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }} />
    </section>
  );
};

export default Testimonials;
