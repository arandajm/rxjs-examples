//Creates an Observable that emits sequential numbers every specified interval of time
var observable = Rx.Observable.interval(1000)
    // Filter items emitted that satisfy a specified condition. Return only the Even numbers.   
    .filter(value => value % 2 === 0)
    .subscribe({
        next: function(data) {
            console.log(data);
        },
        error: function(err) {
            console.log(err);
        }
    });


// To evit overleak memory    
setTimeout(() => {
    observable.unsubscribe();
}, 20000);