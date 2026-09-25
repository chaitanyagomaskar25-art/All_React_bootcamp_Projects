import { useState } from "react";
import { useNavigate } from "react-router";
import { useAddUser } from "../hooks/useAddUser";
import { User, Briefcase, Mail, Phone, Building, Award, MapPin, ArrowLeft } from "lucide-react";

const AddUser = () => {
  const navigate = useNavigate();
  const { mutate } = useAddUser();

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    department: "",
    experience: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(formData, {
      onSuccess: () => {
        navigate("/team");
      },
    });
  };

  return (
    <div className="max-w-2xl mx-auto py-4">
      {/* Back Button */}
      <button
        type="button"
        onClick={() => navigate("/team")}
        className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-sky-300 hover:text-blue-600 dark:hover:text-white mb-6 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Team
      </button>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-blue-900/50 p-8 rounded-2xl shadow-xl space-y-6"
      >
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Add Team Member
          </h1>
          <p className="text-xs text-slate-500 dark:text-sky-400/70 mt-1">
            Fill in the information below to add a new member to your team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name */}
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-sky-300">
              Full Name *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 dark:text-sky-400/60 absolute left-3 top-3.5" />
              <input
                name="name"
                placeholder="e.g. Alex Morgan"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-[#070d19] border border-slate-300 dark:border-blue-800/60 focus:border-blue-600 dark:focus:border-blue-500 rounded-xl text-xs text-slate-900 dark:text-sky-100 placeholder-slate-400 dark:placeholder-sky-400/50 focus:outline-none transition-all shadow-sm"
                required
              />
            </div>
          </div>

          {/* Role */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-sky-300">
              Role *
            </label>
            <div className="relative">
              <Briefcase className="w-4 h-4 text-slate-400 dark:text-sky-400/60 absolute left-3 top-3.5" />
              <input
                name="role"
                placeholder="e.g. Senior Frontend Dev"
                value={formData.role}
                onChange={handleChange}
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-[#070d19] border border-slate-300 dark:border-blue-800/60 focus:border-blue-600 dark:focus:border-blue-500 rounded-xl text-xs text-slate-900 dark:text-sky-100 placeholder-slate-400 dark:placeholder-sky-400/50 focus:outline-none transition-all shadow-sm"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-sky-300">
              Email *
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 dark:text-sky-400/60 absolute left-3 top-3.5" />
              <input
                name="email"
                type="email"
                placeholder="alex@company.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-[#070d19] border border-slate-300 dark:border-blue-800/60 focus:border-blue-600 dark:focus:border-blue-500 rounded-xl text-xs text-slate-900 dark:text-sky-100 placeholder-slate-400 dark:placeholder-sky-400/50 focus:outline-none transition-all shadow-sm"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-sky-300">
              Phone
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 dark:text-sky-400/60 absolute left-3 top-3.5" />
              <input
                name="phone"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-[#070d19] border border-slate-300 dark:border-blue-800/60 focus:border-blue-600 dark:focus:border-blue-500 rounded-xl text-xs text-slate-900 dark:text-sky-100 placeholder-slate-400 dark:placeholder-sky-400/50 focus:outline-none transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Department */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-sky-300">
              Department
            </label>
            <div className="relative">
              <Building className="w-4 h-4 text-slate-400 dark:text-sky-400/60 absolute left-3 top-3.5" />
              <input
                name="department"
                placeholder="Engineering"
                value={formData.department}
                onChange={handleChange}
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-[#070d19] border border-slate-300 dark:border-blue-800/60 focus:border-blue-600 dark:focus:border-blue-500 rounded-xl text-xs text-slate-900 dark:text-sky-100 placeholder-slate-400 dark:placeholder-sky-400/50 focus:outline-none transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-sky-300">
              Experience
            </label>
            <div className="relative">
              <Award className="w-4 h-4 text-slate-400 dark:text-sky-400/60 absolute left-3 top-3.5" />
              <input
                name="experience"
                placeholder="5+ years"
                value={formData.experience}
                onChange={handleChange}
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-[#070d19] border border-slate-300 dark:border-blue-800/60 focus:border-blue-600 dark:focus:border-blue-500 rounded-xl text-xs text-slate-900 dark:text-sky-100 placeholder-slate-400 dark:placeholder-sky-400/50 focus:outline-none transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Location */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-sky-300">
              Location
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-slate-400 dark:text-sky-400/60 absolute left-3 top-3.5" />
              <input
                name="location"
                placeholder="San Francisco, CA"
                value={formData.location}
                onChange={handleChange}
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-[#070d19] border border-slate-300 dark:border-blue-800/60 focus:border-blue-600 dark:focus:border-blue-500 rounded-xl text-xs text-slate-900 dark:text-sky-100 placeholder-slate-400 dark:placeholder-sky-400/50 focus:outline-none transition-all shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-200 dark:border-blue-900/50 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => navigate("/team")}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-sky-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-blue-950/60 transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-600/30 active:scale-[0.98] transition-all cursor-pointer"
          >
            Add Member
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;