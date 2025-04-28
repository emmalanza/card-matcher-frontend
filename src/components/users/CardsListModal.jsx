import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Plus, Minus, Trash2, X } from 'lucide-react';
import { getUserCardLists } from '@services/users/userService';
import { addCardToList, removeCardFromList } from '@services/cardLists/cardListService';
import TradableCardsGrid from '@components/cards/TradableCardsGrid';

const CardListModal = ({ isOpen, onClose, initialSelectedList }) => {
    const [selectedList, setSelectedList] = useState(initialSelectedList);
    const [showGrid, setShowGrid] = useState(false);

    const refreshListsFromBackend = async () => {
        const token = localStorage.getItem('token');
        try {
            const data = await getUserCardLists(token);

            const updatedList = data.find(list => list.id === selectedList?.id);
            setSelectedList(updatedList);

        } catch (error) {
            console.error('Error recargando listas:', error);
            alert('Hubo un error al actualizar la lista desde el servidor');
        }
    };

    const handleAddOrRemoveCard = async (cardId, isAdded) => {
        const token = localStorage.getItem('token');
        try {
            if (isAdded) {
                await removeCardFromList(selectedList.id, cardId, token);
            } else {
                await addCardToList(selectedList.id, cardId, token);
            }
            await refreshListsFromBackend();
        } catch (error) {
            console.error('Error actualizando carta:', error);
            alert('Hubo un error al actualizar la carta');
        }
    };

    useEffect(() => {
        setSelectedList(initialSelectedList);
    }, [initialSelectedList]);

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 my-20 flex items-center justify-center p-4">
                <div
                    className="bg-white rounded-2xl max-w-3xl w-full max-h-screen overflow-y-auto p-6 shadow-xl 
                    border border-blue-200 scrollbar-none relative"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-accent hover:scale-110 transition transform"
                        aria-label="Cerrar modal"
                    >
                        <X size={24} />
                    </button>

                    <h2 id="modal-title" className="absolute top-4 left-4 text-xl font-bold text-primary">
                        {selectedList?.listType || 'Sin lista seleccionada'}
                    </h2>

                    <div className="flex items-center justify-between mt-10 mb-4">
                        <p id="modal-description" className="text-md text-gray-600">
                            Cantidad de cartas: {selectedList?.cards?.length || 0}
                        </p>
                        <button
                            onClick={() => setShowGrid(prev => !prev)}
                            className="flex items-center gap-1 text-sm text-primary hover:scale-115 transition transform"
                        >
                            {showGrid ? <Minus size={20} /> : <Plus size={20} />}
                        </button>
                    </div>

                    <div
                        className="max-h-96 overflow-y-auto space-y-4"  // Aquí está la parte para hacer scrollable
                    >
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {selectedList?.cards.map(card => (
                                <li
                                    key={card.id}
                                    className="bg-white border border-blue-100 rounded-xl shadow-sm p-4 flex items-center justify-between"
                                >
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-500">#{card.id}</span>
                                        <span className="text-base font-medium text-gray-800">{card.name}</span>
                                    </div>
                                    <button
                                        onClick={() => handleAddOrRemoveCard(card.id, true)}
                                        className="text-accent hover:scale-115 transition transform duration-150 ease-in-out"
                                        aria-label={`Eliminar carta ${card.name}`}
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {showGrid && (
                        <div className="mt-6 border-t pt-6">
                            <TradableCardsGrid
                                onAddOrRemoveCard={handleAddOrRemoveCard}
                                currentCards={selectedList?.cards || []}
                            />
                        </div>
                    )}
                </div>
            </div>
        </Dialog>
    );
};

export default CardListModal;
