//Abstract Factory is used to create objects without being bound to specific classes
//In this case, the factory creates two types of objects: Room and Booking

const Room = require('../models/RoomPrototype');
const Booking = require('../models/Booking');

class HotelFactory {
    createRoom(type) {
        switch (type) {
            case 'Standard':
                return new Room('Standard', 100);
            case 'Presidential Suite':
                return new Room('Presidential Suite', 250);
            case 'Economy':
                return new Room('Economy', 50);
            default:
                throw new Error('No room type selected');
        }
    }

    createBooking(customer, room, checkInDate, checkOutDate) {
        return new Booking(customer, room, checkInDate, checkOutDate);
    }
}

module.exports = HotelFactory;
