// The router is a component responsible for mapping incoming HTTP requests to appropriate controller actions. 
// It defines the routes for your application, 
// determining which controller method should handle each type of request (GET, POST, PUT, DELETE, etc.) to specific URL paths.

// The Controller handles the logic, the Model manages the data, the Router directs traffic,
// and the Server listens for and responds to requests.
// The "app" ties everything together and sets up the necessary connections and configurations.

const express = require('express');
const router = express.Router();


const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');



router.get('/tasks', tasksController.getAll);
router.post('/tasks',tasksMiddleware.validateBody, tasksController.createTask);


module.exports = router;