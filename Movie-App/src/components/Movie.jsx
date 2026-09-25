import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch("https://api.tvmaze.com/shows");
        const data = await res.json();
        // Slicing to 12 for a perfectly balanced layout
        setMovies(data.slice(0, 12)); 
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fcfcfc]">
        <div className="flex flex-col items-center gap-3">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-neutral-800 border-t-transparent"></div>
          <span className="text-xs font-medium tracking-wider text-neutral-400 uppercase">Updating Catalog...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-neutral-900 px-4 py-12 sm:px-6 lg:px-12 antialiased">
      {/* Real-world Navigation Breadcrumb & Header */}
      <header className="mx-auto max-w-7xl mb-10">
        <div className="flex items-center gap-2 text-xs font-medium text-neutral-400 uppercase tracking-wider mb-3">
          <span>Browse</span>
          <span>/</span>
          <span className="text-neutral-900">Premium Series</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-neutral-200 pb-6">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-neutral-900 uppercase sm:text-4xl">
              Current Directory
            </h1>
            <p className="mt-1 text-sm text-neutral-500">
              Live schedule updates and critical consensus from global streaming networks.
            </p>
          </div>
          {/* Quick Filter Pill purely for visual realism */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="text-xs font-bold bg-neutral-900 text-white px-3 py-1.5 rounded-full cursor-pointer">All Shows</span>
            <span className="text-xs font-medium text-neutral-500 hover:bg-neutral-200/60 px-3 py-1.5 rounded-full cursor-pointer transition-colors">Trending</span>
          </div>
        </div>
      </header>

      {/* Realistic Asymmetric/Alternating Grid System */}
      <main className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {movies.map((m) => (
          <div 
            key={m.id}
            className="group flex flex-col sm:flex-row bg-white border border-neutral-200/70 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-neutral-200/40 hover:border-neutral-300"
          >
            {/* Left: Fixed Realistic Aspect-Ratio Image Cover */}
            <div className="relative sm:w-47 shrink-0 aspect-2/3 sm:aspect-auto overflow-hidden bg-neutral-100">
              {/* Dynamic Status Tag */}
              {m.status && (
                <span className={`absolute top-3 left-3 z-10 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider shadow-sm ${
                  m.status === "Running" ? "bg-emerald-500 text-white" : "bg-neutral-800 text-neutral-200"
                }`}>
                  {m.status}
                </span>
              )}
              <img
                src={m.image?.medium || "https://via.placeholder.com/210x295?text=No+Image"}
                alt={m.name}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                loading="lazy"
              />
            </div>

            {/* Right: Informational Panel */}
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                {/* Meta Row */}
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  <span className="text-neutral-700">{m.network?.name || m.webChannel?.name || "Network"}</span>
                  <span>•</span>
                  <span>{m.runtime ? `${m.runtime} Mins` : "Variable"}</span>
                  <span>•</span>
                  <span className="text-neutral-500">{m.language || "English"}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold tracking-tight text-neutral-900 group-hover:text-neutral-700 transition-colors">
                  {m.name}
                </h2>

                {/* Genres */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {m.genres?.slice(0, 2).map((genre) => (
                    <span key={genre} className="text-[10px] font-medium px-2 py-0.5 bg-neutral-100 rounded text-neutral-600">
                      {genre}
                    </span>
                  ))}
                </div>

                {/* Cleansed Summary Text */}
                <p className="mt-3 text-xs text-neutral-500 line-clamp-3 leading-relaxed">
                  {m.summary ? m.summary.replace(/<[^>]*>/g, '') : "Synopsis summary currently unavailable for this broadcasting window."}
                </p>
              </div>

              {/* Action and Metrics Footer */}
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                {/* Score badge modeled after professional rating UI */}
                <div className="flex items-center gap-2">
                  <div className="bg-neutral-50 border border-neutral-200 px-2 py-1 rounded flex items-center gap-1">
                    <span className="text-amber-500 text-xs">★</span>
                    <span className="text-xs font-bold text-neutral-800">
                      {m.rating?.average ? m.rating.average.toFixed(1) : "N/A"}
                    </span>
                  </div>
                  <span className="text-[10px] text-neutral-400 font-medium">User Score</span>
                </div>

                {/* Clean, Production-ready Link Anchor */}
                <Link
                  to={`/movies/details?movie_id=${m.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-neutral-600 transition-colors"
                >
                  Overview
                  <svg className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Movie;