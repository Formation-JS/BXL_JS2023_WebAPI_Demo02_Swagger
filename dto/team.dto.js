
/**
 * Une équipe
 * @typedef {object} TeamDTO
 * @property {string} name
 * @property {string} sport
 * @property {string} frequency
 * @property {PlayerDTO[]} players
 */
export class TeamDTO {
    
    constructor({name, sport, frequency, players}) {
        this.name = name;
        this.sport = sport;
        this.frequency = frequency;
        this.players = players;
    }
}

/**
 * Une équipe (Donnée partiel)
 * @typedef {object} TeamListDTO
 * @property {string} name
 * @property {string} frequency
 */
export class TeamListDTO {
    
    constructor({name, frequency}) {
        this.name = name;
        this.frequency = frequency;
    }
}
