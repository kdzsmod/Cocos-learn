import { UIstate } from "../UIstate";

const {ccclass,property} = cc._decorator;

export class action1 extends UIstate{

    constructor(){
        super();
    }
    
    state(){
        console.debug("state1");
    }
    action(){
        console.debug("action1");
    }

}
