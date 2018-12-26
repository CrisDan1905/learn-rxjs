import { Observable, Subject, interval } from "rxjs";
import { skipUntil } from "rxjs/operators";

/** It will emmit only the last message before the "complete" 
 * has been called on the subject. If no "complete" methode is called,
 * nothing will be emmited
*/
const observable1: Observable<any> = Observable.create((data: any) => {
    var i = 1;
    setInterval(() => {
        data.next(i++);
    }, 1000)
});

const observable2 = new Subject;

setTimeout(() => {
    observable2.next('Hey!')
}, 3000);

/** "skipUntil" won't let the first subscribe to emmit until the argumented one 
 * starts to 
 */
const newObs = observable1.pipe(skipUntil(observable2));

newObs.subscribe((x: any) => addItem(x));


function addItem(val: any) {
    const node = document.createElement('li');
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.querySelector('#output').appendChild(node);
}