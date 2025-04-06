
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import PopularRoutes from '@/components/home/PopularRoutes';
import Testimonials from '@/components/home/Testimonials';
import StatsSection from '@/components/home/StatsSection';
import TrainAnimation from '@/components/animations/TrainAnimation';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        <Hero />
        <Features />
        <StatsSection />
        <PopularRoutes />
        <TrainAnimation />
        <Testimonials />
        <CallToAction />
      </div>
    </Layout>
  );
};

export default Index;
