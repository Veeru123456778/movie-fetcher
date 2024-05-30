import express from 'express'
import movieInfo from '../controllers/movieController.js'

const movieRouter = express.Router();

movieRouter.get('/',movieInfo);


export default movieRouter;