// "App" is a commonly used term that typically refers to the main entry point of your application.
// It's where you configure various components, set up middleware, define routes, and start the server.
// The app is responsible for orchestrating the different parts of your application and bringing them together.


// The Controller handles the logic, the Model manages the data, the Router directs traffic,
// and the Server listens for and responds to requests.
// The "app" ties everything together and sets up the necessary connections and configurations.







const express = require('express');
const router = require('./router');

const app = express();

app.use(router);

module.exports = app;