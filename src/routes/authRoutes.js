const express = require('express');
const router = express.Router();

module.exports = (authController) => {
    router.post('/login', authController.loginUser.bind(authController));
    router.post('/register', authController.registerUser.bind(authController));

    return router;
};