import express from 'express';
import authRoutes from './routes/auth.routes.js'

const app = express();

const port = process.env.PORT || 4000;

app.use('/api/auth', authRoutes)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})