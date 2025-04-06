
import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Train, Users, MapPin, Clock } from 'lucide-react';

interface CountUpProps {
  end: number;
  duration?: number;
  start?: number;
  suffix?: string;
}

const CountUp = ({ end, duration = 2, start = 0, suffix = '' }: CountUpProps) => {
  const [count, setCount] = useState(start);
  const countRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(countRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, start, isInView]);
  
  return <div ref={countRef}>{count.toLocaleString()}{suffix}</div>;
};

const StatsSection = () => {
  const stats = [
    {
      icon: <Train className="w-10 h-10" />,
      value: 125,
      label: "Modern Trains",
      suffix: "+"
    },
    {
      icon: <Users className="w-10 h-10" />,
      value: 5,
      label: "Million Annual Passengers",
      suffix: "M+"
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      value: 42,
      label: "Stations Nationwide",
      suffix: ""
    },
    {
      icon: <Clock className="w-10 h-10" />,
      value: 98,
      label: "On-Time Performance",
      suffix: "%"
    }
  ];
  
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
    <section className="relative py-16 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-kenya-gold/5 -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 rounded-lg"
            >
              <div className="mb-4 text-kenya-red">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold font-playfair mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-10 right-10 w-32 h-32 rounded-full bg-kenya-green/5 -z-10"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "backOut" }}
        viewport={{ once: true }}
      />
      <motion.div 
        className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-kenya-red/5 -z-10"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
        viewport={{ once: true }}
      />
    </section>
  );
};

export default StatsSection;
