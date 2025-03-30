// Here I used a Singleton  for configuration management
class BookingSystemConfig {
    constructor() {
        if (BookingSystemConfig.instance) {
            return BookingSystemConfig.instance;
        }

        this.config = {
            systemName: 'Hotel Booking System',
            database: 'Hotel DB',
        };
        Object.freeze(this); // Adding protection from changes
        BookingSystemConfig.instance = this;
    }

    getConfig() {
        return this.config;
    }
}

module.exports = BookingSystemConfig;
