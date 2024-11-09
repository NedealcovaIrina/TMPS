// Proxy is a design pattern that acts as a placeholder for another object.
// It lets us add actions before or after accessing the real object.

const Hotel = require('../models/Hotel');

class HotelProxy {
    constructor(name, location) {
        this.hotel = new Hotel(name, location);
    }

    addRoom(room) {
        this.hotel.addRoom(room);
    }

    getAvailableRooms() {
        return this.hotel.getAvailableRooms();
    }

    bookRoom(roomType) {
        const room = this.hotel.getAvailableRooms().find(r => r.type === roomType);
        if (!room) {
            console.log('No available rooms of this type.');
            return null;
        }
        return room;
    }
}

module.exports = HotelProxy;
