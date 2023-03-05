import { from, fromEvent, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';


/* range(1,10).pipe(
  filter(value => value % 2 === 1)
).subscribe(console.log); */

range(1,10).pipe(
  filter((value,i) => {
    return value % 2 === 1;
  })
)//.subscribe(console.log);


interface Character {
  tipo : string;
  nombre : string;
}

const characteres : Character[] = [
  {
    tipo : 'heroe',
    nombre : 'Batman'
  },
  {
    tipo : 'heroe',
    nombre : 'Robbin'
  },
  {
    tipo : 'villano',
    nombre : 'Joker'
  }
]

from(characteres).pipe(
  filter((character)=>{
    return character.tipo === 'villano';
  })
)//.subscribe(console.log);


const keyUp$ = fromEvent<KeyboardEvent>(document,'keyup').pipe(
  map(event => event.code),
  filter(code => code === 'Enter')
);


keyUp$.subscribe(console.log)
