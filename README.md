# Cocos-learn

重点了解注解的形式。 因为该工作是Cocos+typescript的开发工作

1.Decorators（装饰器）

修饰器工厂：自定义装饰器的声明，写一个装饰器工厂函数，返回一个表达式，以供修饰器在运行时调用。
eg:function color(value:string){ // 这是一个修饰器工厂
      return function(target){ // 这是一个修饰器
      // do something with "target" and "value"...
      }
}
装饰器组合
多个装饰器可以同时应用到一个声明上，就像下面的示例：

写在同一行上：

@f @g x
写在多行上：
@f
@g
x

1.1 方法修饰器
1. 对于静态成员来说就是类的构造函数，对于实例成员是类的原型对象。
2. 成员的名字。
3. 成员的属性描述符。
定义@enumerable修饰器：
function enumerable(value:boolean){
return funciton(target:any,propertyKey:string,descriptor:PropertyDescriptor){
  descriptor.enumerable = value;
};
}

1.2 访问修饰器
定义@configureable装饰器
function configurable(value:boolean){
  return function(target:any,propertyKey:string,descriptor:PropertyDescriptor){
   descriptor.configurable = value;
  };
}

1.3 属性修饰器


1.4 参数修饰器

