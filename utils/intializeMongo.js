const { MongoClient } = require("mongodb");
const bookingSchema = require("../models/bookingSchema");
const dotenv = require("dotenv");

const connectMongo = () => {
  dotenv.config();
  const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@jq.yghlifx.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);
  const db = client.db(process.env.MONGO_DBNAME);
  return { client, db };
};

const dropIfCollectionExists = async (db, collectionName) => {
  const curCollections = await db
    .listCollections((filter = {}), (options = { nameOnly: true }))
    .toArray();

  const collectionList = await curCollections.map(
    (collection) => collection.name
  );

  if (collectionList.includes(collectionName)) {
    await db.collection(collectionName).drop();
    console.log(`collection dropped: ${collectionName}`);
  }
};

const intializeMongo = async () => {
  const { client, db } = connectMongo();
  const collections = {
    booking: bookingSchema,
  };

  for (const collectionName in collections) {
    await dropIfCollectionExists(db, collectionName);
    await db.createCollection(collectionName, collections[collectionName]);
    console.log(`collection created: ${collectionName}`);
  }

  client.close();
};

intializeMongo();
