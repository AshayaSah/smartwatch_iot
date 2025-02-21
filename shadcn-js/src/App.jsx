import React from "react";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { SidebarProvider } from "./components/ui/sidebar";
import AppSidebar from "./components/AppSidebar";
import Navbar from "./components/Navbar";
import MainUi from "./components/sm_ui_components/MainUi";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginForm } from "./components/sm_ui_components/auth/LoginForm";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider defaultOpen={false}>
        <Router>
          <AppSidebar />
          <main className="w-full">
            <Navbar />
            <Routes>
              <Route path="/" element={<MainUi />} />
              <Route
                path="/login"
                element={
                  // <div className="flex max-h-[89vh] flex-col items-center justify-center bg-muted p-6 md:p-10">
                  //   <div className="w-full max-w-sm md:max-w-3xl">
                  <LoginForm />
                  //   </div>
                  // </div>
                }
              />
            </Routes>
          </main>
        </Router>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default App;
