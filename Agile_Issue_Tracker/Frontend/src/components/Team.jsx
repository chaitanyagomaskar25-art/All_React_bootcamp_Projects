import { useQuery } from "@tanstack/react-query";
import TeamCard from "../components/TeamCard";
import { getUsers } from "../api/user";
import { Link } from "react-router";
import { UserPlus, Users as UsersIcon, AlertCircle } from "lucide-react";

const Team = () => {
  const {
    data: members = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  // Skeleton Loading Grid
  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-blue-900/50">
          <div className="h-8 w-44 bg-slate-200 dark:bg-blue-900/40 animate-pulse rounded-lg" />
          <div className="h-10 w-32 bg-slate-200 dark:bg-blue-900/40 animate-pulse rounded-xl" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className="h-56 bg-slate-100 dark:bg-[#0b1329] border border-slate-200 dark:border-blue-900/50 animate-pulse rounded-2xl"
            />
          ))}
        </div>
      </div>
    );
  }

  // Error State
  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-75 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 rounded-2xl p-8 text-center my-6">
        <AlertCircle className="w-10 h-10 text-rose-600 dark:text-rose-400 mb-3" />
        <h2 className="text-lg font-bold text-rose-900 dark:text-rose-200">
          Failed to load team members
        </h2>
        <p className="text-xs text-rose-600 dark:text-rose-400 mt-1">
          Unable to fetch team roster. Please check your backend connection or try again.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header & Add Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-blue-900/50">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Team Members
          </h1>
          <p className="text-xs text-slate-500 dark:text-sky-400/70 mt-1">
            Overview of all active team members, roles, and departments.
          </p>
        </div>

        <Link
          to="/add-user"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-600/30 active:scale-[0.98] transition-all shrink-0"
        >
          <UserPlus className="w-4 h-4 stroke-[2.5]" />
          <span>Add Member</span>
        </Link>
      </div>

      {/* Team Roster Grid */}
      {members.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 bg-slate-50/50 dark:bg-[#070d19]/60 border border-dashed border-slate-300 dark:border-blue-900/60 rounded-2xl text-center">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-blue-950/80 flex items-center justify-center mb-3 border border-slate-200 dark:border-blue-800/50">
            <UsersIcon className="w-6 h-6 text-slate-400 dark:text-sky-400/70" />
          </div>
          <p className="text-sm font-semibold text-slate-900 dark:text-sky-100">
            No team members found
          </p>
          <p className="text-xs text-slate-500 dark:text-sky-400/70 mt-1 max-w-sm mb-4">
            Get started by adding your first team member to the workspace.
          </p>
          <Link
            to="/add-user"
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold shadow-sm transition-all"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Add Member</span>
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Team;