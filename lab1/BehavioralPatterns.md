# Behavioral Design Patterns

## Author: Nedealcova Irina FAF-223

---

## Objectives:

1. Study and understand the Behavioral Design Patterns.
2. Extend the previous work by thinking about the communication between software components.
3. Implement a new functionality using a behavioral design pattern.

## Some Theory:

Behavioral design patterns focus on the interaction between objects. They help define how objects communicate with each other, making the system more flexible and easier to maintain. The key idea is that behavioral patterns allow for better organization of communication between different components in a system, reducing tight coupling.

In JavaScript, these patterns can be particularly useful to manage how objects in the system interact without directly modifying each object.

### Common Behavioral Patterns:
- **Observer**
- **Strategy**
- **Command**
- **Mediator**

For this task, I chose the **Observer Pattern**, which helps to notify specific objects (like customers) when something happens in the system (like booking a room).

## The Behavioral Design Pattern I Used: **Observer Pattern**

### Purpose:
The **Observer Pattern** allows one object (the "subject") to notify other objects (the "observers") about changes without knowing who or what those observers are. It’s useful when you want to keep objects decoupled but still need to allow them to communicate.

In my project, I used the Observer Pattern to notify customers when their room booking is successful. Each customer is an observer who gets notified whenever a room is booked for them.

### How It Works:
- The **BookingSystem** is the subject that manages a list of observers (the customers).
- When a customer books a room, the system notifies the relevant customer through their observer.

For example:
```javascript
class BookingSystem {
    notifyObservers(customer, message) {
        // Notify a specific customer about their booking
        const observer = this.observers.get(customer.name);
        if (observer) {
            observer.update(message);
        }
    }
}
```

Here, the `BookingSystem` checks for the specific customer and sends them a notification about their booking.

### Why It’s Useful:
- The Observer Pattern helps avoid tight coupling. If we had a more complex system with many customers and events, this pattern makes it easier to manage notifications without needing to change the core logic of booking rooms.
- It’s also scalable. As the system grows, you can easily add or remove customers from the notification list.

### How It Was Implemented:
In my hotel system, the **BookingFacade** is the interface used by the user (the client). The `BookingFacade` registers each customer as an observer. When a room is booked, the **BookingSystem** sends a notification to the specific customer.

For example:
```javascript
class BookingFacade {
    registerCustomer(name) {
        const customer = new Customer(name);
        const customerObserver = new CustomerObserver(customer);
        this.bookingSystem.addObserver(customer, customerObserver);  // Add customer as an observer
        return customer;
    }
}
```

### Results:
- When a room is booked for a customer, only that customer receives a notification.
- It reduces unnecessary notifications for customers who didn’t make a booking.
- The system is more flexible, as we can add new types of observers (other entities that need to be notified) in the future without modifying much of the existing code.

### **Conclusions**:

By implementing the **Observer Pattern**, I was able to efficiently handle notifications in the system. The pattern helps decouple the customer from the booking process, ensuring that notifications are sent only when relevant.

The use of this pattern also increases the scalability and flexibility of the system, making it easier to add new features or modify existing ones without breaking the system.

---

### **Bibliography**:

* [1] https://refactoring.guru/design-patterns/observer – A great explanation of the **Observer Pattern**.