import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePageOne from "./pages/HomePage/HomePageOne";
import BackToTop from "./component/BackToTop";
import Preloader from "./component/Preloader";
import HomePageTwo from "./pages/HomePage/HomePageTwo";
import LayoutOne from "./layouts/LayoutOne";
import LayoutTwo from "./layouts/LayoutTwo";
import HomePageThree from "./pages/HomePage/HomePageThree";
import AboutPage from "./pages/AboutPage/AboutPage";
import ListingPage from "./pages/ListingPage/ListingPage";
import PricingPage from "./pages/PricingPage/PricingPage";
import LocationPage from "./pages/LocationPage/LocationPage";
import LocationWisePage from "./pages/LocationWisePage/LocationWisePage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import CategoryListingsPage from "./pages/CategoryListingsPage/CategoryListingsPage";
import ListingDetailsPage from "./pages/ListingDetailsPage/ListingDetailsPage";
import PrivacyPage from "./pages/PrivacyPage/PrivacyPage";
import TermsPage from "./pages/TermsPage/TermsPage";
import FaqPage from "./pages/FaqPage/FaqPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ForgetPage from "./pages/ForgetPage/ForgetPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage/BlogDetailsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  return (
    <Router>
      <Preloader />
      <BackToTop />
      <ScrollToTop />
      <Routes>
        {/* LayoutOne  */}
        <Route path="/" element={<LayoutOne />}>
          {/* Home One */}
          <Route index element={<HomePageOne />} />
        </Route>
        {/* LayoutTwo  */}
        <Route element={<LayoutTwo />}>
          {/* Home Two */}
          <Route path="/index2" element={<HomePageTwo />} />
          {/* Home Three */}
          <Route path="/index3" element={<HomePageThree />} />
          {/* Inner Page*/}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/listings" element={<ListingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/locations" element={<LocationPage />} />
          <Route path="/location-listings" element={<LocationWisePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/category-listings" element={<CategoryListingsPage />} />
          <Route path="/listing-details" element={<ListingDetailsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog-details" element={<BlogDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forget-password" element={<ForgetPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* dynamic pages  */}
          <Route
            path="/listing-details/:slug"
            element={<ListingDetailsPage />}
          />
          <Route path="/blog-details/:slug" element={<BlogDetailsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
