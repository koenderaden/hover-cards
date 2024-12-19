"use client";

const cards = [
  {
    id: 1,
    description: "Beschrijving voor Kaart 1",
  },
  {
    id: 2,
    description: "Beschrijving voor Kaart 2",
  },
  {
    id: 3,
    description: "Beschrijving voor Kaart 3",
  },
];

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="flex flex-wrap gap-4 justify-center">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative overflow-hidden rounded-lg shadow-lg bg-gray-700 w-[424px] h-[400px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <p className="text-gray-200">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
