import mongoose from 'mongoose';


function dbSetup() {
	mongoose.connect("mongodb+srv://wesley:123@cluster0.deys2co.mongodb.net/")
	return mongoose.connection;
} 

export { dbSetup };
