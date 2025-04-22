import React from 'react';
import { useAuth } from '@contexts/AuthContext';
import ProfileInfo from '@components/users/ProfileInfo';
import CardsList from '@components/users/CardsList';

const Profile = () => {

  const { user } = useAuth();

    return (
        <>
          <ProfileInfo user={user}/>
          <CardsList lists={user.cardLists} />
        </>
    );
};

export default Profile;
