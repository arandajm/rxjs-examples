// Declaring a observer and its three methods
var observer = {
    next: function(data) {
        console.log(data);
    },
    error: function(err) {
        console.log(err)
    },
    complete: () => { console.log('complete') }
}

var subscription = Rx.Observable.create(obs => {
        obs.next('A value 1');
        // After an error or complete invocation, the observable is stop! 
        //obs.error('Error!!');
        //obs.complete();
        // async function
        setTimeout(() => {
            obs.next('A value 2');
        }, 2000);
        obs.next('A value 3');

    })
    // To react to an event, we use subscribe() who receive a observer as a param
    .subscribe(
        observer
    );


setTimeout(() => {
    // evit overleak memory
    subscription.unsubscribe();
}, 5000);