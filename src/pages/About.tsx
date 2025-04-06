
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Separator } from '@/components/ui/separator';
import { Clock, Award, Users, Shield, Train } from 'lucide-react';

const About = () => {
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
    <Layout>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">About Kenya Railways</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Connecting communities, transforming lives, and driving economic growth through modern, efficient, and reliable rail transportation across Kenya.
            </p>
          </motion.div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4 font-playfair">Our History</h2>
              <p className="mb-4 text-muted-foreground">
                Kenya Railways has a rich history dating back to the colonial era when the first railway line was constructed from Mombasa to Kisumu (then Port Florence) between 1896 and 1901. Known as the "Lunatic Express" due to the immense challenges faced during its construction, this railway line marked the beginning of Kenya's railway system and played a crucial role in the country's development.
              </p>
              <p className="mb-4 text-muted-foreground">
                In 2017, Kenya inaugurated the Standard Gauge Railway (SGR), a modern railway system connecting Mombasa to Nairobi, later extended to Naivasha. This marked a significant milestone in the modernization of Kenya's transport infrastructure and a new chapter in the history of Kenya Railways.
              </p>
              <p className="text-muted-foreground">
                Today, Kenya Railways operates an extensive network spanning major cities and towns across the country, offering passenger and freight services. We continue to expand and modernize our infrastructure to meet the growing transportation needs of Kenya.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1534073737927-85f1ebff1f5d?q=80&w=1974&auto=format&fit=crop"
                alt="Historic Kenya Railways"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          
          {/* Vision & Mission */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="bg-background rounded-lg p-8 shadow-md"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold mb-4 font-playfair">Our Vision</h3>
              <p className="text-muted-foreground">
                To be a world-class provider of rail services that catalyzes national economic growth and promotes inter-regional integration.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-background rounded-lg p-8 shadow-md"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold mb-4 font-playfair">Our Mission</h3>
              <p className="text-muted-foreground">
                To develop, operate and maintain an efficient, safe, secure, and sustainable railway transportation system that meets customer expectations and drives national prosperity.
              </p>
            </motion.div>
          </motion.div>
          
          {/* Core Values */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl font-bold mb-8 text-center font-playfair">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Clock className="h-8 w-8 text-kenya-red" />, title: "Reliability", desc: "Consistent and dependable service delivery" },
                { icon: <Award className="h-8 w-8 text-kenya-red" />, title: "Excellence", desc: "Commitment to high standards in all operations" },
                { icon: <Shield className="h-8 w-8 text-kenya-red" />, title: "Safety", desc: "Prioritizing the wellbeing of passengers and staff" },
                { icon: <Users className="h-8 w-8 text-kenya-red" />, title: "Customer Focus", desc: "Putting customers at the heart of our service" }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-lg bg-muted"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="mx-auto mb-4 bg-muted-foreground/10 p-3 rounded-full inline-block">
                    {value.icon}
                  </div>
                  <h3 className="font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Leadership */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl font-bold mb-8 text-center font-playfair">Our Leadership</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "David Mwangi", position: "Managing Director", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" },
                { name: "Sarah Odhiambo", position: "Operations Director", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
                { name: "James Kimani", position: "Technical Director", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
                { name: "Emily Njeri", position: "Finance Director", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" }
              ].map((leader, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto border-4 border-muted">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{leader.name}</h3>
                  <p className="text-sm text-muted-foreground">{leader.position}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Timeline */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl font-bold mb-8 text-center font-playfair">Our Journey</h2>
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Center Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border"></div>
              
              {[
                { year: "1896", event: "Construction of the first railway line from Mombasa begins", side: "left" },
                { year: "1901", event: "The Uganda Railway, connecting Mombasa to Kisumu, is completed", side: "right" },
                { year: "1948", event: "East African Railways and Harbours Corporation is formed", side: "left" },
                { year: "1977", event: "Kenya Railways Corporation is established", side: "right" },
                { year: "2017", event: "Modern Standard Gauge Railway (SGR) connecting Mombasa to Nairobi is inaugurated", side: "left" },
                { year: "2019", event: "SGR is extended to Naivasha", side: "right" },
                { year: "2022", event: "Launch of upgraded digital ticketing and passenger information systems", side: "left" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center justify-between mb-8 ${item.side === 'right' ? 'flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="w-5/12"></div>
                  <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-kenya-red text-white font-bold">
                    <Train className="h-5 w-5" />
                  </div>
                  <div className="w-5/12 p-4 rounded-md bg-background shadow-md">
                    <div className="font-bold text-kenya-red">{item.year}</div>
                    <p className="text-sm">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
