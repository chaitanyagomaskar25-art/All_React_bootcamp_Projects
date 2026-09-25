import React from "react";
import Column from "./Column";
import { DragDropContext } from "@hello-pangea/dnd";
import { useMoveTicket } from "../hooks/useMoveTicket";
import { Circle, Clock, CheckCircle2 } from "lucide-react";

const Board = ({ tickets = [], onTicketClick }) => {
  const { mutate } = useMoveTicket();

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    // User dropped outside any column
    if (!destination) return;

    // Same position
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // Tickets of the source column only
    const sourceTickets = tickets.filter(
      (ticket) =>
        ticket.status?.toLowerCase() === source.droppableId.toLowerCase()
    );

    const movedTicket = sourceTickets[source.index];

    if (!movedTicket) return;

    mutate({
      id: movedTicket.id,
      updates: {
        status: destination.droppableId,
      },
    });
  };

  const columns = [
    {
      title: "To Do",
      status: "todo",
      icon: Circle,
      color: "text-blue-500 dark:text-sky-400",
      accent: "border-t-blue-500 dark:border-t-sky-400",
      bg: "bg-slate-50/80 dark:bg-[#0f1933]/60",
      border: "border-slate-200 dark:border-blue-900/50",
    },
    {
      title: "In Progress",
      status: "progress",
      icon: Clock,
      color: "text-amber-600 dark:text-amber-400",
      accent: "border-t-amber-500",
      bg: "bg-amber-50/40 dark:bg-amber-950/20",
      border: "border-amber-200/80 dark:border-amber-900/40",
    },
    {
      title: "Done",
      status: "done",
      icon: CheckCircle2,
      color: "text-emerald-600 dark:text-emerald-400",
      accent: "border-t-emerald-500",
      bg: "bg-emerald-50/40 dark:bg-emerald-950/20",
      border: "border-emerald-200/80 dark:border-emerald-900/40",
    },
  ];

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {/* Outer Scroll Wrapper: Scrollbar visible below 1300px, hidden at 1300px and above */}
      <div 
        className="w-full overflow-x-auto pb-4 pt-1 px-1 snap-x snap-mandatory min-[1300px]:snap-none
                   min-[1400px]:scrollbar:none min-[1300px]:[-ms-overflow-style:none] min-[1300px]:[&::-webkit-scrollbar]:hidden
                   max-[1299px]:[&::-webkit-scrollbar]:h-2
                   max-[1299px]:[&::-webkit-scrollbar-track]:bg-slate-100 max-[1299px]:dark:[&::-webkit-scrollbar-track]:bg-[#0f1933]
                   max-[1299px]:[&::-webkit-scrollbar-track]:rounded-full
                   max-[1299px]:[&::-webkit-scrollbar-thumb]:bg-slate-300 max-[1299px]:dark:[&::-webkit-scrollbar-thumb]:bg-blue-900/80
                   max-[1299px]:[&::-webkit-scrollbar-thumb]:rounded-full hover:max-[1299px]:[&::-webkit-scrollbar-thumb]:bg-blue-500"
      >
        {/* Adaptive Responsive Layout Container breaking to 3 columns at 1300px */}
        <div className="grid grid-flow-col auto-cols-[85vw] sm:auto-cols-85 min-[1300px]:grid-flow-row min-[1300px]:grid-cols-3 min-[1300px]:auto-cols-auto gap-4 sm:gap-6 items-start min-w-full">
          {columns.map((col) => {
            const columnTickets = tickets.filter(
              (ticket) =>
                ticket?.status?.toLowerCase() === col.status.toLowerCase()
            );

            const StatusIcon = col.icon;

            return (
              <div
                key={col.status}
                className={`snap-center flex flex-col min-w-0 h-full max-h-[calc(100vh-220px)] sm:max-h-[calc(100vh-180px)] rounded-2xl border-2 ${col.border} border-t-4 ${col.accent} ${col.bg} p-3.5 sm:p-4 shadow-sm transition-all duration-200`}
              >
                {/* Column Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/80 dark:border-blue-900/40 shrink-0">
                  <div className="flex items-center gap-2 min-w-0">
                    <StatusIcon className={`w-4 h-4 shrink-0 ${col.color}`} />
                    <h2 className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-white truncate uppercase tracking-wider font-mono">
                      {col.title}
                    </h2>
                  </div>

                  {/* Ticket Count Badge */}
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white dark:bg-[#0b1329] text-slate-800 dark:text-sky-200 border border-slate-200 dark:border-blue-900/60 shadow-xs shrink-0 font-mono">
                    {columnTickets.length}
                  </span>
                </div>

                {/* Droppable Column Body */}
                <div className="flex-1 min-h-0 overflow-y-auto scrollbar:none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                  <Column
                    onTicketClick={onTicketClick}
                    title={col.title}
                    status={col.status}
                    tickets={columnTickets}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DragDropContext>
  );
};

export default Board;