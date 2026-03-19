// src/repositories/BaseRepository.js
class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async findById(id) {
        return await this.model.findById(id);
    }

    async delete(id) {
        return await this.model.findByIdAndDelete(id);
    }

    async count() {
        return await this.model.countDocuments();
    }
}

module.exports = BaseRepository;
