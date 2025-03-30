// domain/observers/Observer.js
class Observer {
    update(message) {
        throw new Error('Observer method "update" should be implemented');
    }
}

module.exports = Observer;
