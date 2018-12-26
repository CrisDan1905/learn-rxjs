import { Observable, Observer, merge } from "rxjs";

const observable: Observable<any> = Observable.create((observer: Observer<any>) => {
    observer.next('Hey guys!');
});

const observable2: Observable<any> = Observable.create((observer: Observer<any>) => {
    observer.next('What\'s up?!');
});


/** It merges the observables passed as arguments into only one. The "complete"
 * callback will not be fired at subscription time untill all the mergeable observables
 * call the complete methode
*/
var newObs = merge(observable, observable2);

newObs.subscribe(
    data => addItem('newObs: ' + data),
    err => addItem(err),
    () => addItem('newObs Completed')
);


function addItem(val: any) {
    const node = document.createElement('li');
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.querySelector('#output').appendChild(node);
}