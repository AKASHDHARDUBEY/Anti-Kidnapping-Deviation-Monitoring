// src/repositories/BaseRepository.js
class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    // Generic method to find any document by its ID
    async findById(id) {
        return await this.model.findById(id);
    }

    // Generic method to delete any document by its ID
    async delete(id) {
        return await this.model.findByIdAndDelete(id);
    }

    // Generic method to count all documents
    async count() {
        return await this.model.countDocuments();
    }
}

module.exports = BaseRepository;
