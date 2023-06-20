const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./authRouter");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kluykopasha:Qazwsx1234@cluster0.xw2oqxy.mongodb.net/movieboxretryWrites=true&w=majority"
    );
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
