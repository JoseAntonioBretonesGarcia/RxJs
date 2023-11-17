import { debounceTime, distinctUntilChanged, fromEvent, map } from "rxjs";

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<any>(input,'keyup');

input$.pipe(
  debounceTime(1000),
  map(event => event.target.value),
  distinctUntilChanged()
)
.subscribe(console.log);
