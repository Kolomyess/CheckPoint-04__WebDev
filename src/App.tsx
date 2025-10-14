import { useState, useEffect } from "react";
import api from "./services/api";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
  release_date: string;
}

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getPopularMovies = async () => {
    setLoading(true);
    try {
      const res = await api.get("/movie/popular?language=pt-BR&page=1");
      setMovies(res.data.results);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const searchMovies = async (query: string) => {
    if (!query) return getPopularMovies();
    setLoading(true);
    try {
      const res = await api.get(`/search/movie?query=${query}&language=pt-BR&page=1`);
      setMovies(res.data.results);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header onSearch={searchMovies} />
      {loading ? (
        <p className="text-center mt-10 text-yellow-400 animate-pulse">Carregando filmes...</p>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
}
