import { AsyncSubject } from "rxjs";

/** It will emmit only the last message before the "complete" 
 * has been called on the subject. If no "complete" methode is called,
 * nothing will be emmited
*/
const subject: AsyncSubject<any> = new AsyncSubject();

subject.subscribe(
    data => addItem('Observer 1: ' + data),
    err => addItem(err),
    () => addItem('Observer 1 Completed')
);

var i = 1;
var int = setInterval(() => subject.next(i++), 100)

setTimeout(() => {
    const observer2 = subject.subscribe(
        data => addItem('Observer 2: ' + data)
    );
    subject.complete();
}, 500);

function addItem(val: any) {
    const node = document.createElement('li');
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.querySelector('#output').appendChild(node);
}