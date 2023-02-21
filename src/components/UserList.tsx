import React, { FC } from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import { UserWithColor } from '../types';

interface Props {
  users: UserWithColor[];
}

export const UserList: FC<Props> = React.memo(({ users }) => {
  return (
    <>
      {users.map(user => (
        <ListItemButton key={user.id}>
          <ListItemIcon>
            <DirectionsCarFilledIcon fontSize="large" style={{ color: user?.carColor?.name || 'black' }} />
          </ListItemIcon>
          <ListItemText primary={user.name} />
        </ListItemButton>
      ))}
    </>
  );
});
