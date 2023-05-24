import mongoose from 'mongoose';

const booksSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true },
  author: { type: String, required: true },
  publisher: { type: String, required: true },
  numberOfPages: { type: Number },
});

const booksEntity = mongoose.model('books', booksSchema);

export { booksEntity };
