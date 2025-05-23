import React from 'react';
import { Mail, AtSign, Handshake } from 'lucide-react';
import imgProfile  from "@assets/img/pokeball-icon.svg"; 

const ProfileInfo = ({ user }) => {

    if (!user) {
        return <p className="text-center mt-20 text-gray-500">Cargando perfil...</p>;
    }

    return (
        <>
            <div className="w-full max-w-lg mx-auto p-4 bg-white shadow-xl rounded-2xl mt-20 sm:p-6 md:p-8">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <img
                        src={imgProfile}
                        alt="Foto de perfil"
                        className="w-28 h-28 rounded-full object-cover sm:w-32 sm:h-32"
                    />
                    <p className="text-sm text-gray-500 sm:text-base">@{user.username}</p>
                </div>

                <div className="mt-6 space-y-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center text-primary space-y-2 sm:space-y-0 sm:space-x-4">
                        <AtSign className="w-5 h-5" />
                        <div>
                            <span className="font-medium text-sm sm:text-base">Username:</span>
                            <span className="block text-sm sm:text-base">{user.username}</span>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center text-primary space-y-2 sm:space-y-0 sm:space-x-4">
                        <Handshake className="w-5 h-5" />
                        <div>
                            <span className="font-medium text-sm sm:text-base">ID de amigo:</span>
                            <span className="block text-sm sm:text-base">{user.playerId}</span>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center text-primary space-y-2 sm:space-y-0 sm:space-x-4">
                        <Mail className="w-5 h-5" />
                        <div>
                            <span className="font-medium text-sm sm:text-base">Correo electrónico:</span>
                            <span className="block text-sm sm:text-base break-all">{user.email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileInfo;