//app
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// pages
import Home from "./pages/home/Home";
import ByStagesPage from "./pages/solution/ByStragesPage.jsx";
import ByIndustryPage from "./pages/solution/ByIndustryPage.jsx";
import ErpPage from "./pages/product/ERP/ErpPage.jsx";
import CompanyPage from "./pages/company/CompanyPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ContactForm from "./components/contactForm/ContactForm.jsx";
import OdooAppPage from "./pages/product/OdooApp/OdooAppPage.jsx";
import KnowledgePage from "./pages/knowledge/KnowledgePage.jsx";
import MarketingPage from "./pages/service/Marketing/MarketingPage.jsx";

// components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";



/* ================= ROUTE WRAPPER ================= */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <main className="min-h-screen pt-16">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            {/* solution */}
            <Route path="/solutions/stages/:slug" element={<ByStagesPage />} />
            <Route path="/solutions/industry/:slug" element={<ByIndustryPage />} />
            {/* product */}
            <Route path="/products/erp/:slug" element={<ErpPage />} />
            <Route path="/products/odooApp/:slug" element={<OdooAppPage />} />
            {/* service */}
            {/* <Route path="/services/appDevelopment/:slug" element={<ServicePage />} /> */}
            <Route path="/services/marketing/:slug" element={<MarketingPage />} />
            {/* <Route path="/services/grapicDesign/:slug" element={<ServicePage />} /> */}
            
            {/* company */}
            <Route path="/company/:slug" element={<CompanyPage />} />
            {/* knowledge */}
            <Route path="/knowledge/:slug" element={<KnowledgePage/>}/>

            <Route path="/Contact" element={<ContactForm />} />
            {/* 404 */}
            <Route
              path="*"
              element={
                <div className="flex items-center justify-center h-[60vh] text-xl font-semibold">
                  Page Not Found
                </div>
              }
            />
          </Routes>
        </main>
      </AnimatePresence>
    </>
  );
}

/* ================= APP ================= */
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
