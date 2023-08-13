// The server is the core component of your Node.js application that listens for incoming network requests (typically HTTP requests)
// and sends back responses.
// It creates an environment for your application to run, process requests, and return appropriate responses.

// The Controller handles the logic, the Model manages the data, the Router directs traffic,
// and the Server listens for and responds to requests.
// The "app" ties everything together and sets up the necessary connections and configurations.

const app = require('./app');

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3333;

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));