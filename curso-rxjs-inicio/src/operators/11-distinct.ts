import { from, of } from "rxjs";
import { distinct } from "rxjs/operators";

const numbers$ = of(1,1,1,3,3,2,2,4,4,5,3,1);

numbers$.pipe(
  distinct()// use the operator ===
).subscribe(console.log);

interface Character{
  nombre : string;
}

const characteres:Character[] = [
  {nombre: 'Megaman'},
  {nombre: 'X'},
  {nombre: 'Zero'},
  {nombre: 'Dr. Willy'},
  {nombre: 'X'},
  {nombre: 'Megaman'},
  {nombre: 'Zero'}
];

from(characteres).pipe(
  distinct(character => character.nombre)
).subscribe(console.log);