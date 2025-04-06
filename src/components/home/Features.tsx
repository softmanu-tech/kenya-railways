
import { motion } from 'framer-motion';
import { Clock, MapPin, Shield, Tickets, Wifi, Coffee } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Punctual Service",
      description: "Our trains run on time, every time, with minimal delays for maximum convenience."
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Extensive Network",
      description: "Connect to major cities and towns across Kenya through our growing railway network."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safety First",
      description: "Your safety is our priority with regular maintenance and trained staff."
    },
    {
      icon: <Tickets className="h-8 w-8" />,
      title: "Easy Booking",
      description: "Book tickets online, via mobile app, or at any of our stations across the country."
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Onboard Wi-Fi",
      description: "Stay connected during your journey with complimentary high-speed internet."
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Comfort & Amenities",
      description: "Enjoy comfortable seating, catering services, and modern amenities."
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Why Choose Kenya Railways</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the benefits of modern rail travel with features designed for your comfort and convenience.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 right-0 w-64 h-64 bg-kenya-red/5 rounded-full -z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      <motion.div 
        className="absolute bottom-20 left-0 w-96 h-96 bg-kenya-green/5 rounded-full -z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
    </section>
  );
};

export default Features;
