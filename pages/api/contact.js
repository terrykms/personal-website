import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method !== "POST") return;

  const { email, name, subject, message } = req.body;

  if (
    !email ||
    !email.includes("@") ||
    !name ||
    name.trim() === "" ||
    !message ||
    message.trim() === ""
  ) {
    res.status(422).json({ message: "Invalid input!" });
  }

  // Store it in a database
  const newMessage = {
    email,
    name,
    subject,
    message,
  };

  let client;

  const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.yryf1y9.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
  try {
    client = await MongoClient.connect(connectionString);
  } catch (error) {
    res.status(500).json({ message: "Could not connect to database." });
    return;
  }
  const db = client.db();

  try {
    const result = await db.collection("messages").insertOne(newMessage);
    newMessage.id = result.insertedId;
  } catch (error) {
    client.close();
    res.status(500).json({ message: "Storing message failed!" });
    return;
  }

  client.close();

  res
    .status(201)
    .json({ message: "Message successfully sent!", message: newMessage });
};

export default handler;
