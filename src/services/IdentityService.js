const jwt = require('jsonwebtoken');
const config = require("./../config");
const bcrypt = require('bcrypt');

class IdentityService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async loginUser(email, password) {
        try {
            const user = await this.userRepository.findUserByEmail(email);
            if (!user) {
                throw new Error('User not found');
            }

            if (!user.IsActive) {
                throw new Error('User is not active');
            }

            const passwordMatch = await bcrypt.compare(password, user.Password);
            if (!passwordMatch) {
                throw new Error('Incorrect password');
            }


            const token = jwt.sign({ userId: user.Id }, config.SECRET_KEY, {
                expiresIn: '1h',
            });

            return token;
        } catch (error) {
            throw new Error('Error regestering new user: ' + error.message);
        }
    }

    async getUserFromToken(token) {
        try {
            const decoded = jwt.verify(token, config.SECRET_KEY);
            if (!decoded.userId) {
                throw new Error('Invalid token');
            }

            const user = await this.userRepository.findUserById(decoded.userId);
            if (!user) {
                throw new Error('User not found');
            }

            return user;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = IdentityService;
