# Creational Design Patterns

## Author: Nedealcova Irina

---

## Objectives:

1. Study and understand the Creational Design Patterns.
2. Choose a domain area, define its main classes/models/entities and choose the appropriate instantiation mechanisms.
3. Implement 3 creational design patterns for object instantiation in a sample project.

## Some Theory(For My Case):
In my project, I explored the use of design patterns, which were initially popularized by the book "Design Patterns: Elements of Reusable Object-Oriented Software", published in 1994 by a group of four C++ engineers. This book discusses the strengths and limitations of object-oriented programming and introduces 23 patterns that can be applied to solve common programming challenges.[1]

It's also important to note that these patterns were originally created with object-oriented programming (OOP) in C++ in mind. When I apply them to modern languages like JavaScript or different programming paradigms, I recognize that some patterns may not be as directly applicable, and in some cases, they might introduce unnecessary complexity into the code. Nonetheless, understanding these patterns has helped me to structure my solutions more effectively.[1]
## Creational Design Patterns:
I have chosen the following design patterns
* Singleton Pattern;
* Factory Method Pattern;
* Prototype Pattern.

## Implementation

* For my project, I have chosen a Hotel System.The following implementation demonstrates three Creational Design Patterns: Singleton, Factory Method, and Prototype. In this hotel booking system, the system allows users to book hotel rooms and clone existing room objects,also ensuring a single instance of configuration.

### **Singleton Pattern**:
Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.
* A Singleton Pattern is used to manage the system configuration. It ensures that there is only one instance of the system configuration throughout the program execution.
* The `BookingSystemConfig` class checks if an instance exists and either returns the existing instance or creates a new one if it doesn’t exist.
```javascript
class BookingSystemConfig {
    ...
        Object.freeze(this); // Protects from changes
        BookingSystemConfig.instance = this;
}
```
This line makes this class object unchangeable. Once it's frozen, no one can add, remove, or modify its properties.
### **Prototype Pattern**:
Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.[2]
* The Prototype Pattern allows easy cloning of hotel rooms, making it efficient to create copies without rebuilding them from scratch.
* The Room class inherits from RoomPrototype and uses the `clone()` method to easily copy room objects without manually setting their properties again.
```javascript
class RoomPrototype {
    clone() {
        const clone = Object.create(this);
        return clone;
    }
}

class Room extends RoomPrototype {
    ...
}
```
* The cloned room can have the same properties, such as `type` and `price`, as the original room. Here is how cloning works:
```javascript
const prototypeRoom = new Room('Standard', 100);
const clonedRoom = prototypeRoom.clone();
```

### **Factory Method Pattern**:
Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.[2]
* The Factory Method Pattern creates different types of hotel rooms and bookings without needing to specify the exact class for each object.
* The `HotelFactory` class uses the `createRoom()` method to create rooms based on their type (Standard, Presidential Suite, Economy) and `createBooking()` to create a booking for a customer.
```javascript
class HotelFactory {
    ...
    }

    createBooking(customer, room, checkInDate, checkOutDate) {
        return new Booking(customer, room, checkInDate, checkOutDate);
    }
}
```
* For example, to create a standard room and booking:
```javascript
const factory = new HotelFactory();
const room = factory.createRoom('Standard');
const booking = factory.createBooking(customer, room, '2024-10-25', '2024-10-30');
```
### **Conclusions**:

* In conclusion,I can say that this project effectively demonstrates the usage of the **Singleton**, **Factory Method**, and **Prototype** design patterns in a hotel booking system. The **Singleton Pattern** ensures that there is only one instance of the system configuration. The **Factory Method Pattern** is used to create rooms and booking objects dynamically. The **Prototype Pattern** allows for easy cloning of room objects, making the management of similar room types efficient and flexible.
---
### **Bibliography**:
* [1] https://www.freecodecamp.org/news/javascript-design-patterns-explained/ Thanks to this site, I have a better understanding of how to implement this project in Java Script
* [2] https://refactoring.guru/design-patterns/singleton Thanks to this resource, I have a better understanding of the topic and have learnt Design Patterns


 
