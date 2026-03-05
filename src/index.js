import express from 'express'
import budgetRouter from './router/budgetRouter.js'

const app = express()

app.use(express.json())

//routes
app.use('/api/Budgets', budgetRouter)

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log('REST API en el puerto', port)
})