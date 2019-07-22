const EventEmitter = require('events');

Object.defineProperty(EventEmitter.prototype, 'promisify', {
  value: function(event) {
    return new Promise(resolve => this.once(event, resolve));
  }
})