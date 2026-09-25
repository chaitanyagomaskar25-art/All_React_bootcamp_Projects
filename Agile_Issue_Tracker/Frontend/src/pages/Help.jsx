import {
  PlusCircle,
  Pencil,
  Trash2,
  GripVertical,
  MessageSquare,
  Users,
  Search,
  Filter,
  Eye,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    icon: <PlusCircle className="w-7 h-7 text-blue-500 dark:text-sky-400" />,
    title: "1. Create a Ticket",
    description:
      "Click the 'Add Ticket' button and enter the ticket title, description, priority, status and assignee.",
  },
  {
    icon: <Pencil className="w-7 h-7 text-indigo-500 dark:text-indigo-400" />,
    title: "2. Edit a Ticket",
    description:
      "Click the Edit icon on any ticket to update its title or description.",
  },
  {
    icon: <GripVertical className="w-7 h-7 text-purple-500 dark:text-purple-400" />,
    title: "3. Drag & Drop Tickets",
    description:
      "Drag a ticket from one column to another to instantly update its status.",
  },
  {
    icon: <Filter className="w-7 h-7 text-emerald-500 dark:text-emerald-400" />,
    title: "4. Filter Tickets",
    description:
      "Use the status filter to view only To Do, In Progress or Done tickets.",
  },
  {
    icon: <Search className="w-7 h-7 text-amber-500 dark:text-amber-400" />,
    title: "5. Search Tickets",
    description:
      "Use the search bar to quickly find tickets by title, description, priority, status or assignee.",
  },
  {
    icon: <Users className="w-7 h-7 text-pink-500 dark:text-pink-400" />,
    title: "6. Assign Team Members",
    description:
      "Choose a team member from the Assignee dropdown directly on the ticket.",
  },
  {
    icon: <MessageSquare className="w-7 h-7 text-cyan-500 dark:text-cyan-400" />,
    title: "7. Add Comments",
    description:
      "Open a ticket and use the Comments popup to discuss progress with your team.",
  },
  {
    icon: <Eye className="w-7 h-7 text-sky-500 dark:text-sky-300" />,
    title: "8. View Ticket Details",
    description:
      "Click a ticket card to open its detailed page containing complete information.",
  },
  {
    icon: <Trash2 className="w-7 h-7 text-rose-500 dark:text-rose-400" />,
    title: "9. Delete Tickets",
    description:
      "Click the Delete icon and confirm to permanently remove a ticket.",
  },
  {
    icon: <CheckCircle className="w-7 h-7 text-teal-500 dark:text-teal-400" />,
    title: "10. Complete Your Sprint",
    description:
      "Move all tickets to the Done column to complete your sprint successfully.",
  },
];

const Help = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 transition-colors duration-300">
      
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
          Agile Tracker User Guide
        </h1>

        <p className="text-slate-600 dark:text-sky-300/70 text-sm sm:text-base">
          Follow these steps to use the Agile Tracker efficiently.
        </p>
      </div>

      {/* Grid Steps */}
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-blue-900/50 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl dark:hover:border-blue-700/60 transition-all duration-200"
          >
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0f1933] border border-slate-200/80 dark:border-blue-800/40 shrink-0">
                {step.icon}
              </div>

              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white mb-1.5">
                  {step.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-sky-200/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Workflow Banner */}
      <div className="mt-10 bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-blue-900/50 rounded-2xl p-6 shadow-md relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 via-sky-500 to-indigo-500" />
        
        <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <span>Quick Workflow</span>
          <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-sky-300 border border-blue-200 dark:border-blue-700/50 rounded-md">
            RECOMMENDED
          </span>
        </h2>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-700 dark:text-sky-200">
          <span className="px-3 py-1.5 bg-slate-100 dark:bg-[#0f1933] border border-slate-200 dark:border-blue-800/60 rounded-xl">
            Create Ticket
          </span>
          <span className="text-blue-600 dark:text-sky-400 font-bold">→</span>
          <span className="px-3 py-1.5 bg-slate-100 dark:bg-[#0f1933] border border-slate-200 dark:border-blue-800/60 rounded-xl">
            Assign Team Member
          </span>
          <span className="text-blue-600 dark:text-sky-400 font-bold">→</span>
          <span className="px-3 py-1.5 bg-slate-100 dark:bg-[#0f1933] border border-slate-200 dark:border-blue-800/60 rounded-xl">
            Move to In Progress
          </span>
          <span className="text-blue-600 dark:text-sky-400 font-bold">→</span>
          <span className="px-3 py-1.5 bg-slate-100 dark:bg-[#0f1933] border border-slate-200 dark:border-blue-800/60 rounded-xl">
            Add Comments
          </span>
          <span className="text-blue-600 dark:text-sky-400 font-bold">→</span>
          <span className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700/50 text-blue-600 dark:text-sky-300 rounded-xl font-bold">
            Move to Done
          </span>
        </div>
      </div>
    </div>
  );
};

export default Help;