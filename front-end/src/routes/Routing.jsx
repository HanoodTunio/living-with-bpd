import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import GalleryPage from "../pages/GalleryPage";
import EventPage from "../pages/EventPage";
import BlogPage from "../pages/BlogsPage";
import ResourcePage from "../pages/ResourcesPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/events" element={<EventPage />} />
      <Route path="/resources" element={<ResourcePage />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Routing;
