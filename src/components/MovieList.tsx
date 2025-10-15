import MovieCard from "./MovieCard";

interface Movie {
  id: number;
  title: string;
  poster_path?: string | null;
  image?: string;
  vote_average?: number;
  release_date?: string;
  year?: number;
}

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  if (!movies.length)
    return <p className="text-center text-gray-400 mt-10">Nenhum filme encontrado 😢</p>;

  return (
    <div className="movie-grid grid gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
