// Create a subject. 
// It's similar to a observable but you decide when emit the event
var subject = new Rx.Subject();

// You can define multiples subscribe()
subject.subscribe({
    next: function(value) {
        console.log(value + ' in subscribe 1');
    },
    error: function(error) {
        console.log(error);
    },
    complete: function() {
        console.log('Complete 1');
    }
});

subject.subscribe({
    next: function(value) {
        console.log(value + ' in subscribe 2');
    }
});

subject.next('A new data piece');
subject.complete();
subject.next('New value');