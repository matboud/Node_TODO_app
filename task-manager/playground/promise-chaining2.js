require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("608added1837fc1537769670")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log("result: ", result);
  })
  .catch((err) => {
    console.log(err);
  });
