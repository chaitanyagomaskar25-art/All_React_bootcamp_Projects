import React from 'react'

const ErrorPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-slate-100/60">
      {/* Container Card */}
      <div className="relative w-full max-w-md bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-8 shadow-xl text-center overflow-hidden">
        {/* Top Accent linear Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-rose-500 via-amber-500 to-indigo-500" />

        {/* Warning Icon Container */}
        <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center mx-auto mb-5 text-rose-500 shadow-sm">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Status Code / Subhead */}
        <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-50 border border-rose-200/80 px-3 py-1 rounded-full inline-block mb-3">
          404 - Page Not Found
        </span>

        {/* Main Error Title */}
        <h1 className="text-2xl font-extrabold text-slate-800 mb-2 tracking-tight">
          Oops! Something went wrong
        </h1>

        {/* Descriptive Text */}
        <p className="text-xs text-slate-500 font-normal leading-relaxed mb-6">
          The page or ticket you are looking for doesn't exist, has been removed, or an unexpected error occurred.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 border-t border-slate-200/80">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all duration-200 cursor-pointer"
          >
            Go Back
          </button>
          <a
            href="/"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-200 hover:shadow-indigo-300 active:scale-95 transition-all duration-200 cursor-pointer text-center"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage