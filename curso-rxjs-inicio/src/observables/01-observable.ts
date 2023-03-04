import { Observable } from "rxjs";
import { Observer } from "rxjs/internal/types";


const observer : Observer<any> = {
    next : value => console.log(value),
    error: error => console.warn(error),
    complete : () => console.info('Completed')
}

const obs$ = new Observable<string>((subs) => {
  subs.next("Hello World");

  //I force it an error for to see the error function from my observable
  const a = undefined;
  (a.nombre = "Jose"), subs.complete();
  //the next line code never play because the complete function played already
  subs.next("Hello World 2");
});

//two diferents cases about how to send the data at my suscribe
obs$.subscribe(observer);
/* obs$.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.warn(error),
  complete: () => console.info("Completed"),
}); */
