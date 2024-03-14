import { Router } from 'express';
import teamController from '../controllers/team.controller.js';
import { bodyValidationMiddleware } from '../middlewares/body-validation.middleware.js';
import { teamPlayersValidator, teamValidator } from '../validators/team.validator.js';


const teamRouter = Router();

teamRouter.route('/')
    .get(teamController.getAll)
    .post(bodyValidationMiddleware(teamValidator), teamController.add)
    .all((_, res) => res.sendStatus(405));
    
teamRouter.route('/:id')
    .get(teamController.getOne)
    .put(bodyValidationMiddleware(teamValidator), teamController.update)
    .delete(teamController.remove)
    .all((_, res) => res.sendStatus(405));

teamRouter.route('/:id/addPlayer')
    .patch(bodyValidationMiddleware(teamPlayersValidator), teamController.addPlayer)
    .all((_, res) => res.sendStatus(405));
    
teamRouter.route('/:id/removePlayer')
    .patch(bodyValidationMiddleware(teamPlayersValidator), teamController.addPlayer)
    .all((_, res) => res.sendStatus(405));

export default teamRouter;