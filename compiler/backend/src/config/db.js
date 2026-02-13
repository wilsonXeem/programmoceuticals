import mongoose from "mongoose";
import { config } from "./env.js";

let connectPromise = null;

export const connectDb = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (!connectPromise) {
    connectPromise = mongoose
      .connect(config.mongoUri, {
        autoIndex: true
      })
      .catch((error) => {
        connectPromise = null;
        throw error;
      });
  }

  await connectPromise;
  return mongoose.connection;
};

export const disconnectDb = async () => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }
  connectPromise = null;
};

export default mongoose;
