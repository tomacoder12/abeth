'use client';

import {
  Hero, 
  AboutSection,
  PracticeSection,
  UpcomingEvents,
  ParallaxYoga,
  Testimonials,
} from './components';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <PracticeSection />
      <UpcomingEvents />
      <ParallaxYoga />
      <Testimonials />
    </>
  );
}