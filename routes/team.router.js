import { Router } from 'express';
import teamController from '../controllers/team.controller.js';


const teamRouter = Router();

teamRouter.route('/')
    .get(teamController.getAll)
    .post(teamController.add)
    .all((_, res) => res.sendStatus(405));
    
teamRouter.route('/:id')
    .get(teamController.getOne)
    .put(teamController.update)
    .delete(teamController.remove)
    .all((_, res) => res.sendStatus(405));

teamRouter.route('/:id/addPlayer')
    .patch(teamController.addPlayer)
    .all((_, res) => res.sendStatus(405));
    
teamRouter.route('/:id/removePlayer')
    .patch(teamController.addPlayer)
    .all((_, res) => res.sendStatus(405));

export default teamRouter;