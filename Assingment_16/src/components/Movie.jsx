import React from 'react'
import { data } from './data'
import { useSetIsAuth } from '../context/AuthContext'
import { Link, NavLink } from 'react-router';

const Movie = () => {
    const setIsAuth = useSetIsAuth();
  return (
<div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      {/* Top Navigation/Header */}
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
         
          
          <button 
            onClick={() => {
              localStorage.setItem('isAuth', 'false');
              setIsAuth(false);
            }}
            className="cursor-pointer rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:scale-95"
          >
            Logout
          </button> 
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
       
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {data.map((m) => (
            <div 
              key={m.imdbId} 
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
            >
              {/* Movie Poster Image Container */}
              <div className="relative aspect-2/3 w-full overflow-hidden bg-slate-100">
                <img 
                  src={m?.imgUrl || 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=500&auto=format&fit=crop'} 
                  alt={m.title} 
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              {/* Movie Info Details */}
              <div className="flex flex-1 flex-col justify-between p-4">
                <h2 
                  className="line-clamp-2 text-base font-bold leading-snug text-slate-800 transition-colors duration-200 group-hover:text-blue-600" 
                  title={m.title}
                >
                  {m.title}
                </h2>
                
                <div className="mt-4">
                  <Link 
                    to={`/movie/details?movie_id=${m.imdbId}`} 
                    className="inline-flex w-full items-center justify-center rounded-xl bg-slate-100 px-3 py-2.5 text-center text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    More Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Movie
