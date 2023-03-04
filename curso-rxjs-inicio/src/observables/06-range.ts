import { asyncScheduler, observeOn, range } from 'rxjs';


//the next range function is synchronized, will paint the console logs in normal order
const src1$ = range(1,5);//it is same that the next: const src$ = of(1,2,3,4,5);
console.log('Init');
src1$.subscribe(console.log);
console.log('Final');
//the next range function is asynchronized, will paint the console logs of asynchronized form
const src2$ = range(1,5).pipe(observeOn(asyncScheduler));
console.log('Init');
src2$.subscribe(console.log);
console.log('Final');


