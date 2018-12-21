import { Observable, Observer, Subscription } from "rxjs";
import { share } from 'rxjs/operators';

const observable = Observable.create(function subscribe(observer: Observer<any>) {
    try {
        observer.next('Hi there! :)');
        observer.next('How are you?');
        setInterval(() => {
            observer.next('I am good')
        }, 2000);
        // observer.complete(); this line completed the sending and no other message will be sent after it 
        // observer.next('This will not be sent');
    } catch(err) {
        observer.error(err);
    }
}).pipe(share()); // The share() operator converts the observable from "cold" to "hot"

/* Anytime I subscribe, I'm creating an "observer" */
const observer: Subscription = observable.subscribe(
    (x: any) => addItem(x),
    (error: any) => addItem(error),
    (completed: any) => addItem("It's completed")
);

/*
const observer2: Subscription = observable.subscribe(
    (x: any) => addItem(x)
);
*/

/** This means that when "observer" is unsubscribed, "observer2" will too */
/*
observer.add(observer2);
*/

/** When I "unsubscribe" I'm cancellating the subscription to the observable */
/*
setTimeout(() => {
    observer.unsubscribe();
}, 6001);
*/

setTimeout(()=> {
    const observer2 = observable.subscribe(
        (x: any) => addItem('Subscriber 2: ' + x)
    );
}, 1000)

function addItem(val: any) {
    const node = document.createElement('li');
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.querySelector('#output').appendChild(node);
}