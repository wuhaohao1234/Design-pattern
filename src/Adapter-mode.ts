type igetName = () => string;
interface Iplug {
    getName: igetName;
}
class Plug {
    getName(): string {
        return 'plug的字符串'
    }
}
type iTargetName = () => string;
interface ITarget {
    plug: Plug;
    getName: iTargetName;
}
class Target {
    public plug: Plug
    constructor() {
        this.plug = new Plug()
    }
    getName(): string {
        return this.plug.getName()
    }
}
let target:Target = new Target()
console.log(target.getName())