// Models represent the data and business logic of your application. They define the structure of the data, interact 
// with databases or other data sources, and encapsulate the operations you can perform on that data.
// Models are responsible for querying, inserting, updating, and deleting data, ensuring data integrity and consistency.

// The Controller handles the logic, the Model manages the data, the Router directs traffic,
// and the Server listens for and responds to requests.
// The "app" ties everything together and sets up the necessary connections and configurations.

const connection = require('./connection');


const getAll = async () => {
  const tasks = await connection.execute('SELECT * FROM tasks');
  return tasks;
};


module.exports = {
  getAll
};