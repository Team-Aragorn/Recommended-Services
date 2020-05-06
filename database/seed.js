/* eslint-disable no-plusplus */
const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/imagesData', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  const imageDataSchema = new mongoose.Schema({
    gameTitle: String,
    newPrice: Number,
    preOwnedPrice: Number,
    digitalPrice: Number,
    mainImage: String,
    images: [String],
  });

  const ImageData = mongoose.model('ImageData', imageDataSchema);

  const randomMainImage = () => {
    const random = Math.floor(Math.random() * Math.floor(17) + 1);
    return `https://better-game-start.s3.us-east-2.amazonaws.com/Recommended+Carousel+Images/${random}-170x170.jpg`;
  };

  const randomImages = () => {
    const result = [];
    for (let i = 0; i < 5; i++) {
      const random = Math.floor(Math.random() * Math.floor(29) + 1);
      result.push(`https://better-game-start.s3.us-east-2.amazonaws.com/Zoom+Carousel+Images/${random}-370x370.jpg`);
    }
    return result;
  };

  const seed = (entrys) => {
    const allData = [];
    for (let i = 0; i < entrys; i++) {
      const data = {
        gameTitle: faker.name.title(),
        newPrice: 59.99,
        preOwnedPrice: 54.99,
        digitalPrice: 59.99,
        mainImage: randomMainImage(),
        images: randomImages(),
      };
      allData.push(data);
    }
    return allData;
  };

  ImageData.deleteMany({}, (err) => {
    if (err) {
      console.log('Error Deleting Table', err);
    } else {
      console.log('Table Deleted');
    }
  });

  const allData = seed(100);

  ImageData.insertMany([...allData], (err) => {
    if (err) {
      console.log('Error Seeding', err);
    } else {
      db.close();
      console.log('Databse Is Seeded');
    }
  });
});
