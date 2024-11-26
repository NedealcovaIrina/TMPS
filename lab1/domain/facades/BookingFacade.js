// domain/facades/BookingFacade.js
const BookingSystem = require('../observers/BookingSystem');
const CustomerObserver = require('../observers/CustomerObserver');
const HotelFactory = require('../factory/HotelFactory');
const HotelProxy = require('../proxies/HotelProxy');
const Customer = require('../models/Customer');

class BookingFacade {
    constructor() {
        this.bookingSystem = new BookingSystem();
        this.hotelFactory = new HotelFactory();
        this.hotel = new HotelProxy('Lux Hotel', 'Chisinau');
    }

    addRoom(type) {
        const room = this.hotelFactory.createRoom(type);
        this.hotel.addRoom(room);
    }

    registerCustomer(name) {
        const customer = new Customer(name);
        const customerObserver = new CustomerObserver(customer);
        this.bookingSystem.addObserver(customer, customerObserver);  // Associate customer with observer
        return customer;
    }

    bookRoom(customer, roomType, checkInDate, checkOutDate) {
        const availableRoom = this.hotel.bookRoom(roomType);
        if (!availableRoom) {
            throw new Error('Room not available');
        }
        this.bookingSystem.bookRoom(availableRoom, customer);
        return this.hotelFactory.createBooking(customer, availableRoom, checkInDate, checkOutDate);
    }

    getAvailableRooms() {
        return this.hotel.getAvailableRooms();
    }
}

module.exports = BookingFacade;
