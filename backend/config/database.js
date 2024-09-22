import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/priceportfoliio")              
    .then((c) => {
      console.log(`Mongodb connect to: ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(e);
    });
};