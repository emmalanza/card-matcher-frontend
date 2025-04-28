import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Spinner from "@components/ui/spinner/Spinner";
import Card from "@components/cards/Card";
import backgroundImage from '@assets/img/bg-cards.webp';
import SearchBar from "@components/filters/SearchBar";
import Filter from "@components/filters/Filter";
import { getCardsBySetId } from "@services/cards/cardService";

function CardsGrid({setId, setName}) {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");

  const rarity = [
    "DIAMOND_1",
    "DIAMOND_2",
    "DIAMOND_3",
    "DIAMOND_4",
    "STAR_1",
    "STAR_2",
    "STAR_3",
    "SHINY_1",
    "SHINY_2",
    "CROWN",
    "PROMO"
  ];

  // get cards from api
  useEffect(() => {
    const getCards = async () => {
      try {
        const cardsData = await getCardsBySetId(setId);
        setCards(cardsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };
    getCards();
  }, []);

  // filter cards
  useEffect(() => {
    const filterCards = () => {
      let result = cards;

      if (searchQuery) {
        result = result.filter((card) =>
          card.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      if (filter) {
        result = result.filter((card) => card.rarity === filter);
      }

      setFilteredCards(result);
    };

    filterCards();
  }, [searchQuery, filter, cards]);


  if (isLoading) return <Spinner />;
  if (error) return <p>No se han podido cargar las cartas</p>;

  return (
    <section
      className="flex flex-col items-center justify-center 
      bg-cover bg-center min-h-screen bg-fixed pt-36"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full max-w-7xl px-10 py-4
      flex flex-col justify-center items-center gap-2 md:gap-0 md:flex-row md:justify-between">
        <h1 className="text-3xl text-primary font-bold italic">{setName}</h1>
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeholder={"Buscar carta por nombre"} />
          <Filter filter={filter} setFilter={setFilter} options={rarity} labl/>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <AnimatePresence>
          {filteredCards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="will-change-transform"
            >
              <Card card={card} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default CardsGrid;
