/**
 * Builder du "BodyValidation" middlware
 * Cette méthode permet d'envoyer des parametres au middleware
 * @param {*} yupValidator 
 * @param {number} errorCode 
 * @returns 
 */
export const bodyValidationMiddleware = (yupValidator, errorCode = 422) => {

    // Le middlware qui permet la validation du "body" de la requete
    const middleware = (req, res, next) => {

        const data = req.body;

        if(!data) {
            res.status(400)
            .json({
                    errorMessage: 'Request body not found'
            });
            return;
        }

        yupValidator.noUnknown().validate(data, { abortEarly: false})
            .then((validateData) => {

                req.validateData = validateData;
                next();
            })
            .catch((yupError) => {
                console.log(yupError);

                res.status(errorCode)
                .json({
                        errorMessage: 'Invalide data'
                });
            });
    }

    // Envoi du middleware
    return middleware;
}