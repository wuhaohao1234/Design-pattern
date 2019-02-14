/**
 * 工厂模式
 */ 
type ialertName = () => void;
type icreateMan = (name:string) => object;
interface IMan {
    name: string;
    alertName: ialertName;
}
interface IFactory {
    createMan:icreateMan;
}
class Man implements IMan {
    public name = ''
    constructor (name:string) {
        this.name = name
    }
    /**
     * 用于弹出Man中的name
     */ 
    public alertName(): void {
        console.log(this.name)
    }
}
class Factory implements IFactory {
    /**
     * createMan创建并返回一个Man的对象
     */
    public createMan(name:string) {
        return new Man('name')
    }
}
new Factory().createMan('传入的字符串').alertName();
