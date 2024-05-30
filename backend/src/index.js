import express from 'express'
import dotenv from 'dotenv'
import movieRouter from './Routes/movieRoutes.js';
import cors from 'cors'

dotenv.config({
    path:'/.env'
})

const app = express();
const Port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));

app.use('/api/movies',movieRouter);

app.get('/',(req,res)=>{
res.send("Api is working");
})

app.listen(Port,()=>{
    console.log(`Listening on Port ${Port}`);
})
