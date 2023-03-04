import { of } from "rxjs";

//the next comment is an example of how iterate elements from an array whith the spread operator '...'
//of(...[1, 2, 3, 4, 5, 6]) this is same than de next 'of' function
of(1, 2, 3, 4, 5, 6).subscribe({
  next: (next) => console.log("next: ", next),
  complete: () => console.info("Secuence finished"),
});
