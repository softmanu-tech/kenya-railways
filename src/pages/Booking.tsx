
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, CreditCard, Users, Train as TrainIcon, Luggage, Check, Shield } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TrainClass {
  id: string;
  name: string;
  price: string;
  features: string[];
}

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTrain, setSelectedTrain] = useState<string | null>(null);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [passengerCount, setPassengerCount] = useState(1);
  
  const cities = ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika'];
  
  const trains = [
    { id: 'sgr-1', name: 'SGR Express', time: '08:00', duration: '4h 30m' },
    { id: 'sgr-2', name: 'Intercity Express', time: '10:30', duration: '4h 00m' },
    { id: 'sgr-3', name: 'Evening Express', time: '15:30', duration: '4h 30m' }
  ];
  
  const trainClasses: TrainClass[] = [
    {
      id: 'first',
      name: 'First Class',
      price: 'KSh 3,000',
      features: ['Priority boarding', 'Extra legroom', 'Complimentary meals', 'Wi-Fi', 'Power outlets']
    },
    {
      id: 'business',
      name: 'Business Class',
      price: 'KSh 2,000',
      features: ['Reserved seating', 'More legroom', 'Complimentary snacks', 'Wi-Fi']
    },
    {
      id: 'economy',
      name: 'Economy Class',
      price: 'KSh 1,000',
      features: ['Standard seating', 'Basic amenities']
    }
  ];
  
  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const motionProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4 }
  };
  
  return (
    <Layout>
      <motion.div 
        className="pt-32 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">Book Your Journey</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the convenience and comfort of Kenya Railways by booking your next trip.
            </p>
          </motion.div>
          
          {/* Booking Progress */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="flex justify-between items-center">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex-1 flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${currentStep >= step ? 'bg-kenya-red text-white' : 'bg-muted text-muted-foreground'}`}>
                    {step}
                  </div>
                  <div className="text-sm mt-2 text-center hidden md:block">
                    {step === 1 && 'Select Journey'}
                    {step === 2 && 'Choose Train'}
                    {step === 3 && 'Passenger Details'}
                    {step === 4 && 'Payment'}
                  </div>
                </div>
              ))}
            </div>
            <div className="relative mt-3">
              <div className="absolute top-0 left-0 right-0 h-1 bg-muted">
                <motion.div 
                  className="h-full bg-kenya-red"
                  initial={{ width: '0%' }}
                  animate={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            {/* Step 1: Select Journey */}
            {currentStep === 1 && (
              <motion.div {...motionProps} className="p-8">
                <h2 className="text-2xl font-bold mb-6">Select Your Journey</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm mb-2">From</label>
                    <select className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Select Origin</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm mb-2">To</label>
                    <select className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Select Destination</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm mb-2">Date of Journey</label>
                    <div className="relative">
                      <input 
                        type="date" 
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm mb-2">Passengers</label>
                    <div className="flex items-center border border-border rounded-md overflow-hidden">
                      <button 
                        className="px-4 py-3 bg-muted text-foreground"
                        onClick={() => setPassengerCount(Math.max(1, passengerCount - 1))}
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        className="w-full p-3 text-center border-none focus:outline-none"
                        value={passengerCount}
                        readOnly
                      />
                      <button 
                        className="px-4 py-3 bg-muted text-foreground"
                        onClick={() => setPassengerCount(Math.min(10, passengerCount + 1))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end mt-8">
                  <Button 
                    onClick={nextStep}
                    className="bg-kenya-red hover:bg-kenya-red/90 text-white"
                  >
                    Find Trains
                  </Button>
                </div>
              </motion.div>
            )}
            
            {/* Step 2: Select Train and Class */}
            {currentStep === 2 && (
              <motion.div {...motionProps} className="p-8">
                <h2 className="text-2xl font-bold mb-6">Select Train & Class</h2>
                
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">Available Trains</h3>
                  <RadioGroup value={selectedTrain || ''} onValueChange={setSelectedTrain}>
                    <div className="space-y-4">
                      {trains.map((train) => (
                        <div 
                          key={train.id}
                          className={`border border-border rounded-lg p-4 transition-colors ${selectedTrain === train.id ? 'border-kenya-red bg-kenya-red/5' : ''}`}
                        >
                          <RadioGroupItem value={train.id} id={train.id} className="sr-only" />
                          <Label 
                            htmlFor={train.id}
                            className="flex flex-col md:flex-row md:items-center justify-between w-full cursor-pointer"
                          >
                            <div className="flex items-center mb-2 md:mb-0">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${selectedTrain === train.id ? 'bg-kenya-red text-white' : 'bg-muted'}`}>
                                <TrainIcon className="h-4 w-4" />
                              </div>
                              <div>
                                <div className="font-medium">{train.name}</div>
                                <div className="text-sm text-muted-foreground">Nairobi to Mombasa</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="text-right">
                                <div className="flex items-center text-sm text-muted-foreground">
                                  <Clock className="h-4 w-4 mr-1" />
                                  <span>{train.time}</span>
                                </div>
                                <div className="text-sm">{train.duration}</div>
                              </div>
                              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedTrain === train.id ? 'border-kenya-red' : 'border-muted'}`}>
                                {selectedTrain === train.id && <Check className="h-3 w-3 text-kenya-red" />}
                              </div>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">Select Travel Class</h3>
                  <RadioGroup value={selectedClass || ''} onValueChange={setSelectedClass}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {trainClasses.map((tClass) => (
                        <div 
                          key={tClass.id}
                          className={`border border-border rounded-lg p-4 transition-colors ${selectedClass === tClass.id ? 'border-kenya-red bg-kenya-red/5' : ''}`}
                        >
                          <RadioGroupItem value={tClass.id} id={tClass.id} className="sr-only" />
                          <Label 
                            htmlFor={tClass.id}
                            className="flex flex-col h-full cursor-pointer"
                          >
                            <div className="flex justify-between items-start mb-3">
                              <div className="font-medium">{tClass.name}</div>
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedClass === tClass.id ? 'border-kenya-red' : 'border-muted'}`}>
                                {selectedClass === tClass.id && <Check className="h-3 w-3 text-kenya-red" />}
                              </div>
                            </div>
                            <div className="font-bold text-kenya-red mb-3">{tClass.price}</div>
                            <div className="text-sm text-muted-foreground flex-grow">
                              <ul className="space-y-1">
                                {tClass.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <Check className="h-4 w-4 mr-2 text-kenya-red flex-shrink-0 mt-0.5" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="flex justify-between mt-8">
                  <Button 
                    variant="outline" 
                    onClick={prevStep}
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={nextStep}
                    className="bg-kenya-red hover:bg-kenya-red/90 text-white"
                    disabled={!selectedTrain || !selectedClass}
                  >
                    Continue to Passenger Details
                  </Button>
                </div>
              </motion.div>
            )}
            
            {/* Step 3: Passenger Details */}
            {currentStep === 3 && (
              <motion.div {...motionProps} className="p-8">
                <h2 className="text-2xl font-bold mb-6">Passenger Details</h2>
                
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">Main Passenger</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter first name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter last name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm mb-2">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter email address"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm mb-2">ID Type</label>
                      <select className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                        <option value="">Select ID Type</option>
                        <option value="national-id">National ID</option>
                        <option value="passport">Passport</option>
                        <option value="driving-license">Driving License</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm mb-2">ID Number</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter ID number"
                      />
                    </div>
                  </div>
                </div>
                
                {passengerCount > 1 && (
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium">Additional Passengers</h3>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-xs"
                      >
                        Add More
                      </Button>
                    </div>
                    
                    {[...Array(passengerCount - 1)].map((_, index) => (
                      <div key={index} className="border border-border rounded-lg p-4 mb-4">
                        <h4 className="font-medium mb-3">Passenger {index + 2}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label className="block text-sm mb-2">First Name</label>
                            <input 
                              type="text" 
                              className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                              placeholder="Enter first name"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm mb-2">Last Name</label>
                            <input 
                              type="text" 
                              className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                              placeholder="Enter last name"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm mb-2">ID Type</label>
                            <select className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                              <option value="">Select ID Type</option>
                              <option value="national-id">National ID</option>
                              <option value="passport">Passport</option>
                              <option value="driving-license">Driving License</option>
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-sm mb-2">ID Number</label>
                            <input 
                              type="text" 
                              className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                              placeholder="Enter ID number"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">Additional Services</h3>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="extra-luggage" 
                        className="mr-2"
                      />
                      <label htmlFor="extra-luggage" className="flex items-center">
                        <Luggage className="h-4 w-4 mr-2" />
                        <span>Extra Luggage (+ KSh 500)</span>
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="travel-insurance" 
                        className="mr-2"
                      />
                      <label htmlFor="travel-insurance" className="flex items-center">
                        <Shield className="h-4 w-4 mr-2" />
                        <span>Travel Insurance (+ KSh 300)</span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <Button 
                    variant="outline" 
                    onClick={prevStep}
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={nextStep}
                    className="bg-kenya-red hover:bg-kenya-red/90 text-white"
                  >
                    Continue to Payment
                  </Button>
                </div>
              </motion.div>
            )}
            
            {/* Step 4: Payment */}
            {currentStep === 4 && (
              <motion.div {...motionProps} className="p-8">
                <h2 className="text-2xl font-bold mb-6">Payment</h2>
                
                <div className="bg-muted p-4 rounded-lg mb-8">
                  <h3 className="font-medium mb-2">Journey Summary</h3>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Route:</span>
                      <span className="font-medium">Nairobi to Mombasa</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span className="font-medium">June 15, 2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Train:</span>
                      <span className="font-medium">SGR Express (08:00)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Class:</span>
                      <span className="font-medium">First Class</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Passengers:</span>
                      <span className="font-medium">{passengerCount}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex justify-between font-medium">
                      <span>Total Amount:</span>
                      <span className="text-kenya-red">KSh 3,000</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">Payment Method</h3>
                  
                  <Tabs defaultValue="card">
                    <TabsList className="w-full grid grid-cols-3 mb-6">
                      <TabsTrigger value="card">Card</TabsTrigger>
                      <TabsTrigger value="mpesa">M-Pesa</TabsTrigger>
                      <TabsTrigger value="bank">Bank Transfer</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="card" className="space-y-4">
                      <div>
                        <label className="block text-sm mb-2">Card Number</label>
                        <div className="relative">
                          <input 
                            type="text" 
                            className="w-full p-3 pl-10 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="**** **** **** ****"
                          />
                          <CreditCard className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm mb-2">Expiry Date</label>
                          <input 
                            type="text" 
                            className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="MM/YY"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm mb-2">CVV</label>
                          <input 
                            type="text" 
                            className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="***"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm mb-2">Cardholder Name</label>
                        <input 
                          type="text" 
                          className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Enter name on card"
                        />
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="mpesa">
                      <div className="text-center p-6 space-y-4">
                        <div className="text-6xl font-bold text-kenya-green">M-PESA</div>
                        <p className="text-muted-foreground">
                          To pay via M-Pesa, press the "Confirm Payment" button. You will receive a prompt on your phone to complete the payment.
                        </p>
                        <p className="font-medium">Enter your M-Pesa registered phone number:</p>
                        <div className="max-w-xs mx-auto">
                          <input 
                            type="tel" 
                            className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="e.g., 07XX XXX XXX"
                          />
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="bank">
                      <div className="bg-muted p-6 rounded-lg">
                        <h4 className="font-medium mb-4">Bank Transfer Instructions</h4>
                        <p className="mb-4">Please transfer the total amount to the following bank account:</p>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Bank Name:</span>
                            <span className="font-medium">Kenya Commercial Bank</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Account Name:</span>
                            <span className="font-medium">Kenya Railways Corporation</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Account Number:</span>
                            <span className="font-medium">1234567890</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Branch:</span>
                            <span className="font-medium">Nairobi Main</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Reference:</span>
                            <span className="font-medium">KR-12345</span>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <p className="text-sm text-muted-foreground">
                            After making the transfer, please upload your payment receipt below:
                          </p>
                          <div className="mt-3">
                            <input 
                              type="file" 
                              className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
                
                <div className="flex justify-between mt-8">
                  <Button 
                    variant="outline" 
                    onClick={prevStep}
                  >
                    Back
                  </Button>
                  <Button 
                    className="bg-kenya-red hover:bg-kenya-red/90 text-white"
                  >
                    Confirm Payment
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Booking;
