import { from } from "rxjs";
import { pluck } from "rxjs/operators";

/** "from" creates quickly an observable from an object given
 *  "pluck" operator lets to emmit only one property of an object originally emmited
*/
    from([
        { first: 'Gary', last: 'Simon', age: '34'},
        { first: 'Jane', last: 'Smith', age: '22'},
        { first: 'John', last: 'Globstein', age: '45'},
    ])
      .pipe(pluck('first'))
      .subscribe((x: any) => addItem(x));


function addItem(val: any) {
    const node = document.createElement('li');
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.querySelector('#output').appendChild(node);
}