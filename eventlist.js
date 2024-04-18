const EventEmitter = require('events');
const myEmitter = new EventEmitter();

const eventHandler = (arg1, arg2) => {
    console.log('Event occured with arguments:',arg1, arg2);
};

//Add the event handler
myEmitter.on('firstevent', eventHandler);

for(var i=0; i<4; i++){

    //Remove the listener after the first emission
    if(i==3){
        myEmitter.removeListener('firstevent', eventHandler);
    }
    myEmitter.emit('firstevent', 'Hello', 'Hi');
}