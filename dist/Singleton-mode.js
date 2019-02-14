class SignLeton {
    constructor() {
        this.getInstance = (function () {
            let instance;
            return function () {
                if (!instance) {
                    instance = new SignLeton();
                }
                return instance;
            };
        })();
    }
}
let signLeton = new SignLeton();
let s1 = signLeton.getInstance();
let s2 = signLeton.getInstance();
console.log(s1 === s2);
//# sourceMappingURL=Singleton-mode.js.map