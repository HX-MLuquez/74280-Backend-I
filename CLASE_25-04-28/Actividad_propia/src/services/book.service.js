import { getBooksManager } from '../managers/book.manager.js';

export const getBooksService = async () => {
  const books = await getBooksManager();
  return books;
};
