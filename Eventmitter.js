//Import the events module
const EventEmitter = require('events');
//Create the Instance
const myEmitter = new EventEmitter();


myEmitter.on('firstevent', (arg1, arg2) => {
    //Event handler logic
    console.log('Event occured with arguments:', arg1, arg2);
});

myEmitter.once('firstevent', (arg1, arg2) => {
    console.log('This listener will be executed only once.');
});

for(var i=0;i<5;i++){
myEmitter.emit('firstevent', 'Hello', 'Hi');
}