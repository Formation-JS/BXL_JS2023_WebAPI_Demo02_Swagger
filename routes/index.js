import { Router } from 'express';
import playerRouter from './player.router.js';
import teamRouter from './team.router.js';


const mainRouter = Router();

mainRouter.use('/player', playerRouter);
mainRouter.use('/team', teamRouter);

export default mainRouter;