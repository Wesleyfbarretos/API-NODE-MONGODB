import mongoose from "mongoose";

const authorsSchema = new mongoose.Schema({
	id: {type: String},
	name: {type: String},
	nationality: {type: String}
})

const authorsEntity = mongoose.model("authors", authorsSchema);

export { authorsEntity };
