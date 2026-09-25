import { useNavigate } from "react-router";
import { AlertCircle, Clock, CheckCircle2, Circle, ArrowUpRight } from "lucide-react";

const TicketCard = ({ ticket }) => {
  const navigate = useNavigate();

  // Dynamic Priority Color System
  const getPriorityStyle = (priority) => {
    const p = priority?.toLowerCase();
    if (p === "high" || p === "urgent") {
      return {
        badge: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
        dot: "bg-rose-500",
      };
    }
    if (p === "medium") {
      return {
        badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
        dot: "bg-amber-500",
      };
    }
    return {
      badge: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
      dot: "bg-sky-400",
    };
  };

  // Status Styling & Indicator
  const getStatusStyle = (status) => {
    const s = status?.toLowerCase();
    if (s === "todo") {
      return {
        label: "To Do",
        badge: "bg-slate-100 text-slate-700 dark:bg-blue-950/60 dark:text-sky-300 border-slate-200 dark:border-blue-800/50",
        icon: Circle,
      };
    }
    if (s === "progress" || s === "in progress") {
      return {
        label: "In Progress",
        badge: "bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-500/30",
        icon: Clock,
      };
    }
    return {
      label: "Done",
      badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/30",
      icon: CheckCircle2,
    };
  };

  const priorityStyle = getPriorityStyle(ticket?.priority);
  const statusStyle = getStatusStyle(ticket?.status);
  const StatusIcon = statusStyle.icon;

  return (
    <div
      onClick={() => navigate(`/ticket/${ticket?.id}`)}
      className="group relative flex flex-col justify-between w-full min-w-0 bg-white dark:bg-[#0d162d] hover:dark:bg-[#111c38] border border-slate-200/80 dark:border-blue-900/40 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-xl hover:shadow-blue-950/20 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 cursor-pointer overflow-hidden active:scale-[0.98] sm:active:scale-100"
    >
      {/* Top Header Row */}
      <div className="flex items-start justify-between gap-3 mb-3 w-full min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          {/* Priority Pill */}
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wide border ${priorityStyle.badge}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${priorityStyle.dot}`} />
            {ticket?.priority || "Low"}
          </span>

          {/* Status Pill */}
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${statusStyle.badge}`}
          >
            <StatusIcon className="w-3 h-3 shrink-0" />
            <span>{statusStyle.label}</span>
          </span>
        </div>

        {/* Action Icon */}
        <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-blue-950/80 flex items-center justify-center text-slate-400 dark:text-sky-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-1.5 my-1 w-full min-w-0">
        <h3 className="font-semibold text-base text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-sky-300 transition-colors line-clamp-2 leading-snug wrap-break-word ">
          {ticket?.title || "Untitled Ticket"}
        </h3>

        <p className="text-xs text-slate-500 dark:text-sky-300/60 line-clamp-2 leading-relaxed wrap-break-words">
          {ticket?.description || "No additional details provided."}
        </p>
      </div>

      {/* Card Footer */}
      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-blue-900/30 flex items-center justify-between gap-2 w-full min-w-0">
        {/* Assignee Info */}
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-6 h-6 rounded-full bg-linear-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white text-[10px] font-bold shadow-xs shrink-0">
            {ticket?.assignee ? ticket.assignee.charAt(0).toUpperCase() : "U"}
          </div>
          <span className="text-xs font-medium text-slate-700 dark:text-sky-200/80 truncate">
            {ticket?.assignee || "Unassigned"}
          </span>
        </div>

        {/* Ticket ID Tag */}
        <span className="text-[10px] font-mono text-slate-400 dark:text-sky-400/50 bg-slate-50 dark:bg-blue-950/50 px-2 py-0.5 rounded-md border border-slate-200/50 dark:border-blue-900/40 shrink-0">
          #{ticket?.id ? String(ticket.id).slice(-4) : "0000"}
        </span>
      </div>
    </div>
  );
};

export default TicketCard;