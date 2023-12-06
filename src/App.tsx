import React, { useCallback, useEffect, useState } from 'react';
import './App.scss';
// import { PropTypes } from '@mui/material';
import { UserList } from './components/UserList';
import { AddUserForm } from './components/AddUserForm';
import { AppContainer } from './components/AppContainer';
import { Color, User } from './types';
import { prepareUsers } from './helpers';
import { createUser, getUsers } from './services/user.service';
import { getColors } from './services/color.service';

export const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [colors, setColors] = useState<Color[]>([]);

  const preparedUsers = prepareUsers(users, colors);

  useEffect(() => {
    getUsers()
      .then(setUsers);

    getColors()
      .then(setColors);
  }, []);

  const addUser = useCallback(async (name: string, carColorId: number) => {
    const createdUser = await createUser(name, carColorId);

    setUsers((prev) => [...prev, createdUser]);
  }, []);

  return (
    <AppContainer>
      <UserList users={preparedUsers} />

      <AddUserForm colors={colors} addUser={addUser} />
    </AppContainer>
  );
};
