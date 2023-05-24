import { booksEntity } from "../entities/BooksEntity.js";

export class BooksRepository {
	static async save(newBookRequest) {
		const newBook = booksEntity(newBookRequest);
	  await newBook.save((err) => {
			if(err) throw new Error(err.message)
		})
		return newBook
	}
	
	static async findAll() {
		return await booksEntity.find((err, books) => books).clone();
	}

	static async findOne(id) {
		try {
			return await booksEntity.findOne({_id: id});
		} catch (error) {
			return null;
		}
	}

	static async findOneByTitle(title) {
		try {
			return await booksEntity.findOne({title})
		} catch (error) {
			return null
		}
	}

	static async destroy(id) {
		return await booksEntity.deleteOne({_id: id});
	}

	static async update(id, newBookUpdateRequest) {
		return await booksEntity.findByIdAndUpdate(id, {$set: newBookUpdateRequest})
	}

}