import { MongoClient } from "mongodb";

export async function connectClient() {
  try {
    const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@jq.yghlifx.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri);
    await client.connect();
    console.log("MongoDB Client Connected!");
    return client;
  } catch (err) {
    return {
      error: {
        title: "Database Error",
        clientMessage: "Database Client Connection Error",
        status: 503,
        className: "error",
        message: err,
      },
    };
  }
}

export async function connectDb(client, dbName) {
  try {
    const db = await client.db(dbName);
    console.log(`MongoDB Database ${dbName} connected!`);
    return db;
  } catch (err) {
    return {
      error: {
        title: "Database Error",
        clientMessage: "Database Connection Error",
        status: 503,
        className: "error",
        message: err,
      },
    };
  }
}

export async function insertOneToCollection(
  client,
  dbName,
  collectionName,
  payload
) {
  const db = await connectDb(client, dbName);

  try {
    const result = await db.collection(collectionName).insertOne(payload);
    console.log("MongoDB Insertion Success");
    return result;
  } catch (err) {
    if (err.code === 11000) {
      return {
        error: {
          title: "Already Exists!",
          clientMessage:
            "Restaurant added already exists! Please add another restaurant!",
          status: 406,
          className: "error",
          message: err,
        },
      };
    }
    return {
      error: {
        title: "Database Error",
        clientMessage: "Database Insertion Error",
        status: 503,
        className: "error",
        message: err,
      },
    };
  }
}

export async function getOneFromCollection(
  client,
  dbName,
  collectionName,
  payload,
  returnRequired = true
) {
  const db = await connectDb(client, dbName);
  try {
    const result = await db.collection(collectionName).findOne(payload);
    if (!result && returnRequired) {
      throw Error("Database Query Failed");
    }
    console.log("MongoDB Database Query Completed");
    return result;
  } catch (err) {
    return {
      error: {
        title: "Database Error",
        clientMessage: "Database Query Error",
        status: 503,
        className: "error",
        message: err,
      },
    };
  }
}
