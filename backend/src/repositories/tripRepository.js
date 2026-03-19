// src/repositories/tripRepository.js
const BaseRepository = require('./BaseRepository'); // 1. Import the Parent
const Trip = require('../models/Trip');

class TripRepository extends BaseRepository { // 2. Use 'extends' to inherit
    constructor() {
        super(Trip); // 3. Pass the Trip model to the Parent constructor
    }

    async createTrip(tripData) {
        const trip = new Trip(tripData);
        return await trip.save();
    }

    async findTripById(tripId) {
        return await Trip.findOne({ tripId });
    }

    async updateTripStatus(tripId, status) {
        return await Trip.findOneAndUpdate(
            { tripId },
            { status, endTime: status === 'COMPLETED' ? new Date() : undefined },
            { new: true }
        );
    }

    async addIncidentLog(tripId, incident) {
        return await Trip.findOneAndUpdate(
            { tripId },
            {
                status: 'DEVIATED',
                $push: { incidents: incident }
            },
            { new: true }
        );
    }

    async updateLastKnownLocation(tripId, coords) {
        return await Trip.findOneAndUpdate(
            { tripId },
            { lastKnownLocation: coords },
            { new: true }
        );
    }
}

module.exports = new TripRepository();
