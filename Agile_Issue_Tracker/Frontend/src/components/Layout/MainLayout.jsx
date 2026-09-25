import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import { useTheme } from "../../context/ThemeContext";

const MainLayout = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-100 dark:bg-[#070d19] text-slate-900 dark:text-sky-100 font-sans antialiased selection:bg-blue-600 selection:text-white transition-colors duration-300">
      
      {/* Mobile Sidebar Backdrop Mask */}
      <div 
        className={`fixed inset-0 bg-slate-950/70 dark:bg-[#030712]/80 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Deep Blue Sidebar Container */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 transform bg-white dark:bg-[#0b1329] shadow-2xl md:shadow-none md:border-r border-slate-300 dark:border-blue-900/40 transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          closeSidebar={() => setIsSidebarOpen(false)} 
        />
      </aside>

      {/* Main Viewport */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden relative">
        
        {/* Deep Blue Top Navigation Header */}
        <header className="flex items-center justify-between h-16 px-4 md:px-8 border-b border-slate-300 dark:border-blue-900/40 bg-white dark:bg-[#0b1329] z-30 transition-colors duration-300 shadow-xs">
          
          {/* Mobile Navigation Trigger */}
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 -ml-2 rounded-lg md:hidden hover:bg-slate-100 dark:hover:bg-blue-900/50 text-slate-700 dark:text-sky-200 border border-slate-300 dark:border-blue-800/60 transition-colors"
            aria-label="Open Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="flex-1"></div>

          {/* High-Visibility Dark Blue Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="relative p-2.5 rounded-xl bg-slate-100 dark:bg-[#111c38] border-2 border-slate-300 dark:border-blue-700/60 hover:border-blue-500 dark:hover:border-sky-400 hover:bg-slate-200 dark:hover:bg-blue-900/60 transition-all duration-200 active:scale-95 text-slate-800 dark:text-sky-300 shadow-xs"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              // Moon Icon with Glowing Sky Blue Accent
              <div className="flex items-center gap-2 text-xs font-bold">
                <svg className="w-5 h-5 text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
            ) : (
              // Sun Icon
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            )}
          </button>
        </header>

        {/* Primary Page Content Area */}
        <main className="flex-1 overflow-y-auto bg-slate-100 dark:bg-[#070d19] transition-colors duration-300 relative">
          
          {/* Subtle Ambient Blue Background Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none dark:block hidden" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none dark:block hidden" />

          <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 relative z-10">
            <Outlet 
              context={{ 
                searchTerm, 
                setSearchTerm 
              }} 
            />
          </div>
        </main>

      </div>
    </div>
  );
};

export default MainLayout;