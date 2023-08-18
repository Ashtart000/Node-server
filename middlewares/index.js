const { registrationUserSchema } = require('../schemas/userValidation')

module.exports.validateUser = async (req, resp, next) => {
    try {
        await registrationUserSchema.validate(req.body);
        return next();
    } catch (error) {
        resp.statusCode = 500;
        resp.send(error.message)
    }  
}