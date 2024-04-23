const mongoose = require('mongoose');
const Stand = require('./models/stand.model');

const newStand = {
  name: 'Stand 1',
  description: 'This is a stand for selling fruits and vegetables.',
};

(async () => {
  await mongoose.connect("mongodb+srv://richard7:sAprlr0SbosjyYCd@cluster0.akgyqhz.mongodb.net/S1");

  const newStandCreated = await Stand.create(newStand);

  console.log(newStandCreated);
})();