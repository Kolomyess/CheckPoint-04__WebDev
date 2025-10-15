interface Movie {
  id: number;
  title: string;
  poster_path?: string | null;
  image?: string;
  vote_average?: number;
  release_date?: string;
  year?: number;
}

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const imageBase = "https://image.tmdb.org/t/p/w500";
  const src = movie.poster_path ? imageBase + movie.poster_path : movie.image ?? "/no-poster.png";
  const rating = (movie.vote_average ?? 0).toFixed(1);

  return (
    <div className="movie-card">
      <div className="movie-card-media">
        <img
          src={src}
          alt={movie.title}
          className="movie-card-img"
        />
      </div>

      <div className="p-4 flex flex-col justify-between" style={{ minHeight: 72 }}>
        <h2 className="text-lg font-bold truncate">{movie.title}</h2>
        <p className="text-sm text-gray-400">
          ⭐ {rating} | 📅 {movie.release_date?.slice(0, 4) ?? movie.year}
        </p>
      </div>
    </div>
  );
}
