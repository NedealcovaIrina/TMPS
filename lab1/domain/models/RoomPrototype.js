// In the context of the Prototype, my goal is to create a copy of the object
class RoomPrototype {
    clone() {
        const clone = Object.create(this); // Create a clone of the current object, function for Prototype
        return clone;
    }
}

class Room extends RoomPrototype {
    constructor(type, price) {
        super();
        this.type = type;
        this.price = price;
    }

    getDetails() {
        return `Room Type: ${this.type}, Price: $${this.price}`;
    }
}

module.exports = Room;
