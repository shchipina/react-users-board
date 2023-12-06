import { client } from '../api/fetchClient';
import { Color } from '../types';

export const getColors = async () => client.get<Color[]>('/colors');
