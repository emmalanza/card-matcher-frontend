import React, { useState } from 'react';
import { addCardToList, removeCardFromList } from '@services/cardLists/cardListService';
import TradableCardGrid from '@components/cards/TradableCardGrid';

const UserLists = ({ lists }) => {
    const [selectedListId, setSelectedListId] = useState(null);
    const [showTradableCardGrid, setShowTradableCardGrid] = useState(false);

    // Manejar clic en "Más detalles"
    const handleViewDetails = (listId) => {
        setSelectedListId(selectedListId === listId ? null : listId);
    };

    // Mostrar/ocultar grid de cartas intercambiables
    const handleAddCard = () => {
        if (selectedListId === null) {
            alert('Selecciona una lista primero');
            return;
        }
        setShowTradableCardGrid(!showTradableCardGrid);
    };

    // Añadir/Eliminar carta de una lista
    const handleAddOrRemoveCard = async (cardId, isAdded) => {
        const token = localStorage.getItem('token');
        try {
            if (isAdded) {
                await removeCardFromList(selectedListId, cardId, token);
                alert('Carta eliminada de la lista');
            } else {
                await addCardToList(selectedListId, cardId, token);
                alert('Carta añadida a la lista');
            }
        } catch (error) {
            console.error('Error actualizando carta:', error);
            alert('Hubo un error al actualizar la carta');
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Tus Listas</h2>
            <div className="space-y-6">
                {lists.map((list) => (
                    <div key={list.id} className="bg-white p-6 shadow-md rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-900">{list.listType}</h3>
                        <p className="text-gray-600">Cantidad de cartas: {list.cards.length}</p>
                        <div className="flex space-x-4 mt-4">
                            <button
                                onClick={() => handleViewDetails(list.id)}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                            >
                                {selectedListId === list.id ? 'Ocultar detalles' : 'Más detalles'}
                            </button>
                            <button
                                onClick={handleAddCard}
                                disabled={selectedListId === null}
                                className={`px-4 py-2 rounded ${
                                    selectedListId === null
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-green-500 hover:bg-green-600'
                                } text-white transition`}
                            >
                                Añadir carta
                            </button>
                        </div>

                        {/* Mostrar detalles si esta lista está seleccionada */}
                        {selectedListId === list.id && (
                            <div className="mt-6">
                                <h4 className="text-lg font-bold text-gray-800">Cartas en esta lista:</h4>
                                <ul className="mt-4 space-y-2">
                                    {list.cards.map((card) => (
                                        <li
                                            key={card.id}
                                            className="flex justify-between items-center bg-gray-100 p-2 rounded"
                                        >
                                            <span className="text-gray-700">{card.name}</span>
                                            <button
                                                onClick={() => handleAddOrRemoveCard(card.id, true)}
                                                className="text-red-500 hover:text-red-700 font-semibold"
                                            >
                                                Eliminar
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}

                {/* Mostrar grid de cartas intercambiables */}
                {showTradableCardGrid && selectedListId && (
                    <div className="mt-6">
                        <TradableCardGrid
                            onAddOrRemoveCard={handleAddOrRemoveCard}
                            currentCards={lists.find((list) => list.id === selectedListId)?.cards || []}
                        />
                        <button
                            onClick={handleAddCard}
                            className="bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-600 transition"
                        >
                            Ocultar grid
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserLists;