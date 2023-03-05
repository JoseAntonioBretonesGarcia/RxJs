import { fromEvent, range } from "rxjs";
import { map } from "rxjs/operators";

range(1,5).pipe(
  map<number,number>(x => x * 10)
).subscribe(console.log);


const keyUp$ = fromEvent<KeyboardEvent>(document,'keyup');

const keyUpMap = keyUp$.pipe(
  map(value => value.code)
);


keyUp$.subscribe(code => console.log(code));
