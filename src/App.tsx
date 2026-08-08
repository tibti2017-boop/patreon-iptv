import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChannelsBanner } from './components/ChannelsBanner';
import { VodShowcase } from './components/VodShowcase';
import { SportsSection } from './components/SportsSection';
import { FeaturesGrid } from './components/FeaturesGrid';
import { DevicesSection } from './components/DevicesSection';
import { StepsSection } from './components/StepsSection';
import { PricingSection } from './components/PricingSection';
import { ReviewsSection } from './components/ReviewsSection';
import { SeoContentSection } from './components/SeoContentSection';
import { FaqSection } from './components/FaqSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { CatalogueModal } from './components/CatalogueModal';
import { InstallGuideModal } from './components/InstallGuideModal';
import { TrialModal } from './components/TrialModal';
import { ContactModal } from './components/ContactModal';
import { FaqModal } from './components/FaqModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { RefundPolicyModal } from './components/RefundPolicyModal';
import { BlogSection } from './components/BlogSection';
import { BlogModal } from './components/BlogModal';
import { ResellerSection } from './components/ResellerSection';
import { ResellerModal } from './components/ResellerModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { DeviceGuide } from './types';

export function App() {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [orderPlanId, setOrderPlanId] = useState('6-months');
  const [orderScreens, setOrderScreens] = useState(1);
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isRefundOpen, setIsRefundOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isResellerOpen, setIsResellerOpen] = useState(false);
  const [activeGuide, setActiveGuide] = useState<DeviceGuide | null>(null);

  React.useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#reseller' || hash === '#reseller-program') {
        setIsResellerOpen(true);
      } else if (hash === '#blog') {
        setIsBlogOpen(true);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleOpenOrder = (planId: string = '6-months', screensCount: number = 1) => {
    setOrderPlanId(planId);
    setOrderScreens(screensCount);
    setIsOrderOpen(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-orange-500 selection:text-white antialiased">
      {/* Navbar */}
      <Navbar
        onOpenOrder={() => handleOpenOrder()}
        onOpenTrial={() => setIsTrialOpen(true)}
        onOpenCatalogue={() => setIsCatalogueOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenFaq={() => setIsFaqOpen(true)}
        onOpenBlog={() => setIsBlogOpen(true)}
        onOpenReseller={() => setIsResellerOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero onOpenOrder={() => handleOpenOrder()} />

        {/* Live Channels Ticker Banner */}
        <ChannelsBanner />

        {/* Sports Live Section */}
        <SportsSection onOpenOrder={() => handleOpenOrder()} />

        {/* VOD Showcase Section */}
        <VodShowcase onOpenCatalogue={() => setIsCatalogueOpen(true)} />

        {/* Features Advantages */}
        <FeaturesGrid />

        {/* Pricing Plans Grid with Multi-Screen Selector */}
        <PricingSection onSelectPlan={(planId, screens) => handleOpenOrder(planId, screens)} />

        {/* IPTV Reseller Program Banner */}
        <ResellerSection onOpenReseller={() => setIsResellerOpen(true)} />

        {/* Compatible Devices Section */}
        <DevicesSection onOpenInstallGuide={(guide) => setActiveGuide(guide)} />

        {/* 4 Easy Steps */}
        <StepsSection />

        {/* Customer Reviews */}
        <ReviewsSection />

        {/* Blog & Tutorials Showcase Section */}
        <BlogSection onOpenBlog={() => setIsBlogOpen(true)} />

        {/* SEO Editorial & Indexing Guide Section */}
        <SeoContentSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Money-Back Guarantee */}
        <GuaranteeSection onOpenOrder={() => handleOpenOrder()} />
      </main>

      {/* Footer */}
      <Footer
        onOpenOrder={() => handleOpenOrder()}
        onOpenCatalogue={() => setIsCatalogueOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenFaq={() => setIsFaqOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenRefund={() => setIsRefundOpen(true)}
        onOpenBlog={() => setIsBlogOpen(true)}
        onOpenReseller={() => setIsResellerOpen(true)}
      />

      {/* Modals & Floating Drawers */}
      <OrderModal
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        initialPlanId={orderPlanId}
        initialScreensCount={orderScreens}
      />

      <CatalogueModal
        isOpen={isCatalogueOpen}
        onClose={() => setIsCatalogueOpen(false)}
      />

      <InstallGuideModal
        guide={activeGuide}
        onClose={() => setActiveGuide(null)}
      />

      <TrialModal
        isOpen={isTrialOpen}
        onClose={() => setIsTrialOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        onOpenFaq={() => setIsFaqOpen(true)}
      />

      <FaqModal
        isOpen={isFaqOpen}
        onClose={() => setIsFaqOpen(false)}
        onOpenOrder={() => handleOpenOrder()}
        onOpenTrial={() => setIsTrialOpen(true)}
      />

      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      <RefundPolicyModal
        isOpen={isRefundOpen}
        onClose={() => setIsRefundOpen(false)}
        onOpenOrder={() => handleOpenOrder()}
      />

      <BlogModal
        isOpen={isBlogOpen}
        onClose={() => setIsBlogOpen(false)}
        onOpenOrder={() => handleOpenOrder()}
        onOpenTrial={() => setIsTrialOpen(true)}
      />

      <ResellerModal
        isOpen={isResellerOpen}
        onClose={() => setIsResellerOpen(false)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <FloatingWhatsApp />
    </div>
  );
}

export default App;
