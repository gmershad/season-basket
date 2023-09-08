class DiseaseService {

    constructor(diseaseRepository) {
        this.diseaseRepository = diseaseRepository;
    }

    async createDisease(data) {
        const disease = await this.diseaseRepository.createDisease(data);
        return disease;
    }

    async findDiseaseById(id) {
        const disease = await this.diseaseRepository.findDiseaseById(id);
        return disease;
    }

    async updateDisease(id, data) {
        const updatedDisease = await this.diseaseRepository.updateDisease(id, data);
        return updatedDisease;
    }

    async deleteDisease(id) {
        const isDeleted = await this.diseaseRepository.deleteDisease(id);
        return isDeleted;
    }
}

module.exports = DiseaseService;
