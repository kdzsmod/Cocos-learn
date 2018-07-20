import { UIstate } from "../UIstate";

const {ccclass,property} = cc._decorator;

@ccclass
export class action0 extends UIstate{

    constructor(){
        super();
    }
    state(){
        console.debug("State0");
    }
    action(){
        console.debug("Action0");
    }

}
