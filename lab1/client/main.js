// client/main.js
const BookingFacade = require('../domain/facades/BookingFacade');

// Initialize the booking system facade
const bookingSystem = new BookingFacade();

// Register customers and add them as observers
const customer1 = bookingSystem.registerCustomer('Irina Nedealcova');
const customer2 = bookingSystem.registerCustomer('Ivan Sidorov');

// Add rooms to the hotel
bookingSystem.addRoom('Standard');
bookingSystem.addRoom('Presidential Suite');

// Display available rooms
console.log('\nAvailable Rooms:');
bookingSystem.getAvailableRooms().forEach((room) => {
    console.log(`Room: ${room.getDetails()}`);
});

// Book rooms for customers and notify them
const room1 = bookingSystem.getAvailableRooms()[0]; // Standard room
bookingSystem.bookRoom(customer1, 'Standard', '21.10.2024', '26.10.2024');

const room2 = bookingSystem.getAvailableRooms()[1]; // Presidential Suite
bookingSystem.bookRoom(customer2, 'Presidential Suite', '24.10.2024', '30.10.2024');
