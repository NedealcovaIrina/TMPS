// main.js
const BookingSystemConfig = require('../domain/singleton/BookingSystemConfig');
const BookingFacade = require('../domain/facades/BookingFacade');

// Initialize the Singleton configuration
const config = new BookingSystemConfig();
console.log('System Configuration:', config.getConfig());

// Initialize the booking system facade
const bookingSystem = new BookingFacade();

// Adding rooms to the hotel through the facade
bookingSystem.addRoom('Standard');
bookingSystem.addRoom('Presidential Suite');

// Display available rooms
console.log('\nAvailable Rooms:');
bookingSystem.getAvailableRooms().forEach((room) => {
    console.log(`Room: ${room.getDetails()}`);
});

// Registering customers and booking rooms
const customer1 = bookingSystem.registerCustomer('Irina Nedealcova');
const booking1 = bookingSystem.bookRoom(customer1, 'Standard', '21.10.2024', '26.10.2024');
console.log(`\nBooking details for customer 1:
Customer: ${booking1.customer.name}
Room: ${booking1.room.getDetails()}
Check-in Date: ${booking1.checkInDate}
Check-out Date: ${booking1.checkOutDate}`);

const customer2 = bookingSystem.registerCustomer('Ivan Sidorov');
const booking2 = bookingSystem.bookRoom(customer2, 'Presidential Suite', '24.10.2024', '30.10.2024');
console.log(`\nBooking details for customer 2:
Customer: ${booking2.customer.name}
Room: ${booking2.room.getDetails()}
Check-in Date: ${booking2.checkInDate}
Check-out Date: ${booking2.checkOutDate}`);

// Demonstrating the Prototype pattern by cloning a room
const clonedRoom = bookingSystem.getAvailableRooms()[0].clone();
console.log('\nCloned Room Details:');
console.log(clonedRoom.getDetails());
