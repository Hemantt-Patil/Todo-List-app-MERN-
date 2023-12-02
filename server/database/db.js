import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const Connection = () => {

    const  MG = `mongodb+srv://hemptl:hemantp@todo-app.ob0olyb.mongodb.net/?retryWrites=true&w=majority`;
   
    mongoose.connect(MG, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database');
    })
}

export default Connection;
