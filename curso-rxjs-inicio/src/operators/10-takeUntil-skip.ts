import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

const button = document.createElement('button');
button.innerHTML = 'Stop Timer';
document.querySelector('body').append(button);

const counter$ = interval(1000);

//const clickBtn$ = fromEvent(button , 'click');
const clickBtn$ = fromEvent(button , 'click').pipe(
  tap(() => console.log('Before skip')),
  skip(1),//With this function, the first emit will be omitted and the next line too
  tap(() => console.log('After skip')),
);


counter$.pipe(

//When the observable 'clickBtn$' emit anything, the observable counter$ will be completed
takeUntil(clickBtn$)

)

.subscribe({
  next : value => console.log('next:',value),
  complete: () => console.log('Completed')
})
