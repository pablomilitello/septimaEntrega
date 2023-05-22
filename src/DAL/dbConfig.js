import mongoose from 'mongoose';
import config from '../config.js';

const URI = config.mongo_uri;

mongoose
  .connect(URI)
  .then(() => console.log('Database connected'))
  .catch((error) => console.log(error));
