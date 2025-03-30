// domain/observers/CustomerObserver.js
const Observer = require('./Observer');

class CustomerObserver extends Observer {
    constructor(customer) {
        super();
        this.customer = customer;
    }

    // When an update occurs, this method is triggered
    update(message) {
        console.log(`Notifying customer ${this.customer.name}: ${message}`);
    }
}

module.exports = CustomerObserver;
