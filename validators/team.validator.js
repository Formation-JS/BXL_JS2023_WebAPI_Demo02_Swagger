import yup from 'yup';

/**
 * Modele équipe pour l'ajout et la mise à jour
 * @typedef {object} Team
 * @property {string} name.required
 * @property {string} sport.required
 * @property {string} frequency
 */
export const teamValidator = yup.object().shape({
    name: yup.string().required(),
    sport: yup.string().required(),
    frequency: yup.string()
});

/**
 * Modele pour intéragir les joueurs d'une equipe
 * @typedef {object} TeamPlayers
 * @property {number[]} playerIds.required
 */
export const teamPlayersValidator = yup.object().shape({
    playerIds: yup.array().of(yup.number()).min(1)
});