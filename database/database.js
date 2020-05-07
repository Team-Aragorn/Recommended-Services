/* eslint-disable no-plusplus */
const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/imagesData', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log('Connected to Database'); });


const ImageData = mongoose.model('ImageData', new Schema({
  gameTitle: String,
  newPrice: Number,
  preOwnedPrice: Number,
  digitalPrice: Number,
  mainImage: String,
  images: [String],
}), 'imagedatas');

const getGamesForRecommended = (callback) => {
  ImageData.aggregate([{ $sample: { size: 10 } }], (err, result) => {
    if (err) {
      console.log('Error', err);
    } else {
      callback(null, result);
    }
  });
};

module.exports.getGamesForRecommended = getGamesForRecommended;
