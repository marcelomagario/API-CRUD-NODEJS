// Models interacts with the DATABASES  
// Models are responsible for querying, inserting, updating, and deleting data, ensuring data integrity and consistency.

// The Controller handles the logic, the Model manages the data, the Router directs traffic,
// and the Server listens for and responds to requests.
// The "app" ties everything together and sets up the necessary connections and configurations.

const connection = require('./connection');


const getAll = async () => {
  const tasks = await connection.execute('SELECT * FROM tasks');
  return tasks;
};


const createTask = async (task) => {
  const {title} = task;
  const dateUTC = new Date(Date.now()).toUTCString();
  const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)';
  const [createdTask] = await connection.execute(query, [title, 'pendente', dateUTC]);
  return {insertId: createdTask.insertId};
};


module.exports = {
  getAll,
  createTask
};