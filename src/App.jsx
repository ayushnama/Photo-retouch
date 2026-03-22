import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './component.jsx/Navbar';
import ImageSlider from './component.jsx/HeroSection';
import WelcomeSection from './component.jsx/Section1';
import ServicesSection from './component.jsx/OurServices';
import VisionSection from './component.jsx/OurVision';
import MissionSection from './component.jsx/MissionSection';
import VideoServices from './component.jsx/VideoService';
import StatsSection from './component.jsx/StatsSection';
import FeaturesSection from './component.jsx/OurFeatures';
import Footer from './component.jsx/Footer';
import ServicesItem from './component.jsx/OurServicesItem';
import JewelryRetouchingPage from "./component.jsx/JewelryRetouchingPage";
import BeautyRetouchingPage from "./component.jsx/BeautyRetouchingPage";
import ColorCorrectionPage from "./component.jsx/ColorCorrectionPage.jsx";
import AboutUsPage from "./component.jsx/AboutUsPage";
import ContactUsPage from "./component.jsx/ContactUsPage";
import BlogPage from "./component.jsx/BlogPage";
import PrivacyPolicyPage from "./component.jsx/Policy";

function HomePage() {
  return (
    <>
      <Navbar />
      <ImageSlider />
      <WelcomeSection />
      <ServicesSection />
      <VisionSection />
      <MissionSection />
      <VideoServices />
      <StatsSection />
      <FeaturesSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/newborn-baby-retouching" element={<ServicesItem />} />
        <Route path="/jewelry-retouching-page" element={<JewelryRetouchingPage />} />
        <Route path="/beauty-retouching-page" element={<BeautyRetouchingPage />} />
        <Route path="/color-correction-page" element={<ColorCorrectionPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;