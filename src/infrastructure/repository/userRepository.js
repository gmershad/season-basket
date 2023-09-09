const { User } = require('../../models');

class UserRepository {
    async createUser(userData) {
        try {
            const user = await User.create(userData);
            return user;
        } catch (error) {
            throw new Error('Error creating user: ' + error.message);
        }
    }

    async findUserByEmail(email) {
        try {
            const user = await User.findOne({ where: { Email: email } });
            return user
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserRepository;
