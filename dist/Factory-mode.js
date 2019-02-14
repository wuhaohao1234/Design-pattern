class Man {
    constructor(name) {
        this.name = '';
        this.name = name;
    }
    alertName() {
        console.log(this.name);
    }
}
class Factory {
    createMan(name) {
        return new Man('name');
    }
}
new Factory().createMan('传入的字符串').alertName();
//# sourceMappingURL=Factory-mode.js.map