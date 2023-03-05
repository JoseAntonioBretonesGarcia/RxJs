import { range } from "rxjs";
import { map, tap } from "rxjs/operators";

const number$ = range(1, 5);

number$
  .pipe(
    tap(value => console.log('before:',value)),
    map(value=> value*10),
    tap({
      next : value => console.log('after:',value),
      complete : () => console.log('All is over')
    })
    
  ).subscribe((value) => console.log("subs:", value));
