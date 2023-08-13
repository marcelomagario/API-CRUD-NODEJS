// In the MVC pattern, a controller is responsible for handling user requests, processing data, and interacting 
// with models and views. It acts as an intermediary between the models (data) and the views (user interfaces).
//  Controllers receive incoming requests, process the necessary data, and determine what response to send back.

// The Controller handles the logic, the Model manages the data, the Router directs traffic,
// and the Server listens for and responds to requests.
// The "app" ties everything together and sets up the necessary connections and configurations.

const tasksModel = require('../models/tasksModel');

const getAll= async (_req, res) => {
  const [tasks] = await tasksModel.getAll();
  return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
  const createdTask = await tasksModel.createTask(req.body);
  return res.status(201).json(createdTask);
};

module.exports = {
  getAll,
  createTask, 
};