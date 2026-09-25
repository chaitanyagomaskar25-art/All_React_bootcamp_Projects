import { useSearchParams, useNavigate, Link } from "react-router";
import { useEffect, useState } from "react";

const Details = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const movieId = searchParams.get("movie_id");

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showFullSummary, setShowFullSummary] = useState(false);

  // Sync Favorites
  useEffect(() => {
    if (movieId) {
      const savedFavorites = JSON.parse(
        localStorage.getItem("movie_favorites") || "{}",
      );

      setIsFavorite(!!savedFavorites[movieId]);
    }
  }, [movieId]);

  // Fetch Movie
  useEffect(() => {
    if (!movieId) {
      setError("No movie ID provided.");
      setIsLoading(false);
      return;
    }

    const fetchMovie = async () => {
      try {
        setIsLoading(true);

        const res = await fetch(`https://api.tvmaze.com/shows/${movieId}`);

        if (!res.ok) {
          throw new Error("Failed to fetch movie.");
        }

        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error(err);

        setError(err instanceof Error ? err.message : "Something went wrong.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  // Toggle Favorite
  const toggleFavorite = () => {
    const nextState = !isFavorite;

    setIsFavorite(nextState);

    const savedFavorites = JSON.parse(
      localStorage.getItem("movie_favorites") || "{}",
    );

    if (nextState) {
      savedFavorites[movieId] = true;
    } else {
      delete savedFavorites[movieId];
    }

    localStorage.setItem("movie_favorites", JSON.stringify(savedFavorites));
  };

  // Loading State
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 animate-pulse">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <div className="grid lg:grid-cols-[320px_1fr] gap-14">
            <div className="h-120 rounded-3xl bg-slate-200" />

            <div className="space-y-6">
              <div className="h-16 w-2/3 rounded-xl bg-slate-200" />
              <div className="h-6 w-1/3 rounded-xl bg-slate-200" />

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-24 rounded-2xl bg-slate-200" />
                ))}
              </div>

              <div className="h-48 rounded-3xl bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (error || !movie) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6">
        <div className="text-6xl mb-4">⚠️</div>

        <h2 className="text-3xl font-bold text-slate-900 mb-2">
          Something went wrong
        </h2>

        <p className="text-slate-500 mb-8 text-center">
          {error || "Movie not found"}
        </p>

        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 rounded-2xl bg-slate-900 text-white font-semibold hover:scale-105 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen bg-slate-50 overflow-hidden">
      {/* Background */}
      {movie.image?.original && (
        <div className="absolute inset-0 h-13 overflow-hidden z-0">
          <img
            src={movie.image.original}
            alt=""
            className="w-full h-full object-cover blur-3xl scale-110 opacity-15"
          />

          <div className="absolute inset-0 bg-white/70" />

          <div className="absolute inset-0 bg-linear-to-b from-white/20 via-slate-50/70 to-slate-50" />
        </div>
      )}

      {/* Glow Orbs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-200/40 blur-[120px] rounded-full" />

      <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink-200/30 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-14">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="group mb-10 inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          Back
        </button>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-14 items-start">
          {/* Poster */}
          <section className="flex justify-center lg:justify-start">
            {movie.image?.original ? (
              <div
                className="relative group rounded-3xl overflow-hidden border border-white/60 shadow-[0_20px_80px_rgba(15,23,42,0.15)]
    
    md:w-137
    md:h-150
    lg:w-full
    h-full
    w-full
    max-w-full"
              >
                <img
               
                  src={movie.image.original}
                  alt={movie.name}
                  className="md:object-cover w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-white/10" />
              </div>
            ) : (
              <div className="aspect-2/3 md:w-137 lg:w-full rounded-3xl bg-slate-200 flex items-center justify-center text-slate-500 text-xl">
                No Poster
              </div>
            )}
          </section>
          {/* Content */}
          <section className="space-y-8">
            {/* Header */}
            <div className="space-y-5">
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 leading-none">
                {movie.name}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span>{movie.premiered?.split("-")[0] || "N/A"}</span>

                <span className="w-1 h-1 rounded-full bg-slate-400" />

                <span>{movie.runtime ? `${movie.runtime} min` : "N/A"}</span>

                <span className="w-1 h-1 rounded-full bg-slate-400" />

                <span>{movie.language || "N/A"}</span>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={toggleFavorite}
                  className={`group relative overflow-hidden px-6 py-3 rounded-2xl font-semibold transition-all duration-300 border backdrop-blur-xl ${
                    isFavorite
                      ? "bg-rose-500 text-white border-rose-400 shadow-lg shadow-rose-500/20"
                      : "bg-white/70 border-slate-200 text-slate-800 hover:bg-white"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isFavorite ? "❤️ Favorited" : "🤍 Add Favorite"}
                  </span>
                </button>
              </div>
            </div>

            {/* Info Cards */}
            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-5 bg-white/70 backdrop-blur-2xl border border-white rounded-3xl p-8 shadow-xl">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
                  Language
                </dt>

                <dd className="text-lg font-bold text-slate-900">
                  {movie.language || "N/A"}
                </dd>
              </div>

              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
                  Runtime
                </dt>

                <dd className="text-lg font-bold text-slate-900">
                  {movie.runtime ? `${movie.runtime} min` : "N/A"}
                </dd>
              </div>

              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
                  Rating
                </dt>

                <dd className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  {movie.rating?.average ? (
                    <>
                      <span className="text-amber-500">★</span>
                      {movie.rating.average}/10
                    </>
                  ) : (
                    "Unrated"
                  )}
                </dd>
              </div>

              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
                  Origin
                </dt>

                <dd className="text-lg font-bold text-slate-900">
                  {movie.network?.country?.name || "Global"}
                </dd>
              </div>
            </dl>

            {/* Genres */}
            {movie.genres?.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-sm uppercase tracking-[0.2em] text-slate-400 font-semibold">
                  Genres
                </h2>

                <div className="flex flex-wrap gap-3">
                  {movie.genres.map((genre, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-white text-slate-700 border border-slate-200 text-sm font-medium hover:shadow-md transition"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Summary */}
            {movie.summary && (
              <div className="bg-white/70 border border-white rounded-3xl p-8 shadow-xl backdrop-blur-2xl">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Plot Synopsis
                </h2>

                <div className="relative">
                  <div
                    className={`text-slate-600 leading-8 text-[15px] transition-all duration-500 ${
                      showFullSummary
                        ? "max-h-300"
                        : "max-h-32 overflow-hidden"
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: movie.summary,
                    }}
                  />

                  {!showFullSummary && (
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-white to-transparent pointer-events-none" />
                  )}
                </div>

                <button
                  onClick={() => setShowFullSummary(!showFullSummary)}
                  className="mt-6 text-indigo-600 hover:text-indigo-800 font-semibold transition"
                >
                  {showFullSummary ? "Show Less ▲" : "Read More ▼"}
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default Details;
