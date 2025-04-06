
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting Kenya Railways. We'll get back to you soon.",
        variant: "default",
      });
    }, 1000);
  };
  
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Head Office",
      details: [
        "Kenya Railways Headquarters",
        "Workshop Road, off Haile Selassie Avenue",
        "Nairobi, Kenya"
      ]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Numbers",
      details: [
        "Main Line: +254 20 222 1111",
        "Customer Support: +254 20 222 2222",
        "Booking: +254 20 222 3333"
      ]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Addresses",
      details: [
        "General Inquiries: info@kenyarailways.co.ke",
        "Customer Support: support@kenyarailways.co.ke",
        "Bookings: bookings@kenyarailways.co.ke"
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed"
      ]
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };
  
  return (
    <Layout>
      <motion.div 
        className="pt-32 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hero Section */}
        <section className="relative mb-20">
          <div className="absolute inset-0 bg-primary z-0" />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute inset-0 overflow-hidden z-0">
            <img 
              src="https://images.unsplash.com/photo-1605493725774-3df520dee1bc?q=80&w=2070&auto=format&fit=crop" 
              alt="Kenya Railways Contact" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-20 py-20">
            <motion.div 
              className="max-w-2xl mx-auto text-center text-white"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">Contact Us</h1>
              <p className="text-xl text-white/90">
                We'd love to hear from you. Reach out to us for inquiries, feedback, or assistance.
              </p>
            </motion.div>
          </div>
        </section>
        
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Contact Information */}
            <motion.section 
              className="mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="bg-background rounded-xl p-6 shadow-md"
                  >
                    <div className="text-kenya-red mb-4">{info.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                    <ul className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <li key={idx} className="text-muted-foreground">{detail}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>
            
            {/* Contact Form and Map */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bg-background rounded-xl shadow-md p-8">
                  <h2 className="text-2xl font-bold font-playfair mb-6">Send Us a Message</h2>
                  
                  {formSubmitted ? (
                    <motion.div 
                      className="text-center py-10"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-kenya-green mb-4">
                        <CheckCircle className="h-16 w-16 mx-auto" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for contacting Kenya Railways. We'll get back to you as soon as possible.
                      </p>
                      <Button 
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            subject: '',
                            message: ''
                          });
                        }}
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-sm mb-2">Your Name</label>
                          <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm mb-2">Your Email</label>
                          <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label className="block text-sm mb-2">Subject</label>
                        <select 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="booking">Booking Assistance</option>
                          <option value="feedback">Feedback</option>
                          <option value="complaint">Complaint</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div className="mb-6">
                        <label className="block text-sm mb-2">Message</label>
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5} 
                          className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Enter your message"
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit"
                        className="w-full bg-kenya-red hover:bg-kenya-red/90 text-white"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bg-background rounded-xl shadow-md overflow-hidden h-full">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold font-playfair mb-2">Our Location</h2>
                    <p className="text-muted-foreground mb-4">Find us at our headquarters in Nairobi, Kenya</p>
                  </div>
                  <div className="h-[400px] relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819917806928!2d36.82681851426773!3d-1.2898936359734286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10a10c4c940d%3A0xd5d7ed77c6243e20!2sKenya%20Railways%20Headquarters!5e0!3m2!1sen!2s!4v1651234567890!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Kenya Railways Headquarters Map"
                      className="absolute inset-0"
                    />
                  </div>
                </div>
              </motion.div>
            </section>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Contact;
