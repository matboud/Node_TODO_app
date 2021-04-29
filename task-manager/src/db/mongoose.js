const mongoose = require("mongoose");

const connectionURL = "mongodb://127.0.0.1:27017/task-manager-api";

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

// const me = new User({
//   name: "Matboud",
//   age: 26,
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Unable to sqve User model:", error);
//   });

const Task = mongoose.model("Task", {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const newTask = new Task({
  description: "task number 1",
  completed: false,
});

newTask
  .save()
  .then(() => {
    console.log(newTask);
  })
  .catch((error) => {
    console.log("Unable to sqve User model:", error);
  });
