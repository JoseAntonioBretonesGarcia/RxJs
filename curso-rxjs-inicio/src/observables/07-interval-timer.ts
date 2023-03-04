import { interval, timer } from 'rxjs';

const observer = {
    next : value => console.log('next:',value),
    complete : () => console.log('Completed')
}

const hoyEn5seconds = new Date();
hoyEn5seconds.setSeconds( hoyEn5seconds.getSeconds() + 5 );

const interval$ = interval(1000);

//const timer$ = timer(2000);

//const timer$ = timer(2000,1000);// this timer function start to emit in two second and continues to issue each one second


const timer$ = timer(hoyEn5seconds);
console.log('Init');
//interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('Final');

