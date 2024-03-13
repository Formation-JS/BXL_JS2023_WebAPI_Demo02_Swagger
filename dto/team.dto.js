
/**
 * Une équipe
 * @typedef {object} TeamDTO
 * @property {number} id
 * @property {string} name
 * @property {string} sport
 * @property {string} frequency
 * @property {PlayerDTO[]} players
 */
export class TeamDTO {
    
    constructor({id, name, sport, frequency, players}) {
        this.id = id;
        this.name = name;
        this.sport = sport;
        this.frequency = frequency;
        this.players = players;
    }
}

/**
 * Une équipe (Donnée partiel)
 * @typedef {object} TeamListDTO
 * @property {number} id
 * @property {string} name
 * @property {string} frequency
 */
export class TeamListDTO {
    
    constructor({id, name, frequency}) {
        this.id = id;
        this.name = name;
        this.frequency = frequency;
    }
}
