
import { motion } from 'framer-motion';
import { Train as TrainIcon } from 'lucide-react';

const TrainAnimation = () => {
  return (
    <div className="py-16 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="relative h-32">
          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 train-track h-12" />
          
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear"
            }}
            className="absolute top-1/2 transform -translate-y-1/2 flex items-center"
          >
            <div className="bg-kenya-red p-3 rounded-lg shadow-lg">
              <TrainIcon className="h-10 w-10 text-white" />
            </div>
          </motion.div>
          
          {/* Station markers */}
          <div className="absolute top-0 left-1/4 flex flex-col items-center">
            <div className="w-4 h-4 bg-kenya-gold rounded-full mb-2" />
            <span className="text-sm font-medium">Nairobi</span>
          </div>
          
          <div className="absolute top-0 left-2/4 flex flex-col items-center">
            <div className="w-4 h-4 bg-kenya-gold rounded-full mb-2" />
            <span className="text-sm font-medium">Mombasa</span>
          </div>
          
          <div className="absolute top-0 left-3/4 flex flex-col items-center">
            <div className="w-4 h-4 bg-kenya-gold rounded-full mb-2" />
            <span className="text-sm font-medium">Kisumu</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainAnimation;
