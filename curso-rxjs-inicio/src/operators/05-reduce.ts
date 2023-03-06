import { interval, reduce, take, tap } from "rxjs";

const numbers = [1,2,3,4,5];

const totalReducer = (acumulator:number , actualValue : number) => acumulator + actualValue;

const total = numbers.reduce(totalReducer, 0);
console.log('total arr' , total);

interval(1000).pipe(
  take(3),
  tap(console.log),
  reduce(totalReducer,0)//if don´t put second parameter, for default will be 0
)
.subscribe({
  next : value => console.log('next:',value),
  complete : () => console.log('Completed')
});