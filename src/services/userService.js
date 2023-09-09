const bcrypt = require('bcrypt');

class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async registerUser(userData) {
        try {
            const existingUser = await this.userRepository.findUserByEmail(userData.Email);

            if (existingUser) {
                throw new Error('Email already in use');
            }

            const hashedPassword = await bcrypt.hash(userData.Password, 10);
            userData.Password = hashedPassword;
            const newUser = await this.userRepository.createUser(userData);
            return newUser
        } catch (error) {
            throw new Error('Error regestering new user: ' + error.message);
        }
    }
}

module.exports = UserService;
