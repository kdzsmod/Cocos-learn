import { UIstate } from "../UIstate";

const {ccclass,property} = cc._decorator;

@ccclass
export class action2 extends UIstate{

    constructor(){
        super();
    }
    
    state(){
        console.debug("state2");
    }
    action(){

        console.debug("action2");
    }

}
