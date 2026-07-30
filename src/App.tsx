import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClientLogoSlider } from './components/ClientLogoSlider';
import { ServicesSliders } from './components/ServicesSliders';
import { SocialSidebar } from './components/SocialSidebar';
import { DiscussIdea } from './components/DiscussIdea';
import { HowItWorks } from './components/HowItWorks';
import { StatsCounter } from './components/StatsCounter';
import { PricingPackages } from './components/PricingPackages';
import { ProjectShowcase } from './components/ProjectShowcase';
import { DarkServicesTicker } from './components/DarkServicesTicker';
import { GeoAiOverviewSection } from './components/GeoAiOverviewSection';
import { HappyClients } from './components/HappyClients';
import { SanityPosts } from './components/SanityPosts';
import { BottomLeadForm } from './components/BottomLeadForm';
import { Footer } from './components/Footer';
import { DiscountModal } from './components/DiscountModal';
import { BookCallModal } from './components/BookCallModal';
import { FloatingContact } from './components/FloatingContact';
import { InquiriesDrawer } from './components/InquiriesDrawer';
import { WhatsAppLeadModal } from './components/WhatsAppLeadModal';
import { AdminAuthModal } from './components/AdminAuthModal';
import { SeoStructuredData } from './components/SeoStructuredData';
import { getStoredLeads } from './lib/leadStorage';
import { PackageItem, LeadInquiry } from './types';

export function App() {
  const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);
  const [isBookCallModalOpen, setIsBookCallModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);
  const [isInquiriesDrawerOpen, setIsInquiriesDrawerOpen] = useState(false);
  const [isAdminAuthModalOpen, setIsAdminAuthModalOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [leads, setLeads] = useState<LeadInquiry[]>([]);
  const [activeWhatsAppLead, setActiveWhatsAppLead] = useState<LeadInquiry | null>(null);

  // Load leads on mount
  useEffect(() => {
    refreshLeads();
  }, []);

  const refreshLeads = () => {
    const data = getStoredLeads();
    setLeads(data);
  };

  const handleOpenAdminLeads = () => {
    if (isAdminAuthenticated) {
      setIsInquiriesDrawerOpen(true);
    } else {
      setIsAdminAuthModalOpen(true);
    }
  };

  const handleLeadSubmitted = (newLead?: LeadInquiry) => {
    refreshLeads();
    if (newLead) {
      setActiveWhatsAppLead(newLead);
    }
  };

  const handleClearLeads = () => {
    localStorage.removeItem('clickin_digital_leads');
    setLeads([]);
  };

  const handleSelectPackage = (pkg: PackageItem) => {
    setSelectedPackage(pkg);
    setIsBookCallModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-slate-900 selection:text-white">
      {/* Search Engine & AI Recommendations JSON-LD Structured Data */}
      <SeoStructuredData />

      {/* Top Header */}
      <Header
        onBookCallClick={() => {
          setSelectedPackage(null);
          setIsBookCallModalOpen(true);
        }}
        onDiscountClick={() => setIsDiscountModalOpen(true)}
        onViewLeadsClick={handleOpenAdminLeads}
        leadCount={leads.length}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onDiscountClick={() => setIsDiscountModalOpen(true)}
          onLeadSubmitted={handleLeadSubmitted}
        />

        {/* Gently Moving Client Logo & Trust Slider */}
        <ClientLogoSlider />

        {/* Home Page Services Sliders Section */}
        <ServicesSliders
          onExploreClick={() => {
            setSelectedPackage(null);
            setIsBookCallModalOpen(true);
          }}
        />

        {/* Discuss Your Idea Callout Banner */}
        <DiscussIdea
          onGetInTouchClick={() => {
            setSelectedPackage(null);
            setIsBookCallModalOpen(true);
          }}
        />

        {/* How It Works ? 3 Steps */}
        <HowItWorks
          onGetInTouchClick={() => {
            setSelectedPackage(null);
            setIsBookCallModalOpen(true);
          }}
        />

        {/* Key Stats Counter Banner */}
        <StatsCounter />

        {/* Pricing Packages (Starter, Business, E-Commerce) */}
        <PricingPackages
          onSelectPackage={handleSelectPackage}
        />

        {/* Project Showcase with Category Filter & Modal */}
        <ProjectShowcase
          onContactClick={() => {
            setSelectedPackage(null);
            setIsBookCallModalOpen(true);
          }}
        />

        {/* Dark Background Services & Keywords Ticker (SEO, GEO, Website Design) */}
        <DarkServicesTicker />

        {/* Generative Engine Optimization (GEO) & Local Knowledge Hub */}
        <GeoAiOverviewSection
          onBookCallClick={() => {
            setSelectedPackage(null);
            setIsBookCallModalOpen(true);
          }}
        />

        {/* Happy Clients & Verified Success Stories Section */}
        <HappyClients
          onBookCallClick={() => {
            setSelectedPackage(null);
            setIsBookCallModalOpen(true);
          }}
        />

        {/* Sanity CMS Posts Section */}
        <SanityPosts
          onReadMoreClick={() => {
            setSelectedPackage(null);
            setIsBookCallModalOpen(true);
          }}
        />

        {/* Bottom Lead Capture Form */}
        <BottomLeadForm
          onLeadSubmitted={handleLeadSubmitted}
        />
      </main>

      {/* Footer */}
      <Footer
        onGetInTouchClick={() => {
          setSelectedPackage(null);
          setIsBookCallModalOpen(true);
        }}
        onViewLeadsClick={handleOpenAdminLeads}
      />

      {/* Modals & Overlays */}
      <DiscountModal
        isOpen={isDiscountModalOpen}
        onClose={() => setIsDiscountModalOpen(false)}
        onLeadSubmitted={handleLeadSubmitted}
      />

      <BookCallModal
        isOpen={isBookCallModalOpen}
        onClose={() => {
          setIsBookCallModalOpen(false);
          setSelectedPackage(null);
        }}
        selectedPackage={selectedPackage}
        onLeadSubmitted={handleLeadSubmitted}
      />

      {/* Admin Security Password Modal */}
      <AdminAuthModal
        isOpen={isAdminAuthModalOpen}
        onClose={() => setIsAdminAuthModalOpen(false)}
        onAuthenticated={() => {
          setIsAdminAuthenticated(true);
          setIsAdminAuthModalOpen(false);
          setIsInquiriesDrawerOpen(true);
        }}
      />

      {/* Protected Admin Leads Drawer */}
      <InquiriesDrawer
        isOpen={isInquiriesDrawerOpen}
        onClose={() => setIsInquiriesDrawerOpen(false)}
        leads={leads}
        onClearLeads={handleClearLeads}
        onLockAdmin={() => setIsAdminAuthenticated(false)}
      />

      {/* Instant WhatsApp Pop-Up Modal triggered on ANY form submission */}
      <WhatsAppLeadModal
        isOpen={!!activeWhatsAppLead}
        onClose={() => setActiveWhatsAppLead(null)}
        leadData={activeWhatsAppLead}
      />

      {/* Fixed Social Media Sidebar */}
      <SocialSidebar />

      {/* Floating Action WhatsApp/Call Controls */}
      <FloatingContact />

    </div>
  );
}

export default App;


