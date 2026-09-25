import { Link, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getTicketById } from "../api/ticketApi";

const DetailsOfTask = () => {
  const { id } = useParams();

  const {
    data: ticket,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["ticket", id],
    queryFn: () => getTicketById(id),
  });

  // Priority badge color mapping with Deep Dark Blue theme styling
  const priorityStyles = {
    high: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900/50",
    critical: "bg-rose-500/20 text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-800",
    medium: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900/50",
    low: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/50",
  };

  const priorityKey = ticket?.priority?.toLowerCase() || "low";
  const currentPriorityStyle =
    priorityStyles[priorityKey] || priorityStyles.low;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-100 dark:bg-[#070d19] flex flex-col items-center justify-center p-6 text-slate-600 dark:text-sky-300 transition-colors duration-300">
        <div className="w-12 h-12 border-4 border-blue-600/30 border-t-blue-600 dark:border-sky-400/30 dark:border-t-sky-400 rounded-full animate-spin mb-4 shadow-sm" />
        <p className="font-semibold text-xs tracking-wider uppercase text-slate-500 dark:text-sky-400/70 animate-pulse font-mono">
          Loading task details...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-slate-100 dark:bg-[#070d19] flex items-center justify-center p-6 transition-colors duration-300">
        <div className="relative w-full max-w-md bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-rose-900/50 rounded-3xl p-8 text-center shadow-xl overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-rose-500 to-amber-500" />
          <div className="w-14 h-14 bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900/60 text-rose-600 dark:text-rose-400 rounded-2xl flex items-center justify-center mx-auto mb-4 font-black text-xl shadow-xs">
            !
          </div>
          <h2 className="text-lg font-extrabold text-slate-800 dark:text-white mb-2 tracking-tight">
            Failed to load ticket details
          </h2>
          <p className="text-slate-500 dark:text-sky-300/70 text-xs leading-relaxed mb-6">
            We couldn't load the task information. The ticket might have been removed or deleted.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-blue-600/20 active:scale-95"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-8 bg-slate-100 dark:bg-[#070d19] font-sans text-slate-900 dark:text-sky-100 antialiased transition-colors duration-300">
      {/* Main Glass/Navy Card */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-blue-900/50 rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden">
        {/* Decorative Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-blue-600 via-sky-500 to-indigo-500" />

        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-4 pb-4 mb-6 border-b border-slate-200 dark:border-blue-900/40">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-sky-400/60">
              Ticket #{id}
            </span>
            <span
              className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${currentPriorityStyle}`}
            >
              {ticket.priority}
            </span>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-700 dark:text-sky-200 bg-slate-100 dark:bg-[#0f1933] border border-slate-200 dark:border-blue-800/60 hover:bg-slate-200 dark:hover:bg-blue-900/60 hover:text-slate-900 dark:hover:text-white transition-all active:scale-95"
          >
            <svg
              className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back</span>
          </Link>
        </div>

        {/* Task Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight leading-snug mb-6 wrap-break-word">
          {ticket.title}
        </h1>

        {/* Status & Assignee Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 p-4 bg-slate-50 dark:bg-[#0f1933]/60 rounded-2xl border border-slate-200/80 dark:border-blue-900/40">
          {/* Status */}
          <div>
            <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-sky-400/60 mb-1.5">
              Status
            </span>
            <span className="inline-block px-3 py-1 rounded-lg text-xs font-bold bg-blue-50 dark:bg-blue-900/40 border border-blue-200/60 dark:border-blue-700/50 text-blue-600 dark:text-sky-300 uppercase tracking-wide">
              {ticket.status}
            </span>
          </div>

          {/* Assignee */}
          <div>
            <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-sky-400/60 mb-1.5">
              Assignee
            </span>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-linear-to-tr from-blue-600 to-sky-500 text-white flex items-center justify-center text-xs font-bold uppercase shadow-xs">
                {ticket.assignee ? ticket.assignee.charAt(0) : "U"}
              </div>
              <span className="text-xs font-bold text-slate-700 dark:text-sky-200">
                {ticket.assignee || "Unassigned"}
              </span>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-8">
          <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-sky-400/60 mb-2">
            Description
          </label>
          <div className="p-4 bg-slate-50 dark:bg-[#0f1933]/60 rounded-2xl border border-slate-200/80 dark:border-blue-900/40 min-h-30 ">
            <p className="text-xs sm:text-sm text-slate-600 dark:text-sky-200/90 leading-relaxed whitespace-pre-wrap wrap-break-word">
              {ticket.description || "No description provided for this task."}
            </p>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="pt-4 border-t border-slate-200 dark:border-blue-900/40 flex items-center justify-between">
          <span className="text-[11px] font-mono font-medium text-slate-400 dark:text-sky-400/50">
            Sprint Board Item
          </span>
          <Link
            to="/"
            className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 active:scale-95 transition-all duration-200"
          >
            Back to Board
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsOfTask;