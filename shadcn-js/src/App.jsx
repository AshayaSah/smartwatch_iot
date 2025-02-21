import React from "react";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { SidebarProvider } from "./components/ui/sidebar";
import AppSidebar from "./components/AppSidebar";
import Navbar from "./components/Navbar";
import MainUi from "./components/sm_ui_components/MainUi";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginForm } from "./components/sm_ui_components/auth/LoginForm";
import AboutSection from "./components/sm_ui_components/about_page/About";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider defaultOpen={false}>
        <Router>
          <AppSidebar />
          <Toaster />
          <main className="w-full">
            <Navbar />
            <Routes>
              <Route path="/" element={<MainUi />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/about" element={<AboutSection />} />
            </Routes>
          </main>
        </Router>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default App;
