import React, { useMemo } from "react";
import Ticket from "./Ticket";
import { Plus } from "lucide-react";
import { Droppable } from "@hello-pangea/dnd";

const Column = ({ title, status, tickets = [], onTicketClick }) => {
  // Safe check in case tickets passed aren't pre-filtered yet
  const columnTickets = useMemo(() => {
    if (!tickets.length) return [];
    const isPreFiltered = tickets.every(
      (t) => t?.status?.toLowerCase() === status?.toLowerCase()
    );
    return isPreFiltered
      ? tickets
      : tickets.filter(
          (t) => t?.status?.toLowerCase() === status?.toLowerCase()
        );
  }, [tickets, status]);

  // Deep Navy high-contrast color themes supporting Light and Dark modes
  const themes = {
    todo: {
      gradient: "from-blue-500 via-sky-500 to-blue-600",
      glowDot: "bg-blue-500 dark:bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]",
      badge: "bg-slate-900 text-white dark:bg-[#0b1329] dark:text-sky-300 border-slate-700 dark:border-blue-900/60 shadow-xs",
      columnBg:
        "bg-slate-50/80 dark:bg-[#0f1933]/60 border-slate-200 dark:border-blue-900/50",
      glowHover:
        "hover:border-blue-400 dark:hover:border-blue-700/80",
    },
    progress: {
      gradient: "from-amber-500 via-orange-500 to-amber-600",
      glowDot: "bg-amber-500 shadow-[0_0_14px_rgba(245,158,11,0.9)] animate-pulse",
      badge:
        "bg-amber-600 dark:bg-amber-500 text-white shadow-xs border-amber-400 dark:border-amber-600",
      columnBg:
        "bg-amber-50/30 dark:bg-amber-950/20 border-slate-200 dark:border-amber-900/40",
      glowHover:
        "hover:border-amber-400/80 dark:hover:border-amber-600/80",
    },
    done: {
      gradient: "from-emerald-500 via-teal-500 to-emerald-600",
      glowDot: "bg-emerald-500 shadow-[0_0_14px_rgba(16,185,129,0.9)]",
      badge:
        "bg-emerald-600 dark:bg-emerald-500 text-white shadow-xs border-emerald-400 dark:border-emerald-600",
      columnBg:
        "bg-emerald-50/30 dark:bg-emerald-950/20 border-slate-200 dark:border-emerald-900/40",
      glowHover:
        "hover:border-emerald-400/80 dark:hover:border-emerald-600/80",
    },
  };

  const currentTheme = themes[status?.toLowerCase()] || themes.todo;

  return (
    <Droppable droppableId={status}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
         
        >
          {/* Top Glowing Ambient Light Bar */}
          <div
            className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${currentTheme.gradient} opacity-90 group-hover:opacity-100 transition-all duration-300`}
          />

        

          {/* Column Scroll Container with Scrollbars Hidden */}
          <div className="flex-1 flex flex-col gap-3 overflow-y-auto py-1 scrollbar:none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {columnTickets.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-slate-200 dark:border-blue-900/50 rounded-2xl p-6 bg-white/50 dark:bg-[#0b1329]/60 text-center transition-all duration-200 min-h-40 ">
                <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-[#0f1933] border border-slate-200 dark:border-blue-800/60 flex items-center justify-center mb-2.5 text-slate-400 dark:text-sky-400">
                  <Plus className="w-5 h-5 text-blue-600 dark:text-sky-400 animate-pulse" />
                </div>
                <p className="text-slate-900 dark:text-white text-xs font-extrabold tracking-tight">
                  Column is empty
                </p>
                <p className="text-slate-500 dark:text-sky-300/60 text-[11px] mt-0.5 font-medium">
                  Drop tickets here for {title}
                </p>
              </div>
            ) : (
              columnTickets.map((ticket, index) => (
                <div
                  key={ticket.id || ticket._id || index}
                  className="animate-in fade-in slide-in-from-bottom-2 duration-200"
                >
                  <Ticket
                    ticket={ticket}
                    index={index}
                    onClick={onTicketClick}
                  />
                </div>
              ))
            )}

            {/* Crucial for Drag-and-Drop placeholder calculations */}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default Column;