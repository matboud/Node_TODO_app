require("../src/db/mongoose");
const Task = require("../src/models/task");
const User = require("../src/models/user");

// Task.findByIdAndDelete("608added1837fc1537769670")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log("result: ", result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const updateAgeAndCount = async (id, age) => {
//   const user = await User.findByIdAndUpdate(id, { age });
//   const count = await User.countDocuments({ age });

//   return count;
// };

// updateAgeAndCount("608ad317d67ab814174c281f", 2)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const counter = await Task.countDocuments({ completed: false });

  return counter;
};

deleteTaskAndCount("608ae09a1837fc1537769671")
  .then((incomplete) => {
    console.log("result", incomplete);
  })
  .catch((err) => {
    console.log("error", err);
  });
