# Lab #0 (SOLID LETTERS)  
**Author**: Nedealcova Irina, FAF-223

## Objectives  
- Understand and apply SOLID principles.
- Implement 2 SOLID principles in a simple project.

## Introduction 
Understanding SOLID coding principles is essential for creating maintainable and scalable software. SOLID principles coding focuses on five key design principles: Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion. These principles form the foundation of solid software development, especially for those working in object-oriented programming.

### Single Responsibility Principle (SRP)  
The Single Responsibility Principle states that a class should have only one reason to change, meaning it should only have one job or responsibility.

In this project, the `UserProfile` class is responsible for handling user-related information. It has a single responsibility: managing user profile data (name, email, and phone number).

```javascript
class UserProfile {
    constructor(name, email, phoneNumber) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    getUserInfo() {
        return `User: ${this.name}, Email: ${this.email}, Phone: ${this.phoneNumber}`;
    }
}
```

### Open/Closed Principle (OCP)  
Software entities should be open for extension but closed for modification. This means you should be able to add new functionality without changing the existing code.

In this project, the `Notification` class serves as the base class for different types of notifications. This class is designed to be extended, allowing the creation of new notification types without modifying the original class. The base class follows the OCP principle, while the `EmailNotification` and `SMSNotification` classes extend it to implement specific notification types.

```javascript
class Notification {
    send(message) {
        throw new Error("Method 'send()' must be implemented.");
    }
}

class EmailNotification extends Notification {
    constructor(email) {
        super();
        this.email = email;
    }

    send(message) {
        console.log(`Sending Email to ${this.email}`);
        console.log(`Message: ${message}`);
    }
}

class SMSNotification extends Notification {
    constructor(phoneNumber) {
        super();
        this.phoneNumber = phoneNumber;
    }

    send(message) {
        console.log(`Sending SMS to ${this.phoneNumber}`);
        console.log(`Message: ${message}`);
    }
}
```

### Example Usage
The following example demonstrates how to use the `UserProfile`, `EmailNotification`, and `SMSNotification` classes:

```javascript
const user = new UserProfile("Irina Nedealcova", "ira_ned@example.com", "+1234567890");
console.log(user.getUserInfo());

const emailNotifier = new EmailNotification(user.email);
emailNotifier.send("Welcome to the platform!");

const smsNotifier = new SMSNotification(user.phoneNumber);
smsNotifier.send("Your verification code is 123456");
```

## Conclusion  
In this project, the **Single Responsibility Principle (SRP)** ensures each class handles only one task, making the code simpler to manage and test. The **Open/Closed Principle (OCP)** allows for easy extension of functionality, like adding new notification types, without modifying existing code. I think, together, these principles create a more flexible, maintainable, and scalable system.
