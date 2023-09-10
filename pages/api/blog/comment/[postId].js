import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  const { postId } = req.query;
  if (req.method === "GET") {
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
      const query = { postId };
      const options = {
        // Sort returned documents in ascending order by timestamp (A->Z)
        sort: { timestamp: -1 },
        // Include only the `title` and `imdb` fields in each returned document
        projection: { name: 1, timestamp: 1, timezoneOffset: 1, comment: 1 },
      };
      const cursor = db.collection("comments").find(query, options);
      const commentData = await cursor.toArray();
      client.close();
      res
        .status(201)
        .json({ message: "Comment successfully retrieved!", commentData });
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Failed to retrieve comments!" });
      return;
    }
  }

  if (req.method === "POST") {
    const { timestamp, timezoneOffset, name, email, comment, postId } =
      req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !comment ||
      comment.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input!" });
    }

    // Store it in a database
    const newComment = {
      timestamp,
      timezoneOffset,
      email,
      name,
      comment,
      postId,
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
      const result = await db.collection("comments").insertOne(newComment);
      newComment.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing comment failed!" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Comment successfully posted!", message: newComment });
  }
};

export default handler;
