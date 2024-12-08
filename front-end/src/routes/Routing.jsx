import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import GalleryPage from "../pages/GalleryPage";
import EventPage from "../pages/EventPage";
import BlogPage from "../pages/BlogsPage";
import AdminPage from "../pages/Admin/AdminPage";
import TotalBlogs from "../pages/Admin/TotalBlogsPage";
import TotalEvents from "../pages/Admin/TotalEventsPage";
import CreateEvent from "../pages/Admin/CreateEventPage";
import CreateBlog from "../pages/Admin/CreateBlogPage";
import ResourcePage from "../pages/ResourcesPage";
import BlogDetail from "../pages/BlogDetailPage";
import SignUpPage from "../pages/User/SignUpPage";
import ForgotPasswordPage from "../pages/User/ForgotPasswordPage";
import UserDashboardPage from "../pages/User/UserDashboardPage";
import WorksheetPage from "../pages/User/SelectWorkSheetPage";
import BinaryTrackerPage from "../pages/User/BinaryTrakerPage";
import SelectExercisesPage from "../pages/User/SelectExercisesPage";
import UserProfilePage from "../pages/User/UserProfilePage";
import DialecticalBehaviorTherapyPage from "../pages/User/DialecticalBehaviorTherapyPage";

const Routing = () => {
  return (
    <Routes>
      {/* Catch-all route for 404 */}
      <Route path="*" element={<NotFoundPage />} />

      {/* Main public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* User Dashboard Routes */}
      <Route path="/user-dashboard" element={<UserDashboardPage />} />
      <Route path="/user-dashboard/profile" element={<UserProfilePage />} />
      {/* No Outlet here, we directly render pages */}
      <Route
        path="/user-dashboard/start-exercises"
        element={<DialecticalBehaviorTherapyPage />}
      />
      <Route path="/user-dashboard/worksheets" element={<WorksheetPage />} />
      <Route
        path="/user-dashboard/binary-tracker"
        element={<BinaryTrackerPage />}
      />
      {/* Select Ex type mindfullness, effective, something something*/}

      <Route
        path="/user-dashboard/start-exercises/mindfulness"
        element={<SelectExercisesPage />}
      />
      <Route
        path="/user-dashboard/start-exercises/tolerance"
        element={<SelectExercisesPage />}
      />
      <Route
        path="/user-dashboard/start-exercises/emotions"
        element={<SelectExercisesPage />}
      />
      <Route
        path="/user-dashboard/start-exercises/Interpersonal"
        element={<SelectExercisesPage />}
      />

      <Route path="signup" element={<SignUpPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/events" element={<EventPage />} />
      <Route path="/resources" element={<ResourcePage />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/blogs/:title" element={<BlogDetail />} />

      {/* Admin routes*/}
      <Route path="/admin-dashboard" element={<AdminPage />} />
      <Route path="/admin-dashboard/total-blogs" element={<TotalBlogs />} />
      <Route path="/admin-dashboard/total-events" element={<TotalEvents />} />
      <Route path="/admin-dashboard/create-events" element={<CreateEvent />} />
      <Route path="//admin-dashboard/create-blogs" element={<CreateBlog />} />
    </Routes>
  );
};

export default Routing;
