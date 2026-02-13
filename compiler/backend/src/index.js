import { config } from "./config/env.js";
import { connectDb } from "./config/db.js";
import app from "./app.js";

const startServer = async () => {
  try {
    const connection = await connectDb();
    // eslint-disable-next-line no-console
    console.log(`MongoDB connected: ${connection.name || "unknown"}`);
    app.listen(config.port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server running on http://localhost:${config.port}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

startServer();
