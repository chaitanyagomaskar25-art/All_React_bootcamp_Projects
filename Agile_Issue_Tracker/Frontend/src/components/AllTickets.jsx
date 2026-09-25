import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router";
import { getTickets } from "../api/ticketApi";
import TicketCard from "../components/TicketCard";
import { Filter, SearchX, AlertCircle } from "lucide-react";

const AllTickets = () => {
  const {
    data: tickets = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["tickets"],
    queryFn: getTickets,
  });

  const { searchTerm = "" } = useOutletContext() || {};

  const [statusFilter, setStatusFilter] = useState("all");

  // Status Filter
  const filteredTickets =
    statusFilter === "all"
      ? tickets
      : tickets.filter(
          (ticket) =>
            ticket.status?.toLowerCase() ===
            statusFilter.toLowerCase()
        );

  // Search Filter
  const displayedTickets = filteredTickets.filter((ticket) => {
    const search = searchTerm.trim().toLowerCase();

    return (
      ticket.title?.toLowerCase().includes(search) ||
      ticket.description?.toLowerCase().includes(search) ||
      ticket.assignee?.toLowerCase().includes(search) ||
      ticket.priority?.toLowerCase().includes(search) ||
      ticket.status?.toLowerCase().includes(search)
    );
  });

  // Skeleton Loading Grid
  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-blue-900/50">
          <div className="h-8 w-44 bg-slate-200 dark:bg-blue-900/40 animate-pulse rounded-lg" />
          <div className="h-10 w-36 bg-slate-200 dark:bg-blue-900/40 animate-pulse rounded-xl" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className="h-48 bg-slate-100 dark:bg-[#0b1329] border border-slate-200 dark:border-blue-900/50 animate-pulse rounded-2xl"
            />
          ))}
        </div>
      </div>
    );
  }

  // High-Contrast Error State
  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-75 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 rounded-2xl p-8 text-center my-6">
        <AlertCircle className="w-10 h-10 text-rose-600 dark:text-rose-400 mb-3" />
        <h2 className="text-lg font-bold text-rose-900 dark:text-rose-200">
          Something went wrong
        </h2>
        <p className="text-xs text-rose-600 dark:text-rose-400 mt-1">
          Unable to fetch tickets. Please check your network connection or try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header & Filter Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-blue-900/50">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            All Tickets
          </h1>
          <p className="text-xs text-slate-500 dark:text-sky-400/70 mt-1">
            Manage and track all system tickets across your workspace.
          </p>
        </div>

        {/* Filter Dropdown */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Filter className="w-3.5 h-3.5 text-slate-400 dark:text-sky-400/60 absolute left-3 top-3 pointer-events-none" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="pl-9 pr-8 py-2 bg-white dark:bg-[#0b1329] border border-slate-300 dark:border-blue-800/60 focus:border-blue-600 dark:focus:border-blue-500 rounded-xl text-xs font-semibold text-slate-900 dark:text-sky-100 focus:outline-none transition-all shadow-sm cursor-pointer"
            >
              <option value="all" className="bg-white dark:bg-[#0b1329]">All Statuses</option>
              <option value="todo" className="bg-white dark:bg-[#0b1329]">To Do</option>
              <option value="progress" className="bg-white dark:bg-[#0b1329]">In Progress</option>
              <option value="done" className="bg-white dark:bg-[#0b1329]">Done</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tickets Display */}
      {displayedTickets.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 bg-slate-50/50 dark:bg-[#070d19]/60 border border-dashed border-slate-300 dark:border-blue-900/60 rounded-2xl text-center">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-blue-950/80 flex items-center justify-center mb-3 border border-slate-200 dark:border-blue-800/50">
            <SearchX className="w-6 h-6 text-slate-400 dark:text-sky-400/70" />
          </div>
          <p className="text-sm font-semibold text-slate-900 dark:text-sky-100">
            No tickets found
          </p>
          <p className="text-xs text-slate-500 dark:text-sky-400/70 mt-1 max-w-sm">
            We couldn't find any tickets matching your search query or selected filter criteria.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {displayedTickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllTickets;