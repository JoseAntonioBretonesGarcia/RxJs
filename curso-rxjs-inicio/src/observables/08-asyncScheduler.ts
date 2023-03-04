import { asyncScheduler } from 'rxjs';


const saludar = () => console.log('Hello World');
const saludar2 = nombre => console.log(`Hello ${nombre}`);

/* asyncScheduler.schedule(saludar);
asyncScheduler.schedule(saludar2,2000,'Jose'); */

const subs = asyncScheduler.schedule(function(state:number){

  console.log('state' , state);
  this.schedule(state+1,1000);

},3000,0);

// setTimeout works same that the function of line 23 only that 
// normally the setTimeout is easier of understand than other function
setTimeout(() => {
  subs.unsubscribe();
}, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(),6000);