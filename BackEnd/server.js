import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { router as peepRouter } from './routes/peep.routes.js'
import { router as signUp } from './routes/signUp.routes.js'
import { router as login } from './routes/login.routes.js'


dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
const { NODE_ENV } = process.env;
dotenv.config({ path: `.env.${NODE_ENV}` });

const port = process.env.PORT;
const host = process.env.HOST;
const db = process.env.DB_URI;

const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use('/peeps', peepRouter)
app.use(`/signUp`, signUp);
app.use(`/login`, login);

try {
    await mongoose.connect(db)
} catch (err) {
    console.log('Database connection failed')
}

const server = app.listen(port, host, () => {
    const SERVER_HOST = server.address().address;
    const SERVER_PORT = server.address().port;
    console.log(`Server is running on http://${SERVER_HOST}:${SERVER_PORT}`);
});

export default server