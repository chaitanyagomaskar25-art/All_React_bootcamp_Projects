import React from 'react'
import { Form, Link } from 'react-router'

const CreateTicket = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-start pt-6 sm:pt-12 p-4 bg-slate-100 dark:bg-[#070d19] font-sans text-slate-900 dark:text-sky-100 antialiased transition-colors duration-300 [scrollbar:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      {/* Form Card Container */}
      <div className="relative w-full max-w-lg bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-blue-900/50 rounded-3xl p-6 sm:p-8 shadow-xl overflow-hidden">
        {/* Top Decorative Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-blue-600 via-sky-500 to-indigo-500" />

        {/* Header */}
        <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-slate-200 dark:border-blue-900/40">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          <h1 className="text-lg font-extrabold text-slate-800 dark:text-white tracking-tight">
            Create New Ticket
          </h1>
        </div>

        <Form method="post" className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-xs font-bold text-slate-600 dark:text-sky-400/70 uppercase tracking-wider font-mono mb-1.5">
              Title
            </label>
            <input
              name="title"
              placeholder="Enter ticket title..."
              required
              className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#0f1933] border border-slate-200 dark:border-blue-900/60 rounded-xl text-sm text-slate-800 dark:text-sky-100 font-medium placeholder-slate-400 dark:placeholder-sky-400/50 focus:outline-none focus:bg-white dark:focus:bg-[#0f1933] focus:border-blue-500 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold text-slate-600 dark:text-sky-400/70 uppercase tracking-wider font-mono mb-1.5">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Add detailed description..."
              required
              rows={4}
              className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#0f1933] border border-slate-200 dark:border-blue-900/60 rounded-xl text-sm text-slate-800 dark:text-sky-100 font-medium placeholder-slate-400 dark:placeholder-sky-400/50 focus:outline-none focus:bg-white dark:focus:bg-[#0f1933] focus:border-blue-500 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 resize-none [scrollbar:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            />
          </div>

          {/* Priority & Status Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Priority Select */}
            <div>
              <label className="block text-xs font-bold text-slate-600 dark:text-sky-400/70 uppercase tracking-wider font-mono mb-1.5">
                Priority
              </label>
              <select
                name="priority"
                defaultValue="Medium"
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#0f1933] border border-slate-200 dark:border-blue-900/60 rounded-xl text-sm text-slate-800 dark:text-sky-100 font-semibold focus:outline-none focus:bg-white dark:focus:bg-[#0f1933] focus:border-blue-500 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 cursor-pointer"
              >
                <option value="Low" className="bg-white dark:bg-[#0b1329]">🌱 Low</option>
                <option value="Medium" className="bg-white dark:bg-[#0b1329]">⚡ Medium</option>
                <option value="High" className="bg-white dark:bg-[#0b1329]">🔥 High</option>
                <option value="Critical" className="bg-white dark:bg-[#0b1329]">🚨 Critical</option>
              </select>
            </div>

            {/* Status Select */}
            <div>
              <label className="block text-xs font-bold text-slate-600 dark:text-sky-400/70 uppercase tracking-wider font-mono mb-1.5">
                Status
              </label>
              <select
                name="status"
                defaultValue="todo"
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#0f1933] border border-slate-200 dark:border-blue-900/60 rounded-xl text-sm text-slate-800 dark:text-sky-100 font-semibold focus:outline-none focus:bg-white dark:focus:bg-[#0f1933] focus:border-blue-500 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 cursor-pointer"
              >
                <option value="todo" className="bg-white dark:bg-[#0b1329]">Todo</option>
                <option value="progress" className="bg-white dark:bg-[#0b1329]">In Progress</option>
                <option value="done" className="bg-white dark:bg-[#0b1329]">Done</option>
              </select>
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-4 border-t border-slate-200 dark:border-blue-900/40 flex items-center justify-end gap-3">
            <Link to="/">
              <button
                type="button"
                className="px-5 py-2.5 rounded-xl text-sm font-bold text-slate-700 dark:text-sky-200 bg-slate-100 dark:bg-[#0f1933] border border-slate-200 dark:border-blue-800/60 hover:bg-slate-200 dark:hover:bg-blue-900/60 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              Create Ticket
            </button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default CreateTicket