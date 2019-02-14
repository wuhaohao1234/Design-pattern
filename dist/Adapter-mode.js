class Plug {
    getName() {
        return 'plug的字符串';
    }
}
class Target {
    constructor() {
        this.plug = new Plug();
    }
    getName() {
        return this.plug.getName();
    }
}
let target = new Target();
console.log(target.getName());
//# sourceMappingURL=Adapter-mode.js.map