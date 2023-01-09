import { MongoClient } from "mongodb";

export const connectMongo = async () => {
  const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@jq.yghlifx.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(process.env.MONGO_DBNAME);
  return { client, db };
};

export const insertToCollection = async (db, collectionName, doc) => {
  const collection = db.collection(collectionName);
  const insertResult = await collection.insertOne(doc);
  return insertResult
};
