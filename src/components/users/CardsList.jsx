import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import CardListModal from '@components/users/CardsListModal';

const CardsLists = ({ lists = [] }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedList, setSelectedList] = useState(null);

    const openModal = (list) => {
        setSelectedList(list);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedList(null);
        setIsModalOpen(false);
    };

    return (
        <div className="p-4 md:p-8 min-w-full text-primary">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Tus Listas</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {Array.isArray(lists) && lists.map(list => (
                    <div
                        key={list.id}
                        className="flex justify-between
                        bg-white p-6 rounded-2xl shadow-md border border-blue-100 hover:shadow-lg transition"
                    >
                        <h3 className="text-lg md:text-xl font-semibold">{list.listType}</h3>
                    
                        <button
                            onClick={() => openModal(list)}
                            className="flex items-center gap-2 text-primary hover:scale-115 transition"
                        >
                            <Eye size={22} />
                        </button>
                    </div>
                ))}
            </div>

            <CardListModal
                isOpen={isModalOpen}
                onClose={closeModal}
                initialSelectedList={selectedList}
            />
        </div>
    );
};

export default CardsLists;