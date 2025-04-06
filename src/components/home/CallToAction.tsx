
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };
  
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-kenya-red rounded-3xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-white font-playfair mb-6"
                  variants={itemVariants}
                >
                  Ready to Experience Modern Railway Travel?
                </motion.h2>
                
                <motion.p 
                  className="text-white/90 text-lg mb-8"
                  variants={itemVariants}
                >
                  Book your journey today and travel across Kenya with comfort, speed, and reliability. Experience the new standard in railway transportation.
                </motion.p>
                
                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-4"
                >
                  <Button 
                    size="lg"
                    className="bg-white text-kenya-red hover:bg-white/90"
                    asChild
                  >
                    <Link to="/booking">
                      Book Your Journey
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/20"
                    asChild
                  >
                    <Link to="/schedule">View Schedule</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
            
            <div className="md:w-1/2 relative min-h-[300px] md:min-h-0">
              <img 
                src="https://images.unsplash.com/photo-1551805318-9c694d92b735?q=80&w=2070&auto=format&fit=crop" 
                alt="Kenya Railways Train" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-kenya-red/70 md:bg-gradient-to-r" />
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 w-72 h-72 rounded-full bg-kenya-red/5 -z-10"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "backOut" }}
        viewport={{ once: true }}
      />
    </section>
  );
};

export default CallToAction;
