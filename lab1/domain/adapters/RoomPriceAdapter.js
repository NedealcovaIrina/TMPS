// Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.
class ExternalRoomService {
    getRoomPrice(type) {
        // Simulate an external API providing room prices
        const prices = { 'Standard': 110, 'Presidential Suite': 260, 'Economy': 55 };
        return prices[type] || null;
    }
}

class RoomPriceAdapter {
    constructor(roomType) {
        this.externalService = new ExternalRoomService();
        this.roomType = roomType;
    }

    getPrice() {
        const price = this.externalService.getRoomPrice(this.roomType);
        console.log(`Using Adapter to fetch price for room type '${this.roomType}': $${price}`);
        return price;
    }
}
module.exports = RoomPriceAdapter;