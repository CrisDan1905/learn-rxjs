import { Observable, Observer, Subscription, fromEvent } from "rxjs";

/** Creating an observable from a DOM event. This is an example of what a hot observable is */
const observable = fromEvent(document, 'mousemove');

setTimeout(() => {
    const subscription: Subscription = observable.subscribe(
        (x: any) => addItem(x)
    )
}, 2000);

function addItem(val: any) {
    const node = document.createElement('li');
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.querySelector('#output').appendChild(node);
}