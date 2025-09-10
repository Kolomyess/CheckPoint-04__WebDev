interface Props {
  title: string;
  year: number;
  image: string;
}

export default function MovieCard({ title, year, image }: Props) {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:scale-105 transition-transform">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">Ano: {year}</p>
      </div>
    </div>
  );
}
