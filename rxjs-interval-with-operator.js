// Declaring a observer
var observer = {
        next: function(data) {
            console.log(data);
        }
    }
    //Creates an Observable that emits sequential numbers every specified interval of time
var observable = Rx.Observable.interval(1000)
    // Transform the value that the observable emits    
    .map(value => 'Number ' + value)
    // Emits a value from the source Observable, then ignores subsequent source values for duration milliseconds
    .throttleTime(2000)
    .subscribe(
        observer
    );


// To evit overleak memory    
setTimeout(() => {
    observable.unsubscribe();
}, 20000);