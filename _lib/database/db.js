import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let cachedClient = null;
let cachedDb = null;

const connectToDatabase = async () => {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  try {
    if (!client.isConnected()) {
      await client.connect();
    }

    cachedClient = client;
    cachedDb = client.db();
    return { client: cachedClient, db: cachedDb };
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Failed to connect to database");
  }
};

export default connectToDatabase;
