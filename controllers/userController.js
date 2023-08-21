const User = require('../models/User.js');

module.exports.createUser = (req, resp) => {
    const {body} = req;
    const user = new User(body);
    user.addUser();
    resp.statusCode = 201;
    resp.send(user)
}

module.exports.getAllUsers = (req, resp) => {
    const users = User.findAll();
    resp.statusCode = 200;
    resp.send(users);
}

module.exports.getOneUser = (req, resp) => {
    const {userId} = req.params;
    const user = User.findUser(Number(userId));
    if(user) {
        resp.status(200).send(user);
    } else {
        resp.status(404).end();
    }
    
}

module.exports.deleteOneUser = (req,resp) => {
    const {userId} = req.params;
    const user = User.findUser(Number(userId));
    if(user) {
        user.deleteUser();
        resp.send(user);
    } else {
        resp.status(404).end();
    }
}

module.exports.updateUser = (req, resp) => {
    const {body, params: {userId}} = req;
    const user = User.findUser(Number(userId));
    if(user) {
        user.updateUser(body);
        resp.status(200).end();
    } else {
        resp.status(404).end();
    }   
}