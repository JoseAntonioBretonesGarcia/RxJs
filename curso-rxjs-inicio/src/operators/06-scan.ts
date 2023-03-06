import { from, Observable } from "rxjs";
import { map, reduce, scan } from "rxjs/operators";


const numbers = [1,2,3,4,5];

const totalAcumulator = (acumulator:number , actualValue : number) => acumulator + actualValue;

//Reduce
from(numbers).pipe(
  reduce(totalAcumulator,0)
)
//.subscribe(console.log);

//Scan
from(numbers).pipe(
  scan(totalAcumulator,0)
)
//.subscribe(console.log);

//Redux
interface User {
  id? : string;
  authenticated? : boolean;
  token? : string;
  years?: number;
}

const users: User[] = [
  {id: '1' , authenticated: false , token: null},
  {id: '1' , authenticated: true , token: 'ABC'},
  {id: '1' , authenticated: true , token: 'ABC123'}
]  

const state$ : Observable<User> = from(users).pipe(
  scan<User>((acc : User,cur : User)=>{
    return {...acc,...cur}
  }),
  map(user =>{
    user.years = 33;
    return user;
  })
);

const id$ = state$.pipe(
  map(state => state.id)
)

id$.subscribe(console.log);