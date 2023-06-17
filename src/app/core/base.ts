import { Globals } from "./global";
export class Base{
    current = Globals.current;
    log(message?: any){
        console.log(message);
    }
    
}