type igetInstance = ()=>object
interface ISignLeton {
    getInstance:igetInstance
}
class SignLeton implements ISignLeton {
    public getInstance = (function(){
        let instance:object;
        return function () {
            if(!instance) {
                instance = new SignLeton()
            }
            return instance
        }
    })()
}

let signLeton:SignLeton = new SignLeton()
let s1:object = signLeton.getInstance()
let s2:object = signLeton.getInstance()
console.log(s1 === s2);