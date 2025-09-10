import MovieCard from "./MovieCard";

interface Movie {
  id: number;
  title: string;
  year: number;
  image: string;
}

interface Props {
  movies: Movie[];
}

export default function MovieList({ movies }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          year={movie.year}
          image={movie.image}
        />
      ))}
    </div>
  );
}
