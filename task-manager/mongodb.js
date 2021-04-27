// exploring mongodb & beyond

const { MongoClient, ObjectID } = require("mongodb");
//MongoClient: to get access to the functions necessary to perform a CRUD operation

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();

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

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       _id: new ObjectID(), // to multiple use of ObjectID
    //       description: "describing task 1",
    //       completed: true,
    //     },
    //     {
    //       _id: new ObjectID(),
    //       description: "describing task 2",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to add tasks!", error);
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // reading data
    // db.collection("users").findOne({age: 144}, (error, user)=>{
    //   if(error){
    //     return console.log("unable to fetch user")
    //   }

    //   console.log(user)
    // })

    // db.collection("users")
    //   .find({ age: 26 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection("tasks").findOne(
    //   { _id: new ObjectID("6086de8b9d560922e693b757") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch data");
    //     }
    //     console.log(user);
    //   }
    // );

    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     if (error) {
    //       return console.log(error);
    //     }

    //     console.log(tasks);
    //   });

    // UPDATE
    // db.collection("users").updateOne(
    //   { _id: new ObjectID("6086d1ad9ab18c20df986d20") },
    //   {
    //     $set: {
    //       name: "Med Amine Matboud",
    //     },
    //   }
    // ).then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log("Unable to update document", error);
    //   });

    db.collection("users")
      .updateOne(
        { _id: new ObjectID("6086d5cc181c0f219481d52d") },
        { $inc: { age: 1 } }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("Unable to update document", error);
      });
  }
);
