import { fromEvent } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';


//Example where only the first event wich has de property clientY >=150
//can suscribe

const click$ = fromEvent<PointerEvent >(document,'click');

click$.pipe(
  tap<PointerEvent>(() => console.log('tap')),
  
  //Here in the map function I use the only property that need itself
  map(({clientY}) => ({clientY})),
  first(event => event.clientY >= 150)

).subscribe({
  next: value => console.log('next:',value),
  complete: () => console.log('Completed')
});
