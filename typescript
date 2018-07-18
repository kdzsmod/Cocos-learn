1. 基本类型：
数字: let a:number = 1  
字符串: let a:string = "bob"
数组: let list:Array<number> = [1,2,3];
元组（Tuple相当于map）: let x:[string, number];x[0]
枚举类型:enum Color{Red = 1,Green = 2,Blue = 4}

Any类型有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 
这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 
这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量：
let notSure:any = 4;
Any[]
还有any类型的数组
let list:any[] = [1,true,"free"];
list[1] = 100;

类型断言=》就是告诉编译器当前数据的类型

let someValue:any = "this is a string";

let strLength:number = (<string>someValue).lenght;
let strLength:number = (someValue as string).lenght;


2.变量声明：var关键字


3.接口

关键字interface定义接口，implements实现接口

interface ClockInterface{
    currentTime:Date;
}
class clock implements ClockInterface{
    currentTime:Date;
    constructor(h:number,m:number){ }
}

以上为接口-接口实现解释


4.抽象类---实现抽象类
 controller ----->impcontroller
 
  abstract class controller -----抽象类
 {
    protected edge:number;  //相当于实例化后的编号
    constructor(edge:number){  // 构造函数
    this.edge = edge; // 设置编号
    }
    getadge():number{
      return this.edhe;
    }
    abstract getX():number; // 和接口不一样，必须实现
 }
  
  class impcontroller extent controller -- 实现抽象类
{
     private controllerX:number;
     private controllerY:number;
     constructor(x:number,y:number)
     {
        super(3);  // 必须显示的调用父类的构造函数,基于抽象类的实现。
        this.controllerX = x;
        this.controllerY = y;
     }
     
     getX()
     {
      return this.controllerX;
     }
     getY()
     {
       return this.controllerY;
     }
   
}

