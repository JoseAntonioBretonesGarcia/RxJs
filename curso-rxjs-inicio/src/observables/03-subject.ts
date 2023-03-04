import { Observable, Subject } from "rxjs";
import { Observer } from "rxjs/internal/types";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("Completed"),
};

const intervalo$ = new Observable<number>((subs) => {
  const intervalID = setInterval(() => subs.next(Math.random()), 1000);

  return () => {
    clearInterval(intervalID);
    console.log('Interval destroyed')
  };
});
/*
 ** 1- multiple cast
 ** 2- it is a observer too
 ** 3- Play  Next, error , complete too
 */
const subject$ = new Subject();
const subjectSubscription = intervalo$.subscribe(subject$);

//const subs1 = intervalo$.subscribe(num => console.log('subs1: ',num));
//const subs2 = intervalo$.subscribe(num => console.log('subs2: ',num));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

//IMPORTANT
//When the data is produced for the observable itself, is considered a "Cold Observable"
//But when the data is produced outside the observable it is called "Hot Observable"
setTimeout(() => {
  subject$.next(10); //In this line the data is produced outside the observable because is emit for a subject that itself is subscribed in a observable
  subject$.complete();
  subjectSubscription.unsubscribe();
}, 4000);
