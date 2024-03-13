import { PlayerDTO } from '../dto/player.dto.js';
import { TeamDTO, TeamListDTO } from '../dto/team.dto.js';
import playerService from './player.service.js';

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

        if(!team) {
            return null;
        }

        const players = [];
        for(const playerId of team.player) {
            const player = playerService.getById(playerId);
            players.push(new PlayerDTO(player));
        }

        return new TeamDTO({ ...team, players })
    },
    
    getAll: async () => {
        return fakeData.teams.map(t => new TeamListDTO(t));
    },
    
    add: async (data) => {
        const teamAdded = {
            ...data,
            players: [],
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
    },

    addPlayer: async (teamId, ...playerIds) => {
        const team = fakeData.teams.find(t => t.id === teamId);
        if(!team) {
            throw new Error('Team not found');
        }

        if(team.players.some(p => playerIds.includes(p))) {
            throw new Error('Player already in Team');
        }

        team.players.push(...playerId);
    },

    removePlayer: async (teamId, ...playerIds) => {
        const team = fakeData.teams.find(t => t.id === teamId);
        if(!team) {
            throw new Error('Team not found');
        }

        for(const playerId of playerIds) {

            const playerIndex = team.players.findIndex(p => p.id === playerId)
            if(playerIndex < 0) {
                throw new Error('Player not in Team');
            }
            
            team.players.splice(playerIndex, 1);
        }
    }

};

export default teamService;