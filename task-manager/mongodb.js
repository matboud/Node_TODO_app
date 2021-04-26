// exploring mongodb & beyond

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient; // to get access to the functions necessary to perform a CRUD operation

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to DB", error);
    }

    console.log('connected to DB!')
    // insert document
    const db = client.db(databaseName);

    db.collection("users").insertOne({
      name: "User3",
      age: 32,
    });
  }
);
