import { authorsEntity } from '../entities/AuthorsEntity.js';

export class AuthorsRepository {
  static async save(newAuthorRequest) {
    const newAuthor = authorsEntity(newAuthorRequest);
    await newAuthor.save();
    return newAuthor;
  }

  static async findAll() {
    return await authorsEntity.find().populate('books').clone();
  }

  static async findOne(id) {
    try {
      return await authorsEntity.findOne({ _id: id }).populate('books');
    } catch (error) {
      return null;
    }
  }

  static async findOneByName(name) {
    try {
      return await authorsEntity.findOne({ name });
    } catch (error) {
      return null;
    }
  }

  static async destroy(id) {
    return await authorsEntity.deleteOne({ _id: id });
  }

  static async update(id, newAuthorUpdateRequest) {
    return await authorsEntity.findByIdAndUpdate(id, {
      $set: newAuthorUpdateRequest,
    });
  }
}
