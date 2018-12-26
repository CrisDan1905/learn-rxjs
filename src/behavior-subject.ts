import { BehaviorSubject } from "rxjs";

/** These are similar to common subjets, but the subscriptions will receive
 * the last value emmited by the subject before the subscription.
 * 
 * *** IT NEEDS AN INITIAL VALUE ***
*/
const subject: BehaviorSubject<any> = new BehaviorSubject('First');

subject.subscribe(
    data => addItem('Observer 1: ' + data),
    err => addItem(err),
    () => addItem('Observer 1 Completed')
)

subject.next('The first message has been sent');
subject.next('Observer 2 is about to subscribe...');

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