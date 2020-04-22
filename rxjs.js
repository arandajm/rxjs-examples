var button = document.querySelector("button");

// Creates an Observable that emits events of a specific type coming from the given event target.
Rx.Observable.fromEvent(button, 'click')
    // Emits a value from the source Observable, then ignores subsequent source values for duration milliseconds
    .throttleTime(1000)
    // Manipulate data to return only the clientY coordinate
    .map((data) => data.clientY)
    // To react to an event, we use subscribe() who receive a observer as a param
    .subscribe(
        // next()
        coordinate => { console.log(coordinate) },
        // error()
        e => { console.log(e) },
        // complete()
        () => { console.log('complete') }
    );