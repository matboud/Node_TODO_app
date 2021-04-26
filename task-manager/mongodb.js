// exploring mongodb & beyond

const { MongoClient } = require("mongodb");

const { MongoClient, ObjectID } = require("mongodb");
//MongoClient: to get access to the functions necessary to perform a CRUD operation

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

    console.log("connected to DB!");
    // insert document
    const db = client.db(databaseName);

    //INSERT ONE
    // db.collection("users").insertOne(
    //   {
    //     name: "User4",
    //     age: 12,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to create user", error);
    //     }

    //     console.log(result.ops); // ops == array of what we created
    //   }
    // );

    //INSERT MANY
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "User5",
    //       age: 21,
    //     },
    //     {
    //       name: "User6",
    //       age: 22,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert document!");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    db.collection("tasks").insertMany(
      [
        {
          description: "describing task 1",
          completed: true,
        },
        {
          description: "describing task 2",
          completed: false,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to add tasks!", error);
        }
        console.log(result.ops);
      }
    );
  }
);
