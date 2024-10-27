// main
const BookingSystemConfig = require('../domain/singleton/BookingSystemConfig');
const HotelFactory = require('../domain/factory/HotelFactory');
const Hotel = require('../domain/models/Hotel');
const Customer = require('../domain/models/Customer');

// The Singleton configuration
const config = new BookingSystemConfig();
console.log('System Configuration:', config.getConfig());

// Creation a factory for rooms and reservations
const hotelFactory = new HotelFactory();

// Creation a hotel
const myHotel = new Hotel('Lux Hotel', 'Chisinau');

// Adding rooms in hotel
const standardRoom = hotelFactory.createRoom('Standard');
const suiteRoom = hotelFactory.createRoom('Presidential Suite');
myHotel.addRoom(standardRoom);
myHotel.addRoom(suiteRoom);

// Displaying available numbers
console.log('Available Rooms:');
myHotel.getAvailableRooms().forEach((room) => {
    console.log(`Room: ${room.getDetails()}`);
});

// Creating the first client and booking
const customer1 = new Customer('Irina Nedealcova');
const booking1 = hotelFactory.createBooking(customer1, standardRoom, '21.10.2024', '26.10.2024');
console.log(`\nBooking details for customer 1:
Customer: ${booking1.customer.name}
Room: ${booking1.room.getDetails()}
Check-in Date: ${booking1.checkInDate}
Check-out Date: ${booking1.checkOutDate}`);

// Creating the second client and booking
const customer2 = new Customer('Ivan Sidorov');
const booking2 = hotelFactory.createBooking(customer2, suiteRoom, '24.10.2024', '30.10.2024');
console.log(`\nBooking details for customer 2:
Customer: ${booking2.customer.name}
Room: ${booking2.room.getDetails()}
Check-in Date: ${booking2.checkInDate}
Check-out Date: ${booking2.checkOutDate}`);

// Prototype pattern
const clonedRoom = standardRoom.clone();
console.log('\nCloned Room Details:');
console.log(clonedRoom.getDetails());
