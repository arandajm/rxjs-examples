var input = document.querySelector("input");

// Creates an Observable that emits events of a specific type coming from the given event target.
Rx.Observable.fromEvent(input, "input")
    // Use map operator to get the value before to apply others operators to use only the right value.
    .map((event) => event.target.value)
    // Emits a value from the source Observable only after a particular time. The value is emitted if nothing happends in this time.
    .debounceTime(1000)
    // Filter vales that are equals to the lastone.
    .distinctUntilChanged()
    .subscribe(
        // next()
        (value) => {
            console.log(value);
        },
        // error()
        (e) => {
            console.log(e);
        },
        // complete()
        () => {
            console.log("complete");
        }
    );