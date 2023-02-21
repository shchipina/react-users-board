import { Color, User } from './types';

export const prepareUsers = (users: User[], colors: Color[]) => {
  return users.map(user => ({
    ...user,
    carColor: colors.find(color => color.id === user.carColorId),
  }));
};
