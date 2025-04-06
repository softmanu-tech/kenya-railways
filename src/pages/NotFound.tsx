
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Train, Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto h-16 w-16 text-kenya-red">
            <Train className="h-16 w-16" />
          </div>
          <h1 className="mt-6 text-6xl font-bold font-playfair text-kenya-red">404</h1>
          <h2 className="mt-2 text-3xl font-bold font-playfair">Destination Not Found</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Sorry, the page you're looking for seems to have departed from our station.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative"
        >
          <div className="train-track h-12 mb-8 relative">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "linear"
              }}
              className="absolute top-1/2 transform -translate-y-1/2"
            >
              <div className="bg-kenya-red p-2 rounded-lg shadow-lg">
                <Train className="h-6 w-6 text-white" />
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild className="bg-kenya-red hover:bg-kenya-red/90">
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Return Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/schedule">
              <Search className="h-4 w-4 mr-2" />
              Find Trains
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
