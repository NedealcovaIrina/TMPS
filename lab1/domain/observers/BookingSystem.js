// domain/observers/BookingSystem.js
class BookingSystem {
    constructor() {
        this.observers = new Map(); // Map to store customer observers
    }

    // Add an observer for a specific customer
    addObserver(customer, observer) {
        this.observers.set(customer.name, observer);
    }

    // Remove an observer for a specific customer
    removeObserver(customer) {
        this.observers.delete(customer.name);
    }

    // Notify only the relevant observer
    notifyObservers(customer, message) {
        const observer = this.observers.get(customer.name);
        if (observer) {
            observer.update(message);
        }
    }

    // Book a room and notify the relevant observer
    bookRoom(room, customer) {
        console.log(`Room of type ${room.type} booked for customer ${customer.name}`);
        this.notifyObservers(customer, `Room of type ${room.type} booked for ${customer.name}`);
    }
}

module.exports = BookingSystem;
