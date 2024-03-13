
/**
 * Un joueur
 * @typedef {object} PlayerDTO
 * @property {number} id
 * @property {string} firstname
 * @property {string} lastname
 */
export class PlayerDTO {
    
    constructor({id, firstname, lastname}) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
