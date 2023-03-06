import { from, of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

const numbers$ = of(1,'1',1,3,3,2,2,4,4,5,3,'1');
//This operator only doesnt stop the emit if the before emit is equal than actual
numbers$.pipe(
  distinctUntilChanged()// use the operator ===
).subscribe(console.log);

interface Character{
  name : string;
}

//The difference between the distinct operator and distinctUntilChanged is that distinct does not allow to emit an emit 
//that has already been emitted and distinctUntilChanged does while the previous emit doesnt equal than actual
const characteres:Character[] = [
  {name: 'Megaman'},
  {name: 'X'},
  {name: 'Zero'},
  {name: 'Dr. Willy'},
  {name: 'X'},
  {name: 'Megaman'},
  {name: 'Zero'}
];

from(characteres).pipe(
  distinctUntilChanged((before , actual)=>before.name === actual.name)
).subscribe(console.log);