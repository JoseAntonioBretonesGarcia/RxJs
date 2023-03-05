import { from } from "rxjs";

/* 
  REMINDER:
  of = take arguments and generate a secuence
  from = it use itself with array, promise, iterable, observable
*/

const observer = {
  next : next => console.log('next:',next),
  complete: () => console.log('Completed')
};


//const source$ = from([1,2,3,4,5]);
//const source$ = of(...[1,2,3,4,5]);//with the spread operator the result is same than the result of the previous line with the from function


//Example of how to use fetch with from function and suscribe
//But rxjs has its own ways of working with ajax requests
const source$ = from( fetch('https://api.github.com/users/klerith'))

/* source$.subscribe(async(resp) =>{
  console.log(resp);
  const bodyData = await resp.json();
  console.log(bodyData);

});
 */

const myGenerator = function*(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const myIterator = myGenerator();

/* for( let id of myIterator){
  console.log(id);
} */

//the next line is similar than the previous for but this example has 
//the advantage of to can send a observer for to can to use the data like wants itself
from(myIterator).subscribe(observer);
