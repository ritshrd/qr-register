const mongoose = require ('mongoose');
const dbconnect = () => {
    return mongoose.connect("mongodb+srv://richard7:sAprlr0SbosjyYCd@cluster0.akgyqhz.mongodb.net/Stands")
      .then(() => console.log("connected to mongoDB"))
      .catch((err) => console.error("error connecting to mongoDB", err));
  };
  
  module.exports = dbconnect;

