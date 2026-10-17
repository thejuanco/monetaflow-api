import express from 'express'
import budgetRouter from './router/budgetRouter.js'
import { db } from './database/configDB.js'

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())

//routes
app.use("/v1/api/Budgets", budgetRouter)

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