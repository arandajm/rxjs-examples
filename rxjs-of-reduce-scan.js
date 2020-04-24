// Converts the arguments to an observable sequence
Rx.Observable.of(1, 2, 3, 4, 5)
    // Reduce de sequence to a accumulator value of each position, with initial value 0.
    .reduce((total, currentValue) => total + currentValue, 0)

// Applies an accumulator function over the source Observable, and returns each intermediate result
// .scan((total, currentValue) => total + currentValue, 0)
.subscribe(
    (v) => {
        console.log(v);
    },
    (e) => {
        console.log(e);
    },
    () => {
        console.log("complete");
    }
);