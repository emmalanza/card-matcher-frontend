import React, { useEffect, useState } from "react";
import Card from "@components/cards/Card";
import backgroundImage from '@assets/img/bg-cards.webp';
import { getCardsBySet } from "@services/cards/cardService";

function CardsGrid() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCards = async () => {
      try {
        const cardsData = await getCardsBySet('A1');
        setCards(cardsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getCards();
  }, []);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>No se han podido cargar las cartas</p>;

  return (
    <section
    className="flex flex-col items-center justify-center 
    bg-cover bg-center min-h-screen bg-fixed" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-2xl font-bold mb-4">Card Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}

export default CardsGrid;
