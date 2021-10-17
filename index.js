//now we are playing with module name 'events'

  //use to handle events , as : create , fire , listen etc ; can crete own events
  
  //example 1:  register event to be listen ,call or fired for ones

    let EventEmitter = require('events');

    let events = new EventEmitter();
  let  SecondEvnt = new EventEmitter();
       //  2nd step: after emitting the event the event must be listened so that it can be consoled or printed the name 
   
      events.on("sayMyName", () => {
        console.log( "my name is ayesha");
    });

    //can create multiple events

    events.on("sayMyName", () => {
        console.log("my name is zainab")
    });

     events.on("sayMyName", () => {
         console.log("My name is Anaya");
     });
      events.on("sayMyName", () => {
          console.log("my name is jannat Raza");
      });

     

        // first step ; now we call or emit our event by giving any name to our event inside the event
        events.emit("sayMyName")

           // calling or emmiting events with parameters

        events.on("checkMypage", (sc, msg) => {
            
            console.log(`my statuscode is ${sc} and my page is ${msg}`);
          });

     events.emit("checkMypage", 200, "ok");
       

        