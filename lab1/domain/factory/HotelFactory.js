//Abstract Factory is used to create objects without being bound to specific classes
//In this case, the factory creates two types of objects: Room and Booking

const Room = require('../models/RoomPrototype');
const RoomPriceAdapter = require('../adapters/RoomPriceAdapter'); // Подключение адаптера
const Booking = require('../models/Booking');

class HotelFactory {
    createRoom(type) {
        const priceAdapter = new RoomPriceAdapter(type); // Используем адаптер для получения цены
        const price = priceAdapter.getPrice();
        if (price !== null) {
            return new Room(type, price);
        } else {
            throw new Error('Room type not supported');
        }
    }

    createBooking(customer, room, checkInDate, checkOutDate) {
        return new Booking(customer, room, checkInDate, checkOutDate);
    }
}

module.exports = HotelFactory;
