const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/imagesData', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('Connected to Database');
  const imageDataSchema = new mongoose.Schema({
    gameTitle: String,
    newPrice: Number,
    preOwnedPrice: Number,
    digitalPrice: Number,
    mainImage: String,
    images: [String],
  });

  const ImageData = mongoose.model('ImageData', imageDataSchema);
});
