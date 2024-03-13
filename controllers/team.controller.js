import teamService from '../services/team.service.js';

const teamController =  {

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
    
    getAll : async (req, res) => {
        const teams = await teamService.getAll();

        res.status(200)
           .json(teams);
    },
    
    add : async (req, res) => {
        // TODO Validation ?
        const data = req.body;

        const teamAdded = await teamService.add(data);
        res.status(201)
           .location('/api/team/'+teamAdded.id)
           .json(teamAdded);
    },
    
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