const { validationResult } = require('express-validator');

class AuthController {

    constructor(userService, identityService) {
        this.userService = userService;
        this.identityService = identityService;
    }

    async registerUser(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const userData = req.body;
            const newUser = await this.userService.registerUser(userData);
            return res.status(201).json({ message: 'User registered successfully. Contact Admin to activate' });
        } catch (error) {
            console.error('Error registering user:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async loginUser(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { Email, Password } = req.body;
            const token = await this.identityService.loginUser(Email, Password);
            return res.status(200).json({ token });
        } catch (error) {
            console.error('Error authenticating user:', error);
            return res.status(401).json({ message: 'Authentication failed' });
        }
    }
}

module.exports = AuthController;
