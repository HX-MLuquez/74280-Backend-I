import fs from 'fs/promises';
import path from 'path';

const booksFilePath = path.resolve('db', 'books.json');

export const getBooksManager = async () => {
  const data = await fs.readFile(booksFilePath, 'utf-8');
  const books = JSON.parse(data);
  return books;
};