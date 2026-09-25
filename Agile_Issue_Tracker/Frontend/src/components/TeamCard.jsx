import { useState, useEffect } from "react";
import { Mail, Briefcase, UserCircle, Trash2, ArrowRight, AlertTriangle, X } from "lucide-react";
import { useNavigate } from "react-router";
import { useDeleteUser } from "../hooks/useDeleteUser";

const TeamCard = ({ member }) => {
  const navigate = useNavigate();
  const { mutate: deleteMutate, isLoading: isDeleting } = useDeleteUser();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const openDeleteModal = (e) => {
    e.stopPropagation();
    setIsDeleteOpen(true);
  };

  const closeDeleteModal = (e) => {
    if (e) e.stopPropagation();
    setIsDeleteOpen(false);
  };

  const handleConfirmDelete = (e) => {
    e.stopPropagation();
    deleteMutate(member.id, {
      onSuccess: () => {
        setIsDeleteOpen(false);
      },
    });
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isDeleteOpen) {
        setIsDeleteOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDeleteOpen]);

  return (
    <>
      <div className="flex flex-col justify-between bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-blue-900/50 hover:border-blue-600 dark:hover:border-blue-500 rounded-2xl p-6 shadow-md dark:shadow-none transition-all duration-200">
        <div>
          {/* Top Header: Avatar & Main Info */}
          <div className="flex items-center gap-4 mb-5 pb-4 border-b border-slate-200 dark:border-blue-900/50">
            <div className="w-14 h-14 rounded-xl bg-linear-to-tr from-blue-600 to-sky-500 text-white flex items-center justify-center text-xl font-extrabold shadow-md shadow-blue-500/20 shrink-0">
              {member.avatar ? (
                member.avatar
              ) : (
                member.name?.charAt(0).toUpperCase() || "U"
              )}
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-bold text-slate-900 dark:text-sky-100 truncate">
                {member.name}
              </h2>
              <p className="text-xs font-semibold text-blue-600 dark:text-sky-400 truncate mt-0.5">
                {member.role || "Team Member"}
              </p>
            </div>
          </div>

          {/* Member Details */}
          <div className="space-y-3 text-xs">
            <div className="flex items-center gap-3 text-slate-800 dark:text-sky-200 font-medium min-w-0">
              <Mail className="w-4 h-4 text-slate-400 dark:text-sky-400/60 shrink-0" />
              <span className="truncate">{member.email || "No email provided"}</span>
            </div>

            <div className="flex items-center gap-3 text-slate-800 dark:text-sky-200 font-medium min-w-0">
              <Briefcase className="w-4 h-4 text-slate-400 dark:text-sky-400/60 shrink-0" />
              <span className="truncate">{member.department || member.role || "General"}</span>
            </div>

            <div className="flex items-center gap-3">
              <UserCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 px-2.5 py-1 rounded-md text-[11px] border border-emerald-300 dark:border-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Active Member
              </span>
            </div>
          </div>
        </div>

        {/* Footer Action Buttons */}
        <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-200 dark:border-blue-900/50">
          <button
            onClick={() => navigate(`/team/${member.id}`)}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-md shadow-blue-600/30 active:scale-[0.98]"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={openDeleteModal}
            className="p-2.5 rounded-xl border border-rose-200 dark:border-rose-900/60 text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/30 hover:bg-rose-600 hover:text-white dark:hover:bg-rose-600 dark:hover:text-white transition-all cursor-pointer shrink-0"
            title="Delete Member"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Interactive Delete Confirmation Modal */}
      {isDeleteOpen && (
        <div
          onClick={closeDeleteModal}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 dark:bg-[#070d19]/80 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-blue-900/60 rounded-3xl p-6 shadow-2xl animate-in zoom-in-95 duration-200"
          >
            {/* Close Cross Button */}
            <button
              onClick={closeDeleteModal}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 dark:text-sky-400/60 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-blue-950/80 transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Icon & Header */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-950/80 border border-rose-200 dark:border-rose-900/80 flex items-center justify-center mb-4 text-rose-600 dark:text-rose-400">
                <AlertTriangle className="w-6 h-6 stroke-[2.5]" />
              </div>

              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                Delete Team Member?
              </h3>

              <p className="text-xs text-slate-600 dark:text-sky-300/70 mt-2 leading-relaxed">
                Are you sure you want to remove <strong className="text-slate-900 dark:text-sky-100">{member.name}</strong>? This action cannot be undone.
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={closeDeleteModal}
                className="flex-1 py-2.5 px-4 bg-slate-100 dark:bg-blue-950/80 hover:bg-slate-200 dark:hover:bg-blue-900/80 text-slate-700 dark:text-sky-200 rounded-xl text-xs font-bold transition-all cursor-pointer border border-slate-200 dark:border-blue-800/60"
              >
                Cancel
              </button>

              <button
                onClick={handleConfirmDelete}
                disabled={isDeleting}
                className="flex-1 py-2.5 px-4 bg-rose-600 hover:bg-rose-700 active:scale-[0.98] text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-rose-600/20 cursor-pointer disabled:opacity-50"
              >
                {isDeleting ? "Deleting..." : "Delete Member"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamCard;