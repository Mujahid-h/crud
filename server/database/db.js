const mongoose = require("mongoose");
const colors = require("colors");

const Connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(
      `Database Connected successfully ${mongoose.connection.host}`.bgMagenta
    );
  } catch (error) {
    console.log(`Error while connectng with database: ${error}`.bgRed);
  }
};

module.exports = Connection;
