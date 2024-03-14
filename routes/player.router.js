import { Router } from 'express';
import playerController from '../controllers/player.controller.js';
import { bodyValidationMiddleware } from '../middlewares/body-validation.middleware.js';
import { playerDataValidator, playerValidator } from '../validators/player.validator.js';


const playerRouter = Router();

playerRouter.route('/')
    .post(bodyValidationMiddleware(playerValidator), playerController.add)
    .all((_, res) => res.sendStatus(405));
    
playerRouter.route('/:email')
    .get(playerController.get)
    .put(bodyValidationMiddleware(playerDataValidator), playerController.update)
    .all((_, res) => res.sendStatus(405));

export default playerRouter;