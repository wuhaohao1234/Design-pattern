/**
 * 类装饰器
 * type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void
 * 属性装饰器
 * type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
 * 方法装饰器
 * type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
 * 参数装饰器
 * type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;
 */ 
// 类装饰器,只有一个参数target，target的原型上有class的方法与属性
// class Fun {
//     add(x:number,y:number):number {
//         return x + y
//     }
// }
// function del(target:any) {
//     target.prototype.add = function (x:number,y:number):number {
//         console.log(x - y);
//         return x - y
//     }
// }
// @del
// class DelFun extends Fun {}

// let s0:number = new DelFun().add(4,2)
// console.log(s0)
// 属性装饰器

// function enumerable(value: boolean) {
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         descriptor.enumerable = value
//     };
// }

// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }

//     @enumerable(false)
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }
// let get = new Greeter('字符串')