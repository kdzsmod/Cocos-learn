import { advance } from "./advance";
import { action0 } from "./UIState/state/action0";
import { action1 } from "./UIState/state/action1";
import { action2 } from "./UIState/state/action2";

const {ccclass,property} = cc._decorator

@ccclass
class controller extends advance{

    _action0:action0;
    _action1:action1;
    _action2:action2;
    myOnload(){
        this._action0 = new action0();
        this._action1 = new action1();
        this._action2 = new action2();
        console.debug("myOnload");
    }
    myStart(){
        this._action0.state();
        this._action0.action();
        this._action1.state();
        this._action1.action();
        this._action2.state();
        this._action2.action();
        console.debug("myStart");
    }
    myupdate(){
        console.debug("myupdate");
    }

}