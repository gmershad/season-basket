const { Disease } = require('../../models');

class DiseaseRepository {

    async createDisease(data) {
        try {
            const disease = await Disease.create(data);
            return disease;
        } catch (error) {
            throw error;
        }
    }

    async findDiseaseById(id) {
        try {
            const disease = await Disease.findByPk(id);
            return disease;
        } catch (error) {
            throw error;
        }
    }

    async updateDisease(id, data) {
        try {
            const [updatedCount] = await Disease.update(data, {
                where: { DiseaseId: id },
            });

            if (updatedCount === 0) {
                return null;
            }

            const updatedDisease = await Disease.findByPk(id);
            return updatedDisease;
        } catch (error) {
            throw error;
        }
    }

    async deleteDisease(id) {
        try {
            const deletedCount = await Disease.destroy({
                where: { DiseaseId: id },
            });

            return deletedCount > 0;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = DiseaseRepository;
