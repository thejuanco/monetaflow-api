import express from 'express'
import budgetRouter from './router/budgetRouter.js'
import { db } from './database/configDB.js'

const app = express()

app.use(express.json())

//routes
app.use('/api/Budgets', budgetRouter)

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log('REST API en el puerto', port)
})

try {
  await db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}