import React, { useEffect, useState } from 'react';
import Spinner from "@components/ui/spinner/Spinner";
import { getTradableCards } from '@services/cards/cardService';
import SearchBar from "@components/filters/SearchBar";
import Card from "@components/cards/Card";
import Filter from "@components/filters/Filter";

const TradableCardsGrid = ({ onAddOrRemoveCard, currentCards }) => {

    const [cards, setCards] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [filteredCards, setFilteredCards] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState("");

    const isCardInList = (cardId) => currentCards.some((card) => card.id === cardId);

    const rarity = [
        "DIAMOND_1",
        "DIAMOND_2",
        "DIAMOND_3",
        "DIAMOND_4",
        "STAR_1",
    ];


    useEffect(() => {
        const loadTradableCards = async () => {
            try {
                const tradableCards = await getTradableCards();
                setCards(tradableCards);
            } catch (err) {
                setError(err.message);
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 500);
            }
        };
        loadTradableCards();
    }, []);

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
        <section>

            <div className="w-full max-w-7xl px-10 py-4
      flex flex-col justify-center items-center gap-2 md:gap-0 md:flex-row md:justify-between">
                <h1 className="text-3xl text-primary font-bold italic">Genes Formidables</h1>
                <div className="flex flex-col sm:flex-row items-center gap-2">
                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeholder={"Buscar carta por nombre"} />
                    <Filter filter={filter} setFilter={setFilter} options={rarity} />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {filteredCards.map((card) => {
                    const alreadyInList = isCardInList(card.id);
                    return (
                        <div key={card.id}>
                            <Card card={card} />
                            <button
                                onClick={() => onAddOrRemoveCard(card.id, alreadyInList)}
                                className={`mt-4 px-4 py-2 rounded text-white font-semibold transition ${alreadyInList ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
                                    }`}
                            >
                                {alreadyInList ? 'Eliminar' : 'Añadir'}
                            </button>
                        </div>
                    );
                })}
            </div>
        </section>

    );
};

export default TradableCardsGrid;
