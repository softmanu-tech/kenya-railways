
import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, Calendar as CalendarIcon, Search, Train, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState('monday');
  const [searchQuery, setSearchQuery] = useState('');
  
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  
  const scheduleData = {
    monday: [
      { id: 1, train: 'SGR Express', from: 'Nairobi', to: 'Mombasa', departure: '08:00 AM', arrival: '12:30 PM', status: 'On Time' },
      { id: 2, train: 'Intercity Express', from: 'Mombasa', to: 'Nairobi', departure: '09:00 AM', arrival: '01:30 PM', status: 'On Time' },
      { id: 3, train: 'Regional Train', from: 'Nairobi', to: 'Kisumu', departure: '10:30 AM', arrival: '02:00 PM', status: 'Delayed' },
      { id: 4, train: 'Evening Express', from: 'Nairobi', to: 'Mombasa', departure: '03:30 PM', arrival: '08:00 PM', status: 'On Time' },
      { id: 5, train: 'Night Express', from: 'Kisumu', to: 'Nairobi', departure: '07:00 PM', arrival: '10:30 PM', status: 'On Time' }
    ],
    tuesday: [
      { id: 6, train: 'SGR Express', from: 'Nairobi', to: 'Mombasa', departure: '08:00 AM', arrival: '12:30 PM', status: 'On Time' },
      { id: 7, train: 'Intercity Express', from: 'Mombasa', to: 'Nairobi', departure: '09:00 AM', arrival: '01:30 PM', status: 'On Time' },
      { id: 8, train: 'Regional Train', from: 'Nairobi', to: 'Nakuru', departure: '11:00 AM', arrival: '01:00 PM', status: 'On Time' },
      { id: 9, train: 'Evening Express', from: 'Nairobi', to: 'Mombasa', departure: '03:30 PM', arrival: '08:00 PM', status: 'On Time' },
      { id: 10, train: 'Night Express', from: 'Nakuru', to: 'Nairobi', departure: '06:30 PM', arrival: '08:30 PM', status: 'Delayed' }
    ],
    wednesday: [
      { id: 11, train: 'SGR Express', from: 'Nairobi', to: 'Mombasa', departure: '08:00 AM', arrival: '12:30 PM', status: 'On Time' },
      { id: 12, train: 'Intercity Express', from: 'Mombasa', to: 'Nairobi', departure: '09:00 AM', arrival: '01:30 PM', status: 'On Time' },
      { id: 13, train: 'Regional Train', from: 'Nairobi', to: 'Kisumu', departure: '10:30 AM', arrival: '02:00 PM', status: 'On Time' },
      { id: 14, train: 'Evening Express', from: 'Nairobi', to: 'Mombasa', departure: '03:30 PM', arrival: '08:00 PM', status: 'On Time' },
      { id: 15, train: 'Night Express', from: 'Kisumu', to: 'Nairobi', departure: '07:00 PM', arrival: '10:30 PM', status: 'On Time' }
    ],
    thursday: [
      { id: 16, train: 'SGR Express', from: 'Nairobi', to: 'Mombasa', departure: '08:00 AM', arrival: '12:30 PM', status: 'Delayed' },
      { id: 17, train: 'Intercity Express', from: 'Mombasa', to: 'Nairobi', departure: '09:00 AM', arrival: '01:30 PM', status: 'On Time' },
      { id: 18, train: 'Regional Train', from: 'Nairobi', to: 'Eldoret', departure: '10:00 AM', arrival: '02:30 PM', status: 'On Time' },
      { id: 19, train: 'Evening Express', from: 'Nairobi', to: 'Mombasa', departure: '03:30 PM', arrival: '08:00 PM', status: 'On Time' },
      { id: 20, train: 'Night Express', from: 'Eldoret', to: 'Nairobi', departure: '06:00 PM', arrival: '10:30 PM', status: 'On Time' }
    ],
    friday: [
      { id: 21, train: 'SGR Express', from: 'Nairobi', to: 'Mombasa', departure: '08:00 AM', arrival: '12:30 PM', status: 'On Time' },
      { id: 22, train: 'Intercity Express', from: 'Mombasa', to: 'Nairobi', departure: '09:00 AM', arrival: '01:30 PM', status: 'On Time' },
      { id: 23, train: 'Regional Train', from: 'Nairobi', to: 'Kisumu', departure: '10:30 AM', arrival: '02:00 PM', status: 'On Time' },
      { id: 24, train: 'Evening Express', from: 'Nairobi', to: 'Mombasa', departure: '03:30 PM', arrival: '08:00 PM', status: 'On Time' },
      { id: 25, train: 'Night Express', from: 'Kisumu', to: 'Nairobi', departure: '07:00 PM', arrival: '10:30 PM', status: 'Delayed' }
    ],
    saturday: [
      { id: 26, train: 'Weekend Express', from: 'Nairobi', to: 'Mombasa', departure: '07:00 AM', arrival: '11:30 AM', status: 'On Time' },
      { id: 27, train: 'Weekend Express', from: 'Mombasa', to: 'Nairobi', departure: '08:00 AM', arrival: '12:30 PM', status: 'On Time' },
      { id: 28, train: 'Regional Train', from: 'Nairobi', to: 'Nakuru', departure: '10:00 AM', arrival: '12:00 PM', status: 'On Time' },
      { id: 29, train: 'Afternoon Express', from: 'Nairobi', to: 'Mombasa', departure: '02:00 PM', arrival: '06:30 PM', status: 'On Time' },
      { id: 30, train: 'Evening Express', from: 'Nakuru', to: 'Nairobi', departure: '05:00 PM', arrival: '07:00 PM', status: 'On Time' }
    ],
    sunday: [
      { id: 31, train: 'Weekend Express', from: 'Nairobi', to: 'Mombasa', departure: '09:00 AM', arrival: '01:30 PM', status: 'On Time' },
      { id: 32, train: 'Weekend Express', from: 'Mombasa', to: 'Nairobi', departure: '10:00 AM', arrival: '02:30 PM', status: 'On Time' },
      { id: 33, train: 'Regional Train', from: 'Nairobi', to: 'Kisumu', departure: '11:00 AM', arrival: '02:30 PM', status: 'On Time' },
      { id: 34, train: 'Evening Express', from: 'Kisumu', to: 'Nairobi', departure: '04:00 PM', arrival: '07:30 PM', status: 'On Time' },
      { id: 35, train: 'Night Express', from: 'Nairobi', to: 'Mombasa', departure: '06:00 PM', arrival: '10:30 PM', status: 'On Time' }
    ]
  };
  
  const filteredSchedule = scheduleData[selectedDay]?.filter(train => 
    train.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
    train.to.toLowerCase().includes(searchQuery.toLowerCase()) ||
    train.train.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">Train Schedule</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              View our comprehensive train schedule and plan your journey across Kenya.
            </p>
          </motion.div>
          
          {/* Search and Filter */}
          <motion.div 
            className="mb-8 bg-muted p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search routes or trains..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
              
              <div className="relative">
                <Select onValueChange={(value) => console.log(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select route" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Routes</SelectItem>
                    <SelectItem value="nairobi-mombasa">Nairobi - Mombasa</SelectItem>
                    <SelectItem value="mombasa-nairobi">Mombasa - Nairobi</SelectItem>
                    <SelectItem value="nairobi-kisumu">Nairobi - Kisumu</SelectItem>
                    <SelectItem value="kisumu-nairobi">Kisumu - Nairobi</SelectItem>
                    <SelectItem value="nairobi-nakuru">Nairobi - Nakuru</SelectItem>
                    <SelectItem value="nakuru-nairobi">Nakuru - Nairobi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="bg-kenya-red hover:bg-kenya-red/90 text-white">
                <CalendarIcon className="mr-2 h-4 w-4" />
                Pick a Date
              </Button>
            </div>
          </motion.div>
          
          {/* Schedule Tabs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-background rounded-lg shadow-md overflow-hidden"
          >
            <Tabs defaultValue={selectedDay} onValueChange={setSelectedDay}>
              <div className="overflow-x-auto">
                <TabsList className="w-full justify-start p-0 bg-muted">
                  {days.map((day) => (
                    <TabsTrigger 
                      key={day} 
                      value={day}
                      className="py-4 px-6 data-[state=active]:bg-background rounded-none"
                    >
                      {day.charAt(0).toUpperCase() + day.slice(1)}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {days.map((day) => (
                <TabsContent key={day} value={day} className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Train</TableHead>
                          <TableHead>From</TableHead>
                          <TableHead>To</TableHead>
                          <TableHead>Departure</TableHead>
                          <TableHead>Arrival</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredSchedule.map((train) => (
                          <motion.tr
                            key={train.id}
                            variants={itemVariants}
                            whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                            className="border-b"
                          >
                            <TableCell className="font-medium">
                              <div className="flex items-center">
                                <Train className="h-4 w-4 mr-2 text-kenya-red" />
                                {train.train}
                              </div>
                            </TableCell>
                            <TableCell>{train.from}</TableCell>
                            <TableCell>{train.to}</TableCell>
                            <TableCell>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                                {train.departure}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                                {train.arrival}
                              </div>
                            </TableCell>
                            <TableCell>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                train.status === 'On Time' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-amber-100 text-amber-800'
                              }`}>
                                {train.status}
                              </span>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button 
                                size="sm" 
                                className="bg-kenya-red hover:bg-kenya-red/90 text-white"
                                onClick={() => window.location.href = '/booking'}
                              >
                                Book
                              </Button>
                            </TableCell>
                          </motion.tr>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
          
          {/* Popular Routes */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-8 text-center font-playfair">Popular Routes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  from: "Nairobi",
                  to: "Mombasa",
                  image: "https://images.unsplash.com/photo-1596005554384-d293674c91d7?q=80&w=1974&auto=format&fit=crop",
                  duration: "4.5 hours",
                  price: "KSh 1,000"
                },
                {
                  from: "Nairobi",
                  to: "Kisumu",
                  image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8a?q=80&w=2021&auto=format&fit=crop",
                  duration: "3.5 hours",
                  price: "KSh 800"
                },
                {
                  from: "Nairobi",
                  to: "Nakuru",
                  image: "https://images.unsplash.com/photo-1528728935509-22fb14722a30?q=80&w=2070&auto=format&fit=crop",
                  duration: "2 hours",
                  price: "KSh 500"
                }
              ].map((route, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-md bg-background"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={route.image} 
                      alt={`${route.from} to ${route.to}`}
                      className="w-full h-full object-cover"
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
                    
                    <Button 
                      className="w-full bg-kenya-red hover:bg-kenya-red/90 text-white"
                      onClick={() => window.location.href = '/booking'}
                    >
                      Book This Route
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Travel Information */}
          <motion.div
            className="mt-16 bg-muted rounded-lg p-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center font-playfair">Travel Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">Passenger Guidelines</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-kenya-red mr-2">•</span>
                    Arrive at least 30 minutes before departure time
                  </li>
                  <li className="flex items-start">
                    <span className="text-kenya-red mr-2">•</span>
                    Carry a valid ID for verification
                  </li>
                  <li className="flex items-start">
                    <span className="text-kenya-red mr-2">•</span>
                    Luggage allowance: 30kg per passenger
                  </li>
                  <li className="flex items-start">
                    <span className="text-kenya-red mr-2">•</span>
                    Children under 3 years travel free
                  </li>
                  <li className="flex items-start">
                    <span className="text-kenya-red mr-2">•</span>
                    No smoking allowed on the train
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">Booking Information</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-kenya-red mr-2">•</span>
                    Online booking closes 2 hours before departure
                  </li>
                  <li className="flex items-start">
                    <span className="text-kenya-red mr-2">•</span>
                    Cancellations made 24 hours before departure receive a full refund
                  </li>
                  <li className="flex items-start">
                    <span className="text-kenya-red mr-2">•</span>
                    Group discounts available for 10+ passengers
                  </li>
                  <li className="flex items-start">
                    <span className="text-kenya-red mr-2">•</span>
                    Senior citizens and students get a 10% discount
                  </li>
                  <li className="flex items-start">
                    <span className="text-kenya-red mr-2">•</span>
                    Tickets can be purchased at all major stations
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;
