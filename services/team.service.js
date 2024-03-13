import { TeamDTO, TeamListDTO } from '../dto/team.dto.js';

//? FakeData -> Replace by database
const fakeData = {
    teams: [
    ],
    nextId: 1
}

//? Service
const teamService = {

    getById: async (teamId) => {
        const team = fakeData.teams.find(t => t.id === teamId);
        return !!team ? new TeamDTO(team) : null;
    },
    
    getAll: async () => {
        return fakeData.teams.map(t => new TeamListDTO(t));
    },
    
    add: async (data) => {
        const teamAdded = {
            ...data,
            id: fakeData.nextId
        };

        fakeData.teams.push(teamAdded);
        fakeData.nextId++;

        return new TeamDTO(teamAdded);
    },
    
    update: async (teamId, data) => {
        const team = fakeData.teams.find(t => t.id === teamId);

        if(!team) {
            throw new Error('Team not found');
        }

        team.name = data.name 
        team.sport = data.sport 
        team.frequency = data.frequency 
    },
    
    delete: async (teamId) => {
        const teamIndex = fakeData.teams.findIndex(t => t.id === teamId);

        if(teamIndex < 0) {
            throw new Error('Team not found');
        }

        fakeData.teams.splice(teamIndex, 1);
    }

};

export default teamService;