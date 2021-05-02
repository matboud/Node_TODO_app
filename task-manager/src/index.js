const express = require("express");
require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server ON on port: ", port);
});

const Task = require("./models/task");
const User = require("./models/user");

const main = async () => {
  // const task = await Task.findById("608e30bd25dad311e8ce0c41");
  // await task.populate("owner").execPopulate()

  const user = await User.findById('608e30a825dad311e8ce0c3f');
  await user.populate('tasks').execPopulate();

  console.log(user.tasks);
};

main();
