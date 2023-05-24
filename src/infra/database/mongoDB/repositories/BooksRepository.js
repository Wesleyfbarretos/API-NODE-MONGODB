import { booksEntity } from '../entities/BooksEntity.js';

export class BooksRepository {
  static async save(newBookRequest) {
    const newBook = booksEntity(newBookRequest);
    await newBook.save();
    return newBook;
  }

  static async findAll() {
    return await booksEntity.find().populate('author').clone();
  }

  static async findOne(id) {
    try {
      return await booksEntity.findOne({ _id: id }).populate('author');
    } catch (error) {
      return null;
    }
  }
  s;
  static async findOneByTitle(title) {
    try {
      return await booksEntity.findOne({ title }).populate('author');
    } catch (error) {
      return null;
    }
  }

  static async destroy(id) {
    return await booksEntity.deleteOne({ _id: id });
  }

  static async update(id, newBookUpdateRequest) {
    return await booksEntity.findByIdAndUpdate(id, {
      $set: newBookUpdateRequest,
    });
  }
}
