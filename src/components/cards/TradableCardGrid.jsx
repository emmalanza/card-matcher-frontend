import React, { useEffect, useState } from 'react';
import { getTradableCards } from '@services/cards/cardService';

const TradableCardGrid = ({ onAddOrRemoveCard, currentCards }) => {
    const [cards, setCards] = useState([]);

    // Cargar cartas intercambiables
    useEffect(() => {
        const loadTradableCards = async () => {
            const tradableCards = await getTradableCards();
            setCards(tradableCards);
        };
        loadTradableCards();
    }, []);

    // Verificar si una carta ya está en la lista actual
    const isCardInList = (cardId) => {
        return currentCards.some((card) => card.id === cardId);
    };

    return (
        <div className="grid grid-cols-4 gap-6">
            {cards.map((card) => (
                <div key={card.id} className="bg-white p-4 shadow-md rounded-lg text-center">
                    <img
                        src={`${card.imgUrl}/high.webp`}
                        alt={card.name}
                        className="w-full h-32 object-cover rounded-md"
                    />
                    <h3 className="text-lg font-bold text-gray-800 mt-2">{card.name}</h3>
                    <button
                        onClick={() =>
                            onAddOrRemoveCard(card.id, isCardInList(card.id))
                        }
                        className={`px-4 py-2 mt-4 rounded text-white font-semibold ${
                            isCardInList(card.id) ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
                        } transition`}
                    >
                        {isCardInList(card.id) ? 'Eliminar' : 'Añadir'}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TradableCardGrid;