import React, { useState } from 'react';
import { addCardToList, removeCardFromList, getUserCardLists } from '@services/cardLists/cardListService';
import TradableCardsGrid from '@components/cards/TradableCardsGrid';

const CardsLists = ({ lists }) => {
    const [selectedListId, setSelectedListId] = useState(null);
    const [showGrid, setShowGrid] = useState(false);
    const [updatedLists, setUpdatedLists] = useState(lists);

    const handleToggleDetails = (listId) => {
        if (selectedListId === listId) {
            setSelectedListId(null);
            setShowGrid(false);
        } else {
            setSelectedListId(listId);
            setShowGrid(false);
        }
    };

    const handleToggleGrid = () => {
        if (!selectedListId) return alert('Selecciona una lista primero');
        setShowGrid(prev => !prev);
    };

    const refreshListsFromBackend = async () => {
        const token = localStorage.getItem('token');
        try {
            const data = await getUserCardLists(token);
            setUpdatedLists(data);
        } catch (error) {
            console.error('Error recargando listas:', error);
            alert('Hubo un error al actualizar la lista desde el servidor');
        }
    };

    const handleAddOrRemoveCard = async (cardId, isAdded) => {
        const token = localStorage.getItem('token');
        try {
            if (isAdded) {
                await removeCardFromList(selectedListId, cardId, token);
            } else {
                await addCardToList(selectedListId, cardId, token);
            }

            await refreshListsFromBackend();

        } catch (error) {
            console.error('Error actualizando carta:', error);
            alert('Hubo un error al actualizar la carta');
        }
    };

    return (
        <div className="p-4 md:p-8 min-w-full text-primary">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Tus Listas</h2>

            <div className="space-y-6">
                {updatedLists.map(list => (
                    <div key={list.id} className="bg-white p-4 md:p-6 shadow-md rounded-lg relative">

                        <h3 className="text-lg md:text-xl font-semibold">{list.listType}</h3>
                        <p className="text-sm md:text-base text-gray-600">Cantidad de cartas: {list.cards.length}</p>

                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
                            <button
                                onClick={() => handleToggleDetails(list.id)}
                                className="w-full md:w-auto bg-primary text-white px-4 py-2 rounded hover:scale-105 transition transform"
                            >
                                {selectedListId === list.id ? 'Ocultar detalles' : 'Más detalles'}
                            </button>
                            {selectedListId === list.id && (
                                <button
                                    onClick={handleToggleGrid}
                                    className="w-full md:w-auto bg-green-400 text-white px-4 py-2 rounded hover:scale-105 transition transform"
                                >
                                    {showGrid ? 'Ocultar cartas' : 'Añadir carta'}
                                </button>
                            )}
                        </div>

                        {selectedListId === list.id && (
                            <>
                                <div className="mt-6">
                                    <h4 className="text-base md:text-lg font-bold mb-4">Cartas en esta lista:</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                        {list.cards.map((card) => (
                                            <li key={card.id} className="bg-[#B1C8FE]/50 p-4 rounded-lg shadow">
                                                <div className="flex flex-col p-2 md:flex-row md:justify-between">
                                                    <div className="font-semibold text-gray-600 flex flex-col md:flex-row gap-4">
                                                        <span>{card.id}</span>
                                                        <span>{card.name}</span>
                                                    </div>
                                                    <button
                                                        onClick={() => handleAddOrRemoveCard(card.id, true)}
                                                        className="text-accent font-bold hover:underline self-start"
                                                    >
                                                        Eliminar
                                                    </button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {showGrid && (
                                    <div className="mt-8 border-t pt-6">
                                        <h4 className="text-base md:text-lg font-semibold text-primary mb-4">Añadir nueva carta</h4>
                                        <TradableCardsGrid
                                            onAddOrRemoveCard={handleAddOrRemoveCard}
                                            currentCards={list.cards}
                                        />
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardsLists;
