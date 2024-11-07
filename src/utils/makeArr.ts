import { getUUID } from './getUUID';

export const makeArr = (count: number) =>
  Array(count)
    .fill(null)
    .map(() => getUUID());
