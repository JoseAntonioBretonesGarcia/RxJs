import { fromEvent } from "rxjs";
import { map, takeWhile, tap } from "rxjs/operators";

const click$ = fromEvent<PointerEvent>(document,'click');

click$.pipe(
    tap<PointerEvent>(console.log),
    map(({x,y}) => ({x,y})),
    //takeWhile(({y}) => y <= 150)
    //the last parameter indicate that it going to emit the last emit 
    //from takewhile wich it will be the value that break the condition
    takeWhile(({y}) => y <= 150, true)
  ).subscribe({
  next : value => console.log('next:',value),
  complete: () => console.log('Completed')
});

