import React, { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router";
import { 
  AlertCircle, 
  RefreshCw, 
  Kanban, 
  CheckCircle2, 
  Clock, 
  SearchX 
} from "lucide-react";
import { getTickets } from "../api/ticketApi";
import Board from "../components/Board";
import Model from "../components/Model";

const Dashboard = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  
  // Access global search state from MainLayout Outlet context
  const { searchTerm = "", setSearchTerm } = useOutletContext() || {};

  const { data: tickets = [], isLoading, isError, refetch } = useQuery({
    queryKey: ["tickets"],
    queryFn: getTickets,
  });

  // Filtered tickets based on search query
  const filteredTickets = useMemo(() => {
    if (!searchTerm.trim()) return tickets;
    const query = searchTerm.toLowerCase();
    return tickets.filter(
      (ticket) =>
        ticket?.title?.toLowerCase().includes(query) ||
        ticket?.key?.toLowerCase().includes(query) ||
        ticket?.status?.toLowerCase().includes(query)
    );
  }, [tickets, searchTerm]);

  // Board Metrics
  const metrics = useMemo(() => {
    const total = tickets.length;
    const completed = tickets.filter((t) => t?.status?.toLowerCase() === "done").length;
    const inProgress = tickets.filter((t) => t?.status?.toLowerCase() === "in progress" || t?.status?.toLowerCase() === "progress").length;
    return { total, completed, inProgress };
  }, [tickets]);

  /* --- Loading State --- */
  if (isLoading) {
    return (
      <div className="w-full h-[calc(100vh-2rem)] flex flex-col items-center justify-center p-6 text-slate-600 dark:text-sky-200">
        <div className="w-10 h-10 border-3 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mb-4" />
        <p className="font-semibold text-xs tracking-wider uppercase text-slate-400 dark:text-sky-400/70 font-mono">
          Loading workspace board...
        </p>
      </div>
    );
  }

  /* --- Error State --- */
  if (isError) {
    return (
      <div className="w-full h-[calc(100vh-2rem)] flex items-center justify-center p-6 bg-slate-100 dark:bg-[#070d19]">
        <div className="relative w-full max-w-md bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-blue-900/50 rounded-3xl p-8 text-center shadow-xl overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-rose-500 to-amber-500" />
          
          <div className="w-12 h-12 bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900/50 text-rose-600 dark:text-rose-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-1">
            Failed to load tickets
          </h2>
          <p className="text-slate-500 dark:text-sky-300/70 text-xs leading-relaxed mb-6">
            We couldn't reach the server. Please check your connection or try again.
          </p>
          <button 
            onClick={() => refetch()}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl transition-all shadow-md shadow-blue-600/30 active:scale-95 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Try Again</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 space-y-6 font-sans text-slate-900 dark:text-sky-100 antialiased [scrollbar:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      
      {/* Top Banner / Board Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-[#0b1329] p-5 rounded-2xl border border-slate-200 dark:border-blue-900/50 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-50 dark:bg-[#0f1933] text-blue-600 dark:text-sky-400 rounded-xl border border-blue-100 dark:border-blue-800/60">
            <Kanban className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
              Sprint Board
            </h1>
            <p className="text-xs text-slate-500 dark:text-sky-400/70">
              Manage active sprint tasks and team workload
            </p>
          </div>
        </div>

        {/* Quick Board Stats */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 dark:bg-[#0f1933] rounded-lg border border-slate-200/60 dark:border-blue-900/60 text-xs font-medium text-slate-600 dark:text-sky-200">
            <span className="font-bold text-slate-900 dark:text-white">{metrics.total}</span> Total
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 rounded-lg border border-amber-200/60 dark:border-amber-900/50 text-xs font-medium">
            <Clock className="w-3.5 h-3.5" />
            <span className="font-bold">{metrics.inProgress}</span> Active
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 rounded-lg border border-emerald-200/60 dark:border-emerald-900/50 text-xs font-medium">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span className="font-bold">{metrics.completed}</span> Done
          </div>
        </div>
      </div>

      {/* Filter Active Indicator Bar */}
      {searchTerm && (
        <div className="flex items-center justify-between bg-blue-50/60 dark:bg-[#0f1933] border border-blue-100 dark:border-blue-900/60 rounded-xl px-4 py-2.5 text-xs text-blue-900 dark:text-sky-200">
          <div className="flex items-center gap-2">
            <span>Filtering by key/title:</span>
            <span className="font-bold bg-white dark:bg-[#0b1329] px-2 py-0.5 rounded-md border border-blue-200 dark:border-blue-800/60 text-blue-600 dark:text-sky-400">
              "{searchTerm}"
            </span>
            <span className="text-slate-500 dark:text-sky-400/60">({filteredTickets.length} results)</span>
          </div>
          {setSearchTerm && (
            <button 
              onClick={() => setSearchTerm("")}
              className="font-bold text-blue-600 dark:text-sky-400 hover:text-blue-800 dark:hover:text-sky-300 underline text-xs cursor-pointer"
            >
              Clear filter
            </button>
          )}
        </div>
      )}

      {/* Main Kanban Content Area */}
      {filteredTickets.length === 0 ? (
        /* Empty State */
        <div className="w-full py-20 bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-blue-900/50 rounded-2xl flex flex-col items-center justify-center text-center p-6">
          <div className="w-12 h-12 bg-slate-100 dark:bg-[#0f1933] text-slate-400 dark:text-sky-400/60 rounded-2xl flex items-center justify-center mb-3">
            <SearchX className="w-6 h-6" />
          </div>
          <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-1">No tickets match your filter</h3>
          <p className="text-xs text-slate-500 dark:text-sky-300/70 max-w-sm mb-4">
            Try adjusting your search query in the sidebar or clear the search to view all tickets.
          </p>
          {setSearchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-blue-600/30 transition-colors cursor-pointer"
            >
              Clear Search
            </button>
          )}
        </div>
      ) : (
        /* Kanban Board Component Container */
        <div className="bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-blue-900/50 rounded-2xl p-4 sm:p-6 shadow-xs min-h-125">
          <Board
            tickets={filteredTickets}
            onTicketClick={setSelectedTicket}
          />
        </div>
      )}

      {/* Ticket Detail Modal */}
      {selectedTicket && (
        <Model
          ticket={selectedTicket}
          onClose={() => setSelectedTicket(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;