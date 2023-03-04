import { fromEvent } from "rxjs";


/* Events from DOM */

const src1$ = fromEvent<MouseEvent>(document , 'click');

//Here I catch the MouseEvent for paint the properties x and y
src1$.subscribe(event =>{
    console.log(event.x);
    console.log(event.y);
});

//Here I catch for parameter directly the properties that I need in this case for paint in console
src1$.subscribe(({x,y}) =>{
  console.log(x);
  console.log(y);
});


//Two diferents forms but same final way