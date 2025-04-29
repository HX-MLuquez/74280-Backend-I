import { getBooksService } from '../services/book.service.js';

export const getBooksController = async (req, res) => {
  try {
    const books = await getBooksService();
    res.json({ status: 'success', payload: books });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};
