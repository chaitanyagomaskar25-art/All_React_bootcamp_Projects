import React, { memo, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router";
import { Trash2, Edit2, AlertTriangle, User } from "lucide-react";
import { useDeleteTicket } from "../hooks/useDeleteTicket";
import { Draggable } from "@hello-pangea/dnd";
import { useUsers } from "../hooks/useUsers";
import { useUpdateTicket } from "../hooks/useUpdateTicket";

const Ticket = ({ ticket, onClick, index }) => {
  const navigate = useNavigate();
  const { mutate: deleteMutate } = useDeleteTicket();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { data: users = [] } = useUsers();

  const { mutate: updateTicket } = useUpdateTicket();

  const handleAssignChange = (e) => {
    updateTicket({
      id: ticket.id,
      updates: {
        assignee: e.target.value,
      },
    });
  };

  const handleDeleteConfirm = () => {
    deleteMutate(ticket.id);
    setShowDeleteModal(false);
  };

  // Priority badge styling mapping adapted for Deep Navy & Light modes
  const priorityStyles = {
    high: "bg-rose-50 text-rose-600 border-rose-200/80 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-900/50",
    medium: "bg-amber-50 text-amber-700 border-amber-200/80 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900/50",
    low: "bg-emerald-50 text-emerald-700 border-emerald-200/80 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900/50",
  };

  const priorityKey = ticket.priority?.toLowerCase() || "low";
  const currentPriorityStyle =
    priorityStyles[priorityKey] || priorityStyles.low;

  return (
    <>
      <Draggable draggableId={String(ticket.id)} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            onClick={() => navigate(`/ticket/${ticket.id}`)}
            className={`group relative w-full rounded-xl border p-3.5 cursor-pointer flex flex-col justify-between gap-3 overflow-hidden transition-all duration-200
              bg-white dark:bg-[#0b1329]
              ${
                snapshot.isDragging
                  ? "shadow-2xl rotate-2 scale-105 border-sky-500 dark:border-sky-400 ring-2 ring-sky-500/20"
                  : "border-slate-200/80 dark:border-blue-900/40 hover:shadow-md hover:border-sky-300 dark:hover:border-blue-700"
              }`}
          >
            <div className="w-full min-w-0">
              {/* Header Row */}
              <div className="flex items-start justify-between gap-2 mb-1.5 w-full min-w-0">
                <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors line-clamp-2 leading-snug wrap-break-words min-w-0 flex-1">
                  {ticket.title}
                </h3>

                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border shrink-0 ${currentPriorityStyle}`}
                >
                  {ticket.priority || "Low"}
                </span>
              </div>

              {/* Description */}
              {ticket.description && (
                <p className="text-xs text-slate-500 dark:text-slate-400 font-normal line-clamp-2 leading-relaxed wrap-break-words min-w-0">
                  {ticket.description}
                </p>
              )}
            </div>

            <div className="w-full min-w-0 pt-1">
              {/* Assignee Information */}
              <div className="border-t border-slate-100 dark:border-blue-900/30 pt-3">
                <label className="text-[11px] font-semibold text-slate-500 dark:text-sky-300/70 mb-1.5 block font-mono">
                  Assignee
                </label>

                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-sky-100 dark:bg-[#0f1933] border border-slate-200 dark:border-blue-800/60 flex items-center justify-center text-sky-700 dark:text-sky-400 font-bold text-xs shrink-0">
                    {ticket.assignee ? (
                      ticket.assignee.charAt(0).toUpperCase()
                    ) : (
                      <User size={14} />
                    )}
                  </div>

                  <select
                    value={ticket.assignee || ""}
                    onClick={(e) => e.stopPropagation()}
                    onChange={handleAssignChange}
                    className="flex-1 border rounded-lg px-2 py-1 text-xs bg-white dark:bg-[#0f1933] text-slate-800 dark:text-slate-200 border-slate-200 dark:border-blue-900/60 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:focus:ring-sky-400"
                  >
                    <option value="" className="bg-white dark:bg-[#0b1329]">
                      Unassigned
                    </option>

                    {users.map((user) => (
                      <option
                        key={user.id}
                        value={user.name}
                        className="bg-white dark:bg-[#0b1329]"
                      >
                        {user.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-1 pt-2 border-t border-slate-100 dark:border-blue-900/30 w-full min-w-0 mt-3">
                {/* Edit Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClick?.(ticket);
                  }}
                  className="p-1.5 rounded-lg text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-blue-900/40 active:scale-95 transition-all"
                  title="Edit ticket"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>

                {/* Delete Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDeleteModal(true);
                  }}
                  className="p-1.5 rounded-lg text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 active:scale-95 transition-all"
                  title="Delete ticket"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </Draggable>

      {/* Delete Modal */}
      {showDeleteModal &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
            onClick={() => setShowDeleteModal(false)}
          >
            <div
              className="bg-white dark:bg-[#0b1329] rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-100 dark:border-blue-900/50 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900/50 flex items-center justify-center mb-4 mx-auto text-rose-600 dark:text-rose-400">
                <AlertTriangle className="w-6 h-6" />
              </div>

              <div className="text-center mb-6">
                <h4 className="text-base font-bold text-slate-800 dark:text-white mb-1">
                  Delete Ticket?
                </h4>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed wrap-break-words">
                  Are you sure you want to delete{" "}
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    "{ticket.title}"
                  </span>
                  ? This action cannot be undone.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-[#0f1933] hover:bg-slate-200 dark:hover:bg-blue-900/40 transition-colors cursor-pointer border border-transparent dark:border-blue-900/50"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleDeleteConfirm}
                  className="flex-1 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 shadow-xs transition-colors cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default memo(Ticket);