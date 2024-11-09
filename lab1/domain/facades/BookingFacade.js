//Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.
const HotelFactory = require('../factory/HotelFactory');
const HotelProxy = require('../proxies/HotelProxy');
const Customer = require('../models/Customer');

class BookingFacade {
    constructor() {
        this.hotelFactory = new HotelFactory();
        this.hotel = new HotelProxy('Lux Hotel', 'Chisinau');
    }

    addRoom(type) {
        const room = this.hotelFactory.createRoom(type);
        this.hotel.addRoom(room);
    }

    registerCustomer(name) {
        return new Customer(name);
    }

    bookRoom(customer, roomType, checkInDate, checkOutDate) {
        const availableRoom = this.hotel.bookRoom(roomType);
        if (!availableRoom) {
            throw new Error('Room not available');
        }
        return this.hotelFactory.createBooking(customer, availableRoom, checkInDate, checkOutDate);
    }

    getAvailableRooms() {
        return this.hotel.getAvailableRooms();
    }
}

module.exports = BookingFacade;
