import { Service } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Service()
export class Userservice {
    courceDuration$=new BehaviorSubject('2 months');//when we creating behaviorSubject we are initializing a value

    //if when you emit the value in subject if the component whereevar we are subscribing loaded then only will be able to recive the value if the component will be load after some time we wont get the updated value 
    //But incase of behavior  subjet it track the value of data and it will give the exact result load the componet or not it will give the exact data 
    constructor(){
        // this.courceDuration$.next('3 months need')
    }

    
}
