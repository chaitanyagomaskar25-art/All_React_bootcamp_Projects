import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useUpdateTicket } from "../hooks/useUpdateTicket";
import { useUsers } from "../hooks/useUsers";
import { X, User, Flame, Zap, Leaf } from "lucide-react";

const Model = ({ ticket, onClose }) => {
  const inputRef = useRef();
  const modalRef = useRef();

  // Fetch Users & React Query Mutation
  const { data: users = [] } = useUsers();
  const { mutate: updateTicket } = useUpdateTicket();

  // Editable State
  const [title, setTitle] = useState(ticket?.title || "");
  const [description, setDescription] = useState(ticket?.description || "");
  const [priority, setPriority] = useState(ticket?.priority || "low");
  const [assignee, setAssignee] = useState(ticket?.assignee || "");

  // Auto Focus Title Input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Close Modal on Escape Key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Prevent Background Body Scrolling while Modal is Open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Save Ticket Updates
  const handleSave = () => {
    updateTicket(
      {
        id: ticket.id,
        updates: {
          title,
          description,
          priority,
          assignee,
        },
      },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  };

  return createPortal(
    /* Full-Screen Backdrop Overlay */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Centered Popup Card Surface */}
      <div
        className="relative w-full max-w-lg bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-blue-900/60 rounded-3xl p-5 sm:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-200 overflow-hidden"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Top Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 via-sky-400 to-indigo-500" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200/80 dark:border-blue-900/40">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
            <h2 className="text-base font-extrabold text-slate-800 dark:text-white tracking-tight font-sans">
              Edit Ticket Details
            </h2>
          </div>

          {/* Top Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 dark:text-sky-300/60 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-blue-900/40 transition-colors cursor-pointer"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="space-y-4">
          {/* Title Input */}
          <div>
            <label className="block text-[11px] font-bold text-slate-600 dark:text-sky-300/80 uppercase tracking-wider font-mono mb-1.5">
              Title
            </label>
            <input
              ref={inputRef}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#0f1933] border border-slate-200 dark:border-blue-900/60 rounded-xl text-sm text-slate-800 dark:text-slate-100 font-medium focus:outline-none focus:bg-white dark:focus:bg-[#0f1933] focus:border-sky-500 dark:focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 transition-all duration-200"
              placeholder="Enter ticket title..."
            />
          </div>

          {/* Description Input */}
          <div>
            <label className="block text-[11px] font-bold text-slate-600 dark:text-sky-300/80 uppercase tracking-wider font-mono mb-1.5">
              Description
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#0f1933] border border-slate-200 dark:border-blue-900/60 rounded-xl text-sm text-slate-800 dark:text-slate-100 font-medium focus:outline-none focus:bg-white dark:focus:bg-[#0f1933] focus:border-sky-500 dark:focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 transition-all duration-200 resize-none [scrollbar:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              placeholder="Add detailed description..."
            />
          </div>

          {/* Priority & Assignee Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Priority Select */}
            <div>
              <label className="block text-[11px] font-bold text-slate-600 dark:text-sky-300/80 uppercase tracking-wider font-mono mb-1.5">
                Priority
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#0f1933] border border-slate-200 dark:border-blue-900/60 rounded-xl text-sm text-slate-800 dark:text-slate-100 font-semibold focus:outline-none focus:border-sky-500 dark:focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 transition-all duration-200 cursor-pointer"
              >
                <option value="high" className="bg-white dark:bg-[#0b1329]">
                  🔥 High
                </option>
                <option value="medium" className="bg-white dark:bg-[#0b1329]">
                  ⚡ Medium
                </option>
                <option value="low" className="bg-white dark:bg-[#0b1329]">
                  🌱 Low
                </option>
              </select>
            </div>

            {/* Assignee Select */}
            <div>
              <label className="block text-[11px] font-bold text-slate-600 dark:text-sky-300/80 uppercase tracking-wider font-mono mb-1.5">
                Assignee
              </label>
              <select
                value={assignee}
                onChange={(e) => setAssignee(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#0f1933] border border-slate-200 dark:border-blue-900/60 rounded-xl text-sm text-slate-800 dark:text-slate-100 font-medium focus:outline-none focus:border-sky-500 dark:focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 transition-all duration-200 cursor-pointer"
              >
                <option value="" className="bg-white dark:bg-[#0b1329]">
                  Unassigned
                </option>
                {users.map((user) => (
                  <option
                    key={user.id || user._id || user.name}
                    value={user.name}
                    className="bg-white dark:bg-[#0b1329]"
                  >
                    {user.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 mt-7 pt-4 border-t border-slate-200/80 dark:border-blue-900/40">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-[#0f1933] hover:bg-slate-200 dark:hover:bg-blue-900/40 active:scale-95 transition-all duration-200 cursor-pointer border border-transparent dark:border-blue-900/50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2.5 rounded-xl text-xs font-extrabold text-white bg-linear-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 shadow-md shadow-sky-500/20 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Model;