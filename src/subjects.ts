import { Subject } from "rxjs";

/** Creating a subject. Subjects are both observables and observers */
const subject: Subject<any> = new Subject();

subject.subscribe(
    data => addItem('Observer 1: ' + data),
    err => addItem(err),
    () => addItem('Observer 1 Completed')
)

subject.next('The first message has been sent');

const observer2 = subject.subscribe(
    data => addItem('Objserver 2: ' + data)
);

subject.next('The second message has been sent');
subject.next('The third message has been sent');

observer2.unsubscribe();

subject.next('A final message has been sent');

function addItem(val: any) {
    const node = document.createElement('li');
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.querySelector('#output').appendChild(node);
}