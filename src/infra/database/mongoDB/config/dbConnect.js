import mongoose from 'mongoose';


function dbSetup() {
	mongoose.connect(process.env.MONGO_CONNECTION_URI)
	return mongoose.connection;
} 

export { dbSetup };
