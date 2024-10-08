// Class to manage user profile - SRP
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

// Base class for notifications - SRP
class Notification {
    send(message) {
        throw new Error("Method 'send()' must be implemented.");
    }
}

// Email notification class - OCP (extended from Notification)
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

// SMS notification class - OCP (extended from Notification)
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

// Usage example
const user = new UserProfile("Irina Nedealcova", "ira_ned@example.com", "+1234567890");
console.log(user.getUserInfo());

const emailNotifier = new EmailNotification(user.email);
emailNotifier.send("Welcome to the platform!");

const smsNotifier = new SMSNotification(user.phoneNumber);
smsNotifier.send("Your verification code is 123456");
