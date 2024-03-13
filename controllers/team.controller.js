import teamService from '../services/team.service.js';

const teamController =  {

    /**
     * GET /api/team/{teamId}
     * @summary Information d'une équipe
     * @tags Team
     * @param {number} teamId.path - L'id de l'équipe
     * @return {TeamDTO} 200 - Team - application/json
     * @return 404 - Not found
     */
    getOne : async (req, res) => {
        const teamId = parseInt(req.params.id);
        
        const team = await teamService.getById(teamId);
        if(!team) {
            res.sendStatus(404);
            return;
        }

        res.status(200)
           .json(team);
    },
    
    /**
     * GET /api/team/
     * @summary Liste des équipes
     * @tags Team
     * @return {TeamListDTO} 200 - Team - application/json
     */
    getAll : async (req, res) => {
        const teams = await teamService.getAll();

        res.status(200)
           .json(teams);
    },
    
    /**
     * POST /api/team/
     * @summary Ajouter une équipe
     * @tags Team
     * @return {TeamDTO} 201 - Team - application/json
     * @return 422 - Invalid data
     */
    add : async (req, res) => {
        // TODO Validation ?
        const data = req.body;

        const teamAdded = await teamService.add(data);
        res.status(201)
           .location('/api/team/'+teamAdded.id)
           .json(teamAdded);
    },
    
    /**
     * POST /api/team/
     * @summary Mettre à jour une équipe
     * @tags Team
     * @return {TeamDTO} 201 - Team - application/json
     * @return 400 - Invalid request
     * @return 422 - Invalid data
     */
    update : async (req, res) => {
        // TODO Validation ?
        const teamId = parseInt(req.params.id);
        const data = req.body;
        
        try {
            await teamService.update(teamId, data);
            res.sendStatus(204);
        }
        catch(error) {
            res.status(400)
               .json({
                    errorMessage: error.message
               });
        }

    },
      
    /**
     * DELETE /api/team/
     * @summary Supprimer une équipe
     * @tags Team
     * @return 204 - Success
     * @return 400 - Invalid request
     */
    remove : async (req, res) => {
        const teamId = parseInt(req.params.id);
        
        try {
            await teamService.remove(teamId);
            res.sendStatus(204);
        }
        catch(error) {
            res.status(400)
               .json({
                    errorMessage: error.message
               });
        }
    },
    
    /**
     * PATCH /api/team/{teamId}/addPlayer
     * @summary Ajouter des joueurs à une équipe
     * @tags Team
     * @param {number} teamId.path - L'id de l'équipe
     * @return 204 - Success
     * @return 400 - Invalid request
     */
    addPlayer : async (req, res) => {
        const teamId = parseInt(req.params.id);
        const data = req.body;

        try {
            await teamService.addPlayer(teamId, data.playerIds);
            res.sendStatus(204);
        }
        catch(error) {
            res.status(400)
               .json({
                    errorMessage: error.message
               });
        }
    },

    /**
     * PATCH /api/team/{teamId}/removePlayer
     * @summary Ajouter des joueurs à une équipe
     * @tags Team
     * @param {number} teamId.path - L'id de l'équipe
     * @return 204 - Success
     * @return 400 - Invalid request
     */
    removePlayer : async (req, res) => {
        const teamId = parseInt(req.params.id);
        const data = req.body;

        try {
            await teamService.remove(teamId, data.playerIds);
            res.sendStatus(204);
        }
        catch(error) {
            res.status(400)
               .json({
                    errorMessage: error.message
               });
        }
    }
};

export default teamController;