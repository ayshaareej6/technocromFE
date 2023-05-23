import React, { useContext } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/navigation";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import Careers from "./screens/Careers";
import Services from "./screens/Services";
import Engagement from "./screens/Engagement";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fonts/Graphik/index.css";
// import "./assets/fonts/Anima/index.css";
import "./assets/fonts/Jost/index.css";
import "./assets/fonts/Comic-Sans/index.css";
import "./assets/css/style.css";
import Resources from "./screens/Resources";
import ScrollToTop from "./helper/ScrollToTop";
import Company from "./screens/Company";
import WebDevelopment from "./screens/WebDevelopment";
import DigitalTesting from "./screens/DigitalTesting";
import TestAutomation from "./screens/TestAutomation";
import AppDevelopment from "./screens/AppDevelopment";
import SecurityTesting from "./screens/SecurityTesting";
import PerformanceTesting from "./screens/PerformanceTesting";
import ManualTesting from "./screens/ManualTesting";
import TestAdvisory from "./screens/TestAdvisory";
import BlogsPage from "./screens/BlogsPage";
import CaseStudiesPage from "./screens/CaseStudiesPage";
import CaseStudyInner from "./screens/CaseStudyInner";
import TermsCondition from "./screens/TermsCondition";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import AdminLogin from "./screens/Admin/Auth/AdminLogin";
import DashBoard from "./screens/Admin/Dashboard";
import SideMenu from "./components/DashboardComponents/SideMenu";
import AddCaseStudy from "./screens/Admin/Dashboard/CaseStudy/addCaseStudy";
import DashBoardJobList from "./screens/Admin/Dashboard/Jobs";
import AddJob from "./screens/Admin/Dashboard/Jobs/AddJob";
import ApplicationList from "./screens/Admin/Dashboard/Jobs/ApplicationList";
import CaseStudyList from "./screens/Admin/Dashboard/CaseStudy";
import ContactQueries from "./screens/Admin/Dashboard/Contact";
import { MainContext } from "./context";
import EditCaseStudy from "./screens/Admin/Dashboard/CaseStudy/editCaseStudy";
import EditJob from "./screens/Admin/Dashboard/Jobs/EditJob";
import BlogsList from "./screens/Admin/Dashboard/Blogs";
import AddBlog from "./screens/Admin/Dashboard/Blogs/AddBlog";
import BlogCategory from "./screens/Admin/Dashboard/Blogs/BlogCategory";
import AddBlogCategory from "./screens/Admin/Dashboard/Blogs/AddBlogCategory";
import EditBlogCategory from "./screens/Admin/Dashboard/Blogs/EditBlogCategory";
import HealthCare from "./screens/HealthCare";
import PointOfSale from "./screens/PointOfSale";
import AdobeManager from "./screens/AdobeManager";
import Banking from "./screens/Banking";
import Ecommerce from "./screens/Ecommerce";
import Expertise from "./screens/Expertise";
import UserApplication from "./screens/Admin/Dashboard/Jobs/UserApplication";
import EditBlog from "./screens/Admin/Dashboard/Blogs/EditBlog";
import BlogsInner from "./screens/BlogsInner";

import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import BusinessIntelligence from "./screens/BusinessIntelligence";

const MainTemplate = () => {
  return (
    <>
      <TawkMessengerReact
        propertyId="6408c99531ebfa0fe7f16f87"
        widgetId="1gr156ss4"
      />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

const DashboardTemplate = () => {
  return (
    <div className="dashboard-area">
      <SideMenu />
      <div className="dashboard-rightArea">
        <Outlet />
      </div>
    </div>
  );
};

const App = () => {
  const context = useContext(MainContext);

  const LoginOrNot = context.state.LoginedIn;

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* Site Front End Routes */}
        <Route path="/" element={<MainTemplate />}>
          {/* Main Pages Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<Company />} />
          <Route path="/services" element={<Services />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/how-we-work" element={<Engagement />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />

          {/* Case Studies Routes */}
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:postdata" element={<CaseStudyInner />} />

          {/* Blogs Routes */}
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:postdata" element={<BlogsInner />} />

          {/* Privacy Policy + Terms Condition Routes */}
          <Route path="/terms-conditions" element={<TermsCondition />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Admin Login Route */}
          <Route
            path="/admin/login"
            element={
              LoginOrNot ? <Navigate replace to="/admin" /> : <AdminLogin />
            }
          />

          {/* Inner Services Routes */}
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/digital-testing" element={<DigitalTesting />} />
          <Route path="/test-automation" element={<TestAutomation />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/security-testing" element={<SecurityTesting />} />
          <Route path="/performance-testing" element={<PerformanceTesting />} />
          <Route path="/manual-testing" element={<ManualTesting />} />
          <Route path="/test-advisory" element={<TestAdvisory />} />

          {/* Inner Expertise Routes */}
          <Route path="/health-care" element={<HealthCare />} />
          <Route path="/point-of-sale" element={<PointOfSale />} />
          <Route path="/business-intelligence" element={<BusinessIntelligence />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/gaming-apps" element={<AdobeManager />} />
        </Route>

        {/* Admin Panel Routes */}
        <Route
          path="/admin"
          element={
            LoginOrNot ? (
              <DashboardTemplate />
            ) : (
              <Navigate replace to="/admin/login" />
            )
          }
        >
          {/* Admin Side Routes */}
          <Route path="/admin" element={<DashBoard />} />

          <Route path="/admin/case-study-list" element={<CaseStudyList />} />
          <Route path="/admin/add-case-study" element={<AddCaseStudy />} />
          <Route
            path="/admin/edit-case-study/:id"
            element={<EditCaseStudy />}
          />

          <Route path="/admin/job-list" element={<DashBoardJobList />} />
          <Route path="/admin/application-list" element={<ApplicationList />} />
          <Route path="/admin/add-job" element={<AddJob />} />
          <Route path="/admin/edit-job/:id" element={<EditJob />} />

          <Route path="/admin/blog-list" element={<BlogsList />} />
          <Route path="/admin/add-blog" element={<AddBlog />} />
          <Route path="/admin/edit-blog/:id" element={<EditBlog />} />

          <Route path="/admin/blog-category" element={<BlogCategory />} />
          <Route
            path="/admin/add-blog-category"
            element={<AddBlogCategory />}
          />
          <Route
            path="/admin/edit-blog-category/:id"
            element={<EditBlogCategory />}
          />

          <Route path="/admin/contact-queries" element={<ContactQueries />} />

          {/* User Side Routes */}
          <Route
            path="/admin/user-applications"
            element={<UserApplication />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
