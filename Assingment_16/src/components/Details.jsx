import React from 'react'
import { useSearchParams, Link } from 'react-router'
import { data } from './data'

const Details = () => {
    const [searchParam, setSearchParam] = useSearchParams()
    const id = searchParam.get("movie_id")
    const movie = data.find(m=> m.imdbId === id)
  return (
    
      <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      {/* Detail Wrapper Container */}
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        
        {/* Back Navigation Button */}
        <div className="mb-6">
          <Link 
            to="/movie" 
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            ← Go back
          </Link>
        </div>

        {/* Core Movie Layout Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md shadow-slate-100/50 md:flex">
          
          {/* Left Column: Premium Poster Frame */}
          <div className="relative md:w-2/5 md:shrink-0 bg-slate-100">
            <img 
              src={movie?.imgUrl || 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=500'} 
              alt={movie.title} 
              className="h-full w-full object-cover object-center max-h-[500px] md:max-h-none"
            />
          </div>

          {/* Right Column: Metadata & Description Info */}
          <div className="flex flex-col justify-between p-6 sm:p-8 md:w-3/5">
            <div className="space-y-4">
              
              {/* Genre tag placeholder / visual accent */}
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700 uppercase tracking-wider">
                Feature Film
              </span>

              {/* Movie Title */}
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                {movie.title}
              </h1>

              {/* Sub-divider Line */}
              <div className="h-px w-16 bg-blue-500" />

              {/* Synopsis/Description Block */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Synopsis
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  {movie.description || "No description available for this title."}
                </p>
              </div>
            </div>

            {/* Bottom Section: Watch External Link Action Button */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <Link 
                to={movie.imdbUrl || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-600/10 transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.99] sm:w-auto"
              >
                Watch Now on IMDb
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Details
