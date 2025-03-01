import express from 'express';
import authRoutes from './routes/auth.routes.js'
import db from './config/db.js'

// Initialize express app and define port number
const app = express();

const port = process.env.PORT || 4000;

//Middleware
app.use(express.json());

app.use('/api/auth', authRoutes)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})

try {
  await db.authenticate();
  db.sync();
  console.log("Conexión correcta con la base de datos");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}