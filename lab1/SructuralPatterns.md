# Structural Design Patterns

## Author: Nedealcova Irina FAF-223

---

## Objectives:

1. Study and understand the Structural Design Patterns.
2. As a continuation of the previous laboratory work, think about the functionalities that your system will need to provide to the user.
3. Implement some additional functionalities using structural design patterns.

## Some Theory:
Structural design patterns explain how to assemble objects and classes into larger structures, while keeping these structures flexible and efficient.

In JavaScript, Structural Design Patterns are essential solutions that help you organize and manage the relationships between objects and classes, ensuring the structure remains efficient, flexible, and easy to maintain. 
These patterns are quite necessary in JavaScript, where object-oriented principles are used, and they can make the codebase modular, reusable, and scalable.

## Structural Design Patterns:
I have chosen the following design patterns
* Adapter Pattern;
* Facade Pattern;
* Proxy Pattern.

## Implementation

For my project, I created a Hotel System that uses three **Structural Design Patterns**: **Adapter**, **Facade**, and **Proxy**. Here's how each pattern helps in the system:

1. The **Adapter** pattern connects with an external source to get room prices and makes sure the data fits the system’s needs.
2. The **Facade** pattern provides a simple way to interact with the system, combining actions like creating rooms, registering customers, and making bookings into one easy interface.
3. The **Proxy** pattern checks room availability before booking, adding a layer of security by controlling room access.

Structural patterns work "behind the scenes" in this code, providing flexibility and simplicity in the interactions between components.
* ### **Adapter Pattern**:
Purpose: The RoomPriceAdapter allows the booking system to fetch room prices from an external service, ExternalRoomService, even if its interface or data format differs from the system’s requirements.

How It Works: The adapter converts the price data provided by ExternalRoomService into a format compatible with the booking system’s Room objects. It effectively bridges the gap between the external pricing service and the system’s internal requirements. 

```javascript
class RoomPriceAdapter {
    constructor(roomType) {
        this.externalService = new ExternalRoomService();
        this.roomType = roomType;
    }

    getPrice() {
        const price = this.externalService.getRoomPrice(this.roomType);
        console.log(`Using Adapter to fetch price: $${price}`);
        return price;
    }
}

```
RoomPriceAdapter allows the system to retrieve and integrate room prices from an external source, making it flexible to work.
* ### **Facade Pattern**:
Purpose:By serving as a single interface, the BookingFacade streamlines communications with the booking system. By hiding the intricate setup of making reservations, registering clients, and setting up rooms, it simplifies these tasks through a single interface.

How It Works: BookingFacade internally uses other classes like HotelFactory, HotelProxy, and Customer to manage rooms and bookings without exposing these details.
```javascript
class BookingFacade {
    addRoom(type) {
        const room = this.hotelFactory.createRoom(type);
        this.hotel.addRoom(room);
    }
}

```
`BookingFacade` simplifies adding rooms, registering customers, and booking, reducing dependencies on individual classes.
* ### **Proxy Pattern**:
Purpose:Prior to making a booking, the HotelProxy verifies the availability of rooms, consequently controlling access to the Hotel object. This ensures that only available rooms may be reserved, adding an extra degree of control and security.

How It Works: HotelProxy intercepts requests to book rooms and performs checks to ensure that the requested room type is available. If the room is unavailable, it prevents the booking from proceeding.
```javascript
class HotelProxy {
    bookRoom(roomType) {
        const room = this.hotel.getAvailableRooms().find(r => r.type === roomType);
        if (!room) {
            console.log(`Proxy: No available rooms of type '${roomType}'.`);
            return null;
        }
        console.log(`Proxy: Booking room of type '${roomType}'.`);
        return room;
    }
}
```
HotelProxy controls access to rooms in Hotel, verifying availability before booking. This helps manage access and prevent overbooking without modifying the Hotel class directly.
### **Conclusions**:

* Three structural design patterns—Adapter, Facade, and Proxy—enhance the hotel booking system’s adaptability and maintainability. The **Facade Pattern** simplifies operations with a single interface for room management, registration, and booking. The **Adapter Pattern** ensures compatibility with external services by converting data formats. The **Proxy Pattern** improves security by checking room availability before booking, preventing overbooking. Together, these patterns boost scalability, modularity, and ease of maintenance.
---
### **Bibliography**:
* [1] https://www.geeksforgeeks.org/structural-design-patterns/ Thanks to this site, I better understand Structural Design Patterns. 
* [2] https://refactoring.guru/design-patterns/structural-patterns Another good resource for learning.
* [3] https://quillbot.com/paraphrasing-tool A tool that allows me to express my thoughts correctly.

 
