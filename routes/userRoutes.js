const usersController = require('../controllers/usersController')  //Access to all functions of Users Controller


module.exports = (app) => {

    app.post('/api/users/create', usersController.register);
    app.post('/api/users/login', usersController.login);
}


