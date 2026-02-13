import app from "../src/app.js";
import { connectDb } from "../src/config/db.js";

export default async function handler(req, res) {
  try {
    await connectDb();
    return app(req, res);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to connect to MongoDB", error);
    return res.status(500).json({ error: "Failed to connect to MongoDB" });
  }
}
