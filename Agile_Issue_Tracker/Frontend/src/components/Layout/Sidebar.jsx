import React, { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { 
  LayoutDashboard, 
  Users, 
  Plus, 
  Search,
  ChevronLeft,
  Ticket,
  HelpCircleIcon,
  Bot,
  Sun,
  Moon,
  X
} from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

const navItems = [
  { label: 'Dashboard', path: '/', icon: LayoutDashboard },
  { label: 'Tickets', path: '/tickets', icon: Ticket },
  { label: 'Team', path: '/team', icon: Users },
  { label: 'AI Chat', path: '/ai-chat', icon: Bot },
  { label: 'Help', path: '/help', icon: HelpCircleIcon },
]

const Sidebar = ({ searchTerm, setSearchTerm, closeSidebar }) => {
  const location = useLocation()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme()

  const toggleSidebar = () => setIsCollapsed((prev) => !prev)

  const handleNavClick = () => {
    if (closeSidebar) closeSidebar()
  }

  return (
    <aside
      className={`bg-white dark:bg-[#0b1329] text-slate-700 dark:text-sky-200 flex flex-col h-full border-r border-slate-200 dark:border-blue-900/40 shrink-0 transition-all duration-300 ease-in-out select-none ${
        isCollapsed ? 'w-16' : 'w-72'
      }`}
    >
      {/* Brand Header */}
      <div className={`p-3 border-b border-slate-200 dark:border-blue-900/40 flex flex-col gap-3 ${
        isCollapsed ? 'items-center' : ''
      }`}>
        <div className={`flex items-center w-full ${isCollapsed ? 'justify-center' : 'justify-between'} h-10`}>
          {isCollapsed ? (
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={toggleSidebar}
                className="hidden md:flex p-2 rounded-xl bg-slate-100 dark:bg-blue-950/80 hover:bg-slate-200 dark:hover:bg-blue-900 text-slate-600 dark:text-sky-300 transition-all cursor-pointer shrink-0"
                title="Expand sidebar"
              >
                <ChevronLeft className="w-4 h-4 rotate-180" />
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-linear-to-tr from-blue-600 to-sky-500 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20 shrink-0">
                  C
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-semibold text-slate-900 dark:text-white text-sm leading-none truncate">
                    Chaitanya
                  </span>
                  <span className="text-[10px] font-bold text-blue-600 dark:text-sky-400 uppercase tracking-wider font-mono mt-1">
                    Agile Tracker
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={toggleSidebar}
                  className="hidden md:flex p-1.5 rounded-lg bg-slate-100 dark:bg-blue-950/80 hover:bg-slate-200 dark:hover:bg-blue-900 text-slate-600 dark:text-sky-300 transition-colors cursor-pointer shrink-0"
                  title="Collapse sidebar"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={closeSidebar}
                  className="flex md:hidden p-1.5 rounded-lg bg-slate-100 dark:bg-blue-950/80 text-slate-600 dark:text-sky-300 transition-colors shrink-0"
                  title="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </>
          )}
        </div>

        {/* Action Button */}
        <Link
          to="/tickets/new"
          onClick={handleNavClick}
          title={isCollapsed ? "New Ticket" : undefined}
          className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] shadow-md shadow-blue-600/30 transition-all duration-200 ${
            isCollapsed ? 'w-10 h-10 p-0 rounded-xl' : 'px-3'
          }`}
        >
          <Plus className="w-4 h-4 stroke-[2.5] shrink-0" />
          {!isCollapsed && <span>New Ticket</span>}
        </Link>
      </div>

      {/* Quick Search */}
      <div className={`pt-3 pb-1 ${isCollapsed ? 'px-2 flex justify-center' : 'px-3'}`}>
        {!isCollapsed ? (
          <div className="relative">
            <input
              type="text"
              placeholder="Search tickets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-slate-100 dark:bg-[#070d19] focus:bg-white dark:focus:bg-[#0f1933] border border-slate-200 dark:border-blue-800/60 focus:border-blue-500 rounded-lg text-xs text-slate-900 dark:text-sky-100 placeholder-slate-400 dark:placeholder-sky-400/50 focus:outline-none transition-all duration-200"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 dark:text-sky-400/60 absolute left-2.5 top-2" />
          </div>
        ) : (
          <button
            onClick={toggleSidebar}
            className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-500 dark:text-sky-300 hover:bg-slate-100 dark:hover:bg-blue-950 transition-colors"
            title="Search"
          >
            <Search className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className={`flex-1 py-3 space-y-1 overflow-y-auto custom-scrollbar ${
        isCollapsed ? 'px-2 flex flex-col items-center' : 'px-3'
      }`}>
        {!isCollapsed && (
          <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-sky-400/60 font-mono">
            Menu
          </div>
        )}
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path

          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={handleNavClick}
              title={isCollapsed ? item.label : undefined}
              className={`flex items-center ${
                isCollapsed
                  ? 'w-10 h-10 justify-center p-0'
                  : 'w-full justify-between px-3 py-2.5'
              } rounded-xl text-xs font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-sky-300 font-semibold border border-blue-200/50 dark:border-blue-700/50'
                  : 'text-slate-600 dark:text-sky-200/80 hover:bg-slate-100 dark:hover:bg-blue-950/60 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-blue-600 dark:text-sky-400' : ''}`} />
              {!isCollapsed && <span className="truncate flex-1 ml-3">{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Bottom Controls */}
      <div className={`p-3 border-t border-slate-200 dark:border-blue-900/40 ${
        isCollapsed ? 'flex justify-center px-2' : ''
      }`}>
        <button
          onClick={toggleTheme}
          title={isCollapsed ? (isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode") : undefined}
          className={`flex items-center ${
            isCollapsed
              ? "w-10 h-10 justify-center p-0"
              : "w-full justify-start px-3 py-2.5 gap-3"
          } rounded-xl text-xs font-medium text-slate-600 dark:text-sky-200 hover:bg-slate-100 dark:hover:bg-blue-950/60 hover:text-slate-900 dark:hover:text-white transition-all duration-200 cursor-pointer`}
        >
          {isDarkMode ? (
            <Sun className="w-4 h-4 text-amber-400 shrink-0 transition-transform hover:rotate-45" />
          ) : (
            <Moon className="w-4 h-4 text-blue-600 shrink-0 transition-transform hover:-rotate-12" />
          )}
          {!isCollapsed && (
            <span className="truncate">
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </span>
          )}
        </button>
      </div>
   </aside>
  )
}

export default Sidebar