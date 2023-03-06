import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";


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
  //This operator is a distinct but directly 
  //compares an object property emitted by observable
  distinctUntilKeyChanged('name')
).subscribe(console.log);