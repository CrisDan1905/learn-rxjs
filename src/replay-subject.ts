import { ReplaySubject } from "rxjs";

/** These are similar to common behavor-subjets, but it lets to determinate
 * a buffer (the number of events to be dispatched to future observers)
 * 
 * The second arguments specifies how long it is going to retain on memory 
 * every message dispatched before erase it and forget it
*/
const subject: ReplaySubject<any> = new ReplaySubject(30, 200);

subject.subscribe(
    data => addItem('Observer 1: ' + data),
    err => addItem(err),
    () => addItem('Observer 1 Completed')
)

var i = 1;
var int = setInterval(() => subject.next(i++), 100)

setTimeout(() => {
    const observer2 = subject.subscribe(
        data => addItem('Observer 2: ' + data)
    )
}, 500);

function addItem(val: any) {
    const node = document.createElement('li');
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.querySelector('#output').appendChild(node);
}