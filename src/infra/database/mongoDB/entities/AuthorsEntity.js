import mongoose from 'mongoose';

const authorsSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  nationality: { type: String },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'books' }],
});

const authorsEntity = mongoose.model('authors', authorsSchema);

export { authorsEntity };
