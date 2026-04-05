const express = require('express');
const app = express();
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const authRoutes = require('./routes/authRoute');
const registrationController = require('./controllers/registrationController');
const allUsersController = require('./controllers/allUsersController');
const getAllUserMiddleWear = require('./middleWears/getAllUserMiddleWear');
const port = 8000;

app.use(express.json());

mongoose.connect(
  'mongodb+srv://node2502:OThMX5hND12pmp4B@cluster0.tuewzk8.mongodb.net/myDB?appName=Cluster0',
).then(() => {
  console.log('Database Connected');
});

const option = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Swagger API',
      version: '1.0.0',
      description: 'A simple Swagger API',
    },
    servers: [
      {
        url: 'http://localhost:8000',
      },
    ]
  },
  apis: ['./routes/*.js'],
}

const swaggerSpec = swaggerJSDoc(option);
app.use('/auth', authRoutes)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/allusers', getAllUserMiddleWear, allUsersController)

app.post('/registration', registrationController)

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});