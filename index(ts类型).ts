/*
TS 中的数据数据类型
    布尔类型(boolean)
    数字类型(number)
    字符串类型(string)
    数组类型(array)
    元祖类型(tuple)
    美剧类型(enum)

    任意类型(any)
    null 和 undefined
    void 类型
    never 类型
*/ 

// let str:string = '你好 ts'

// let str1:string = '你好 4564fsgdh'



// 数组类型（array） ts中定义数组有两种方式
    // es5 var arr = [1, '12314', false]

    // // 1.第一种定义数组的方式
        let arr:number[] = [1,2,3,434,5]
        
        let arr1:string[] = ['12', '22']

    // // 2.第二种定义数组的方式
        let arr2:Array<number> = [11, 22, 33, 44, 55]

        // console.log(arr2)

    // 3.第二种定义数组的方式
        var arr3:any[] = ['12314', 123, false]

        console.log(arr3)

// 元祖类型（tuple） 属于数组的一种

    // let arr3:[string, number, boolean] = ['ts', 3, true]


// 枚举类型 （enum）

    // enum Flag {success=1, error=-1}
    // var f:Flag = Flag.error
    // console.log(f)

    // enum Color {red, blue=5, orange}
    // var c:Color = Color.orange
    // console.log(c) // 输出 1

// 任意类型（any）
    // var num:any = 123
    // num = '123'
    // num = true

    // console.log(num)

    // // 任意类型的用处
    // var oBox:any = document.getElementById('box')

    // oBox.style.color = 'blue'


// var num:number;

// console.log(num) // 输出： undefined  报错


// var num:undefined | number
// // num = 123
// console.log(num)

// var num:null
// num = 2
// console.log(num)


var num:number | null | undefined 
num = 124
console.log(num)


// void类型： typescript 中的 void 代表没有任何类型，一般用于定义方法的时候没有返回值

    // function run():number {
    //     console.log('run')
    //     return 1
    // }
    // run()

// never 类型: 是其他类型 （包括 null 和 undefined） 的子类型， 代表从不出现的值
// 这意味着声明 never 的变量智能被 never 类型所赋值

    var a:never
    // a= 123
    a = (() => {
        throw new Error('错误')
    })()


