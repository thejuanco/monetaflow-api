import express from 'express'
import { db } from './config/database.js'
import "./models/index.js"
import router from './router/index.js'

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())

//routes
app.use("/api/v1/", router)
app.use(notFound)
app.use(errorHandler)

try {
  await db.authenticate();
  db.sync();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.listen(port, () => {
    console.log('REST API en el puerto', port)
})