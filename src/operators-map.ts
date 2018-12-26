import { Observable, Observer } from "rxjs";
import { map } from "rxjs/operators";

/** "map" lets to transform every emmited value and send it back
 * (Similar to "map" function in arrays)
*/
Observable.create((observer: Observer<any>) => {
    observer.next('Hey guys!');
})
  .pipe(map((val: any) => val.toUpperCase()))
  .subscribe(
    (data: any) => addItem('mapped observable: ' + data),
    (err: any) => addItem(err),
    () => addItem('newObs Completed')
);


function addItem(val: any) {
    const node = document.createElement('li');
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.querySelector('#output').appendChild(node);
}