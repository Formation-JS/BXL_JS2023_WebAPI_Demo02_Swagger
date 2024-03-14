import playerService from '../services/player.service.js';

const playerController = {


    /**
     * GET /api/player/{email}
     * @summary Information du joueur
     * @tags Player
     * @param {string} email.path - Email du joueur
     * @return {PlayerDTO} 200 - Player - application/json
     * @return 404 - Not found
     */
    get: async (req, res) => {
        const email = req.params.email;

        const player = await playerService.get(email);

        if(!player) {
            res.sendStatus(404);
            return;
        }

        res.status(200)
           .json(player);
    },

    /**
     * POST /api/player
     * @summary Ajout d'un joueur
     * @tags Player
     * @param {Player} request.body.required - Player - application/json
     * @return {PlayerDTO} 201 - Player - application/json
     * @return 400 - Invalid request
     * @return 422 - Invalid data
     */
    add: async (req, res) => {
        const data = req.validateData;

        try {
            const player = await playerService.add(data);

            res.status(201)
               .location('/api/player/'+ data.email)
               .json(player);
        }
        catch(error) {
            res.status(400)
               .json({
                    errorMessage: error.message
               });
        }
    },
    
    /**
     * PUT /api/player/{email}
     * @summary Modification d'un joueur
     * @tags Player
     * @param {string} email.path - Email du joueur
     * @param {PlayerData} request.body.required - PlayerData - application/json
     * @return 204 - Success
     * @return 400 - Invalid request
     */
    update: async (req, res) => {
        const email = req.params.email;
        const data = req.validateData;

        try {
            await playerService.update(email, data);
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

export default playerController;