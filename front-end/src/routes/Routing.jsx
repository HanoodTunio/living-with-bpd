import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import GalleryPage from "../pages/GalleryPage";
import EventPage from "../pages/EventPage";
import BlogPage from "../pages/BlogsPage";
import ResourcePage from "../pages/ResourcesPage";
import BlogDetail from "../pages/BlogDetailPage";
import SignUpPage from "../pages/SignUpPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/events" element={<EventPage />} />
      <Route path="/resources" element={<ResourcePage />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/blogs/:id" element={<BlogDetail />} />
      {/* Blog detail route */}
    </Routes>
  );
};

export default Routing;
