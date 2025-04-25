import React from 'react';
import { useAuth } from '@contexts/AuthContext';
import backgroundImage from '@assets/img/bg-cards.webp';
import ProfileInfo from '@components/users/ProfileInfo';
import CardsList from '@components/users/CardsList';

const Profile = () => {

  const { user } = useAuth();

  return (
    <>
      <section id="sets"
        className="flex flex-col items-center justify-center 
        bg-cover bg-right lg:bg-center min-h-screen bg-fixed py-10 px-2"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >

        <ProfileInfo user={user} />
        <CardsList lists={user.cardLists} />
      </section>
    </>
  );
};

export default Profile;
