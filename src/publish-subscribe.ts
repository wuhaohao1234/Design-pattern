interface Ioptions {
    el: string;
    data?: {
        [index: string]: any;
    }
    methods?: {
        [index: string]: Function;
    };
}
class Vue {
    public el: HTMLElement;
    public data: any;
    public methods: any;
    constructor(options: Ioptions) {
        this.el = document.querySelector(options.el)
        this.data = options.data
        this.methods = options.methods
        this.observe(this.data)
        this.publish()
    }
    observe(data:any) {
        let key:string
        for(key in data) {
            if (Object.prototype.toString.call(data[key]) === '[object Object]') {
                this.observe(data[key])
            }
            let value = data[key]
            let _this = this
            Object.defineProperty(data,key,{
                get:function () {
                    _this.render(_this.el.querySelector('span'),value)
                    return value
                },
                set:function (newValue:any) {
                    value = newValue
                    return value
                }
            })
        }
    }
    render(ele:HTMLElement,data:any) {
        ele.innerHTML = data
    }
    publish() {
        let btn = this.el.querySelector('button')
        console.log(this.data.msg)
        btn.addEventListener('click',()=>{
            this.data.msg ++
        })
    }
}