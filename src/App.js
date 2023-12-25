// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './layouts/footer';
import Home from './pages/home';
import SingleProduct from './pages/single-product';
import ShippingPage from './pages/shipping';
import BillingPage from './pages/billing';
// import ThankyouPage from './pages/thankyou';
import ThankyouPage2 from './pages/thankyou2';
import ContactUs from './pages/contact-us';
import AboutUs from './pages/about-us';
import TermsAndConditions from './pages/terms';
import PrivacyPolicy from './pages/privacy-policy';
import Categories from './pages/categories';
import { isMobile } from 'react-device-detect';

function App() {
  return (
    <div className={`App ${isMobile?'mobile-view':''}`}>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:slug" element={<Categories />} />
        <Route path="/product/:slug" element={<SingleProduct />} />
        <Route path="/shipping-details" element={<ShippingPage />} />
        <Route path="/billing-details" element={<BillingPage />} />
        <Route path="/thank-you" element={<ThankyouPage2 />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
