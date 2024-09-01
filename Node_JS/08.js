/*Let's simulate a subscription feature similar to YouTube1 Using the events module, we'll create a custom
event named "subscribe"1 When this event is triggered, it should display a message in the console indicating
that the user has subscribed.*/


const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName) => {
  console.log(`Thanks For Subscribing to ${channelName}`);
};

eventEmitter.addListener("subscribe", subscribeMessage);

eventEmitter.emit("subscribe", "College Wallah");

// The above statement must print "Thanks For Subscribing to College Wallah"