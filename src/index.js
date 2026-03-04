import express from 'express'

const app = express()

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log('REST API en el puerto', port)
})