import mongoose from 'mongoose';

const dbURL = process.env.DB_URL || 'mongodb://localhost:27017/fakestore' 

mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true});