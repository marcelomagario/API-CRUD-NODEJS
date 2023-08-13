// The router is a component responsible for mapping incoming HTTP requests to appropriate controller actions. 
// It defines the routes for your application, 
// determining which controller method should handle each type of request (GET, POST, PUT, DELETE, etc.) to specific URL paths.

// The Controller handles the logic, the Model manages the data, the Router directs traffic,
// and the Server listens for and responds to requests.
// The "app" ties everything together and sets up the necessary connections and configurations.

const express = require('express');

const tasksController = require('./controllers/tasksController');

const router = express.Router();


// router.get('/tasks', (req, res)=> res.status(200).send('The Router is working!'));

router.get('/tasks', tasksController.getAll);


module.exports = router;