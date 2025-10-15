import { useState, type FormEvent } from "react";

interface HeaderProps {
  onSearch: (query: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold tracking-wide">
          <a href="/" className="header-logo">🎬 CineFiap</a>
        </h1>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            placeholder="Buscar filmes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-3 py-1 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-1 rounded-lg font-semibold transition"
          >
            Buscar
          </button>
        </form>
      </div>
    </header>
  );
}
