const { MongoClient } = require("mongodb");
const bookingSchema = require("../models/bookingSchema");
const path = require("path");
const dotenv = require("dotenv")

dotenv.config({ path: path.join(__dirname, "..", ".env") });

const connectMongo = () => {
  dotenv.config();
  const uri = `mongodb+srv://${process.env.MONGO_ADMIN}:${process.env.MONGO_ADMIN_PW}@${process.env.MONGO_URI}`;
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
    bookings: bookingSchema,
  };

  for (const collectionName in collections) {
    await dropIfCollectionExists(db, collectionName);
    await db.createCollection(collectionName, collections[collectionName]);
    console.log(`collection created: ${collectionName}`);
  }

  client.close();
};

intializeMongo();
