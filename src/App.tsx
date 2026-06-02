import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedCompanies from "./components/TrustedCompanies";
import About from "./components/About";
import Solutions from "./components/Solutions";
import Timeline from "./components/Timeline";
import WhyChooseUs from "./components/WhyChooseUs";
import ERPBenefits from "./components/ERPBenefits";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import PageTemplate from "./components/PageTemplate";
import { PAGES_REGISTRY } from "./dataPages";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedSolutionId, setSelectedSolutionId] = useState("");
  const { pathname } = useLocation();

  // Scroll helper if pathname or hash changes
  useEffect(() => {
    if (pathname === "/") {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });
          return;
        }
      }
    }
    // Always default scroll to top on other pages
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleOpenContact = (solutionId?: string) => {
    if (solutionId) {
      setSelectedSolutionId(solutionId);
    } else {
      setSelectedSolutionId("");
    }
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-900 overflow-x-hidden antialiased">
      
      {/* 1. Global Navigation Bar */}
      <Navbar onDemoClick={handleOpenContact} />

      <Routes>
        {/* HOMEPAGE ROUTE */}
        <Route
          path="/"
          element={
            <>
              {/* 2. Hero Section */}
              <Hero onDemoClick={handleOpenContact} />

              {/* 3. Trusted Logo Carousel Line */}
              <TrustedCompanies />

              {/* 4. About & Achievements (Expertise) */}
              <About />

              {/* 5. Sage Solutions grid & Details sheets */}
              <Solutions onDemoClick={handleOpenContact} />

              {/* 6. Interactive Process Delivery Timeline */}
              <Timeline onDemoClick={handleOpenContact} />

              {/* 7. Why Choose Us (Bento grid) */}
              <WhyChooseUs />

              {/* 8. ERP Benefits (Before/After toggles) */}
              <ERPBenefits />

              {/* 9. Client Testimonials slider */}
              <Testimonials />

              {/* 10. Educational Blog cards & Read draws */}
              <Blog onDemoClick={handleOpenContact} limit={3} />

              {/* 11. Final Conversion Trigger CTA */}
              <FinalCTA onDemoClick={() => handleOpenContact()} />

              {/* 12. Corporate Address & Legal Links Footer */}
              <Footer onNavClick={handleScrollToSection} onDemoClick={handleOpenContact} />
            </>
          }
        />

        {/* CATCH ALL FALLBACK TO TEMPLATE */}
        <Route path="*" element={<PageTemplate onDemoClick={handleOpenContact} />} />
      </Routes>

      {/* Leads / Demos Capture Modal Form */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        initialSelectedSolution={selectedSolutionId}
      />
    </div>
  );
}
