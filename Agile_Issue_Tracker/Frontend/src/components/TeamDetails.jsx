import { useParams, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/user";
import {
  Mail,
  Phone,
  Building2,
  Briefcase,
  MapPin,
  Calendar,
  FolderKanban,
  UserCheck,
  ArrowLeft,
  AlertCircle,
  User,
} from "lucide-react";

const TeamDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: member,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
  });

  // Skeleton Loading State
  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="h-8 w-24 bg-slate-200 dark:bg-blue-900/40 animate-pulse rounded-lg" />
        <div className="bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-blue-900/50 rounded-3xl p-8 space-y-8 shadow-sm">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-slate-200 dark:bg-blue-900/40 animate-pulse shrink-0" />
            <div className="space-y-3">
              <div className="h-8 w-48 bg-slate-200 dark:bg-blue-900/40 animate-pulse rounded-lg" />
              <div className="h-4 w-32 bg-slate-200 dark:bg-blue-900/40 animate-pulse rounded-md" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="h-48 bg-slate-100 dark:bg-blue-950/40 rounded-2xl animate-pulse" />
            <div className="h-48 bg-slate-100 dark:bg-blue-950/40 rounded-2xl animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (isError || !member) {
    return (
      <div className="max-w-xl mx-auto my-12 flex flex-col items-center justify-center bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 rounded-3xl p-8 text-center">
        <AlertCircle className="w-12 h-12 text-rose-600 dark:text-rose-400 mb-3" />
        <h2 className="text-xl font-bold text-rose-900 dark:text-rose-200">
          Failed to load member profile
        </h2>
        <p className="text-xs text-rose-700 dark:text-rose-400 mt-1 max-w-sm">
          We couldn't retrieve the details for this team member. The member might have been deleted or the API is unreachable.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Team</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-blue-900/50 hover:border-blue-600 dark:hover:border-blue-500 rounded-xl text-xs font-bold text-slate-800 dark:text-sky-200 transition-all shadow-sm cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4 text-blue-600 dark:text-sky-400" />
        <span>Back to Team</span>
      </button>

      {/* Profile Card */}
      <div className="bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-blue-900/50 rounded-3xl p-6 sm:p-10 shadow-md">
        
        {/* Header Profile Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left pb-8 border-b border-slate-100 dark:border-blue-900/40">
          <div className="w-24 h-24 rounded-2xl bg-linear-to-tr from-blue-600 to-sky-500 text-white flex items-center justify-center text-4xl font-extrabold shadow-lg shadow-blue-600/30 shrink-0">
            {member.avatar ? (
              member.avatar
            ) : (
              member.name?.charAt(0).toUpperCase() || "U"
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {member.name}
                </h1>
                <p className="text-sm font-bold text-blue-600 dark:text-sky-400 mt-1">
                  {member.role || "Team Member"}
                </p>
              </div>

              {/* Status Badge */}
              <div className="self-center sm:self-start">
                <span className="inline-flex items-center gap-1.5 font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 px-3 py-1 rounded-full text-xs border border-emerald-300 dark:border-emerald-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Active Member
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          
          {/* Personal Information Box */}
          <div className="bg-slate-50 dark:bg-[#0f1933]/60 border border-slate-200/80 dark:border-blue-900/40 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-extrabold text-slate-900 dark:text-sky-100 border-b border-slate-200 dark:border-blue-900/40 pb-3 flex items-center gap-2">
              <User className="w-4 h-4 text-blue-600 dark:text-sky-400" />
              <span>Personal Information</span>
            </h2>

            <div className="space-y-3.5 text-xs font-medium text-slate-800 dark:text-sky-200">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-400 dark:text-sky-400/60 shrink-0" />
                <span className="text-slate-500 dark:text-sky-400/70 min-w-22.5 font-bold">Email:</span>
                <span className="font-semibold text-slate-900 dark:text-white truncate">{member.email || "N/A"}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-400 dark:text-sky-400/60 shrink-0" />
                <span className="text-slate-500 dark:text-sky-400/70 min-w-22.5 font-bold">Phone:</span>
                <span className="font-semibold text-slate-900 dark:text-white">{member.phone || "N/A"}</span>
              </div>

              <div className="flex items-center gap-3">
                <Building2 className="w-4 h-4 text-slate-400 dark:text-sky-400/60 shrink-0" />
                <span className="text-slate-500 dark:text-sky-400/70 min-w-22.5 font-bold">Department:</span>
                <span className="font-semibold text-slate-900 dark:text-white">{member.department || "N/A"}</span>
              </div>

              <div className="flex items-center gap-3">
                <Briefcase className="w-4 h-4 text-slate-400 dark:text-sky-400/60 shrink-0" />
                <span className="text-slate-500 dark:text-sky-400/70 min-w-22.5 font-bold">Experience:</span>
                <span className="font-semibold text-slate-900 dark:text-white">{member.experience || "N/A"}</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-slate-400 dark:text-sky-400/60 shrink-0" />
                <span className="text-slate-500 dark:text-sky-400/70 min-w-22.5 font-bold">Location:</span>
                <span className="font-semibold text-slate-900 dark:text-white">{member.location || "N/A"}</span>
              </div>
            </div>
          </div>

          {/* Work Information Box */}
          <div className="bg-slate-50 dark:bg-[#0f1933]/60 border border-slate-200/80 dark:border-blue-900/40 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-extrabold text-slate-900 dark:text-sky-100 border-b border-slate-200 dark:border-blue-900/40 pb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-600 dark:text-sky-400" />
              <span>Work Information</span>
            </h2>

            <div className="space-y-3.5 text-xs font-medium text-slate-800 dark:text-sky-200">
              <div className="flex items-center gap-3">
                <Briefcase className="w-4 h-4 text-slate-400 dark:text-sky-400/60 shrink-0" />
                <span className="text-slate-500 dark:text-sky-400/70 min-w-22.5 font-bold">Role:</span>
                <span className="font-semibold text-slate-900 dark:text-white">{member.role || "N/A"}</span>
              </div>

              <div className="flex items-center gap-3">
                <UserCheck className="w-4 h-4 text-slate-400 dark:text-sky-400/60 shrink-0" />
                <span className="text-slate-500 dark:text-sky-400/70 min-w-22.5 font-bold">Status:</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">Active</span>
              </div>

              <div className="flex items-center gap-3">
                <FolderKanban className="w-4 h-4 text-slate-400 dark:text-sky-400/60 shrink-0" />
                <span className="text-slate-500 dark:text-sky-400/70 min-w-22.5 font-bold">Projects:</span>
                <span className="font-semibold text-slate-900 dark:text-white">{member.projects || "N/A"}</span>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-slate-400 dark:text-sky-400/60 shrink-0" />
                <span className="text-slate-500 dark:text-sky-400/70 min-w-22.5 font-bold">Joined:</span>
                <span className="font-semibold text-slate-900 dark:text-white">{member.joined || "N/A"}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TeamDetails;