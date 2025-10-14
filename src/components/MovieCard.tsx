interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
  release_date: string;
}

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const imageBase = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="bg-gray-800 text-white rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform">
      <img
        src={movie.poster_path ? imageBase + movie.poster_path : "/no-poster.png"}
        alt={movie.title}
        className="w-full h-80 object-cover"
      />
      <div className="p-4 flex flex-col justify-between h-32">
        <h2 className="text-lg font-bold truncate">{movie.title}</h2>
        <p className="text-sm text-gray-400">
          ⭐ {movie.vote_average.toFixed(1)} | 📅 {movie.release_date?.slice(0, 4)}
        </p>
      </div>
    </div>
  );
}
