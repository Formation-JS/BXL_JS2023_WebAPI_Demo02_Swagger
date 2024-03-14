import { PlayerDTO } from '../dto/player.dto.js';

//? FakeData -> Replace by database
const fakeData = {
    players: [
        {
            id: 1,
            email: 'della.duck@digitalcity.brussels',
            firstname: 'Della',
            lastname: 'Duck'
        }
    ],
    nextId: 2
}

//? Service
const playerService = {

    getById: async (playerId) => {
        const player = fakeData.players.find(p => p.id === playerId);
        return !!player ? new PlayerDTO(player) : null;
    },

    getByEmail: async (email) => {
        const player = fakeData.players.find(p => p.email === email);
        return !!player ? new PlayerDTO(player) : null;
    },

    add: async (data) => {

        if(fakeData.players.some(p => p.email === data.email)) {
            throw new Error('Email already exists');
        }

        const playerAdded = {
            ...data,
            id: fakeData.nextId
        };

        fakeData.players.push(playerAdded);
        fakeData.nextId++;

        return new PlayerDTO(playerAdded);
    },

    update: async (email, data) => {

        const player = fakeData.players.find(p => p.email === email);

        if(!player) {
            throw new Error('Player not found');
        }

        player.firstname = data.firstname;
        player.lastname = data.lastname;
    }

};

export default playerService;