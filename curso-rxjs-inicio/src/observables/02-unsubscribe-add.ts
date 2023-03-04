import { Observable } from "rxjs";
import { Observer } from "rxjs/internal/types";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("Completed"),
};

const intervalo$ = new Observable<number>((suscriber) => {
  // Create a counter 1,2,3,4,5...
  let count = 0;

  const interval = setInterval(() => {
    // every second
    count++;
    suscriber.next(count);
  }, 1000);

  setTimeout(() => {
    suscriber.complete();
  }, 2500);

  return () => {
    clearInterval(interval), console.log("Interval destroyed");
  };
});

//Same subscription but different ways of doing this
const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);

//with the next line code if I unsubscribe the first subscription 'subs1', I unsubscribe of the second subscription too
//but only first complete funciton will play, is unique diferently of to have each subscription whit it unsubscribe
//or to link several subscription for only play one unsubscribe function
subs1.add(subs2);

setTimeout(() => {
  subs1.unsubscribe();
 /*  subs2.unsubscribe(); */
  console.log("Timeout completed");
},6000);
