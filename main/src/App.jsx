import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import LogIn from "./pages/LogIn";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactPage from "./pages/ContactPage";
import ECommerceSite from "./pages/ECommerceSite";
import LandingPage from "./pages/LandingPage";
import ListingMapView from "./pages/ListingMapView";
import AboutUs from "./pages/AboutUs";
import AgentProfile from "./pages/AgentProfile";
import NewPassword from "./pages/NewPassword";
import EnterOTP from "./pages/EnterOTP";
import PropertyDetails from "./pages/PropertyDetails";
import CreateAccount from "./pages/CreateAccount";
import Error1 from "./pages/Error1";
import ResetPassword from "./pages/ResetPassword";
import BlogDetails from "./pages/BlogDetails";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/log-in":
        title = "";
        metaDescription = "";
        break;
      case "/privacy-policy":
        title = "";
        metaDescription = "";
        break;
      case "/contact-page":
        title = "";
        metaDescription = "";
        break;
      case "/01-ecommerce-site":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/listing-map-view":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/agent-profile":
        title = "";
        metaDescription = "";
        break;
      case "/new-password":
        title = "";
        metaDescription = "";
        break;
      case "/enter-otp":
        title = "";
        metaDescription = "";
        break;
      case "/property-details":
        title = "";
        metaDescription = "";
        break;
      case "/create-account":
        title = "";
        metaDescription = "";
        break;
      case "/404-error":
        title = "";
        metaDescription = "";
        break;
      case "/reset-password":
        title = "";
        metaDescription = "";
        break;
      case "/blog-details":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<BlogPage />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/contact-page" element={<ContactPage />} />
      <Route path="/01-ecommerce-site" element={<ECommerceSite />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/listing-map-view" element={<ListingMapView />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/agent-profile" element={<AgentProfile />} />
      <Route path="/new-password" element={<NewPassword />} />
      <Route path="/enter-otp" element={<EnterOTP />} />
      <Route path="/property-details" element={<PropertyDetails />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/404-error" element={<Error1 />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/blog-details" element={<BlogDetails />} />
    </Routes>
  );
}
export default App;
