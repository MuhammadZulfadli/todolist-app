require('dotenv').config()
const express = require ('express')
const cors = require ('cors')
const bodyParser = require ('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


const TaskListController = require('./controllers/TaskListController.js')
const TaskCreateController = require('./controllers/TaskCreateController.js')
const TaskDeleteController = require('./controllers/TaskDeleteController.js')
const TaskUpdateController = require('./controllers/TaskUpdateController.js')

app.get('/', TaskListController)

app.post('/', TaskCreateController)

app.delete('/:id', TaskDeleteController)

app.put('/:id', TaskUpdateController)

app.listen(3000, () => console.log('Server Running on port 3000'))