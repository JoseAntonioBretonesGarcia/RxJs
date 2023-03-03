import { Observable } from "rxjs";
import { Observer } from "rxjs/internal/types";


const observer : Observer<any> = {
    next : value => console.log(value),
    error: error => console.error(error),
    complete : () => console.info('Completado')
}

const obs$ = new Observable<string>((subs) => {
  subs.next("Hola Mundo");

  //Forzamos un error para que llegue al suscribe un error
  const a = undefined;
  (a.nombre = "Jose"), subs.complete();
  //El siguiente next nunca llega porque ya se realizó el complete
  subs.next("Hola Mundo 2");
});

//Dos maneras diferentes de mandarle al suscribe la información
obs$.subscribe(observer);
/* obs$.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.error(error),
  complete: () => console.info("Complete"),
}); */
