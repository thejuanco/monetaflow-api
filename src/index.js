import express from 'express';
import authRoutes from './routes/auth.routes.js'

const app = express();

const port = process.env.PORT || 4000;

//Middleware
app.use(express.json());

app.use('/api/auth', authRoutes)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})