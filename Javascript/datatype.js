//2. Write a program to find the datatypes of a variable?

/* NUMBERS */
var x = 5
console.log(typeof x)

var name = "suresh"
console.log(typeof name)

var name_sakthi = "Sai"
console.log(typeof name_sakthi)

var name$sakthi = "thenu"
console.log(typeof name$sakthi)

var name9Sakthi = "ramesh"
console.log(typeof name9sakthi)

var y = 1.2
console.log(typeof y)

var z = -21
console.log(typeof z)

var a = "7i" + 2
console.log(typeof a)

/*It shows an error
var a1 = 7i + 2
console.log(typeof a1)*/


var a2 =  2 + "71"
console.log(typeof a2)

var b = "10e^-2"
console.log(typeof b)

var b1 = 10**2
console.log(typeof b1)

var c = 0
console.log(typeof c)

var d = {}
console.log(typeof d)

var e = []
console.log(typeof e)

/*var f = ()
console.log(typeof f)*/

/*var g = [!, @, #, $, %, ^, &, *, ~, `, ', ", "", '', :, ;, /, ?, <, >,.]
console.log(typeof g[0])*/

var g1 = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "`"]
console.log(typeof g1[1])

var g2 = ["", '']
console.log(typeof g2[0])
console.log(typeof g2[1])

var g3 = ["'", ":", ";", "/", "?", "<", ">","."]
console.log(typeof g3[0])

/*var g@4 = [""]
console.log(typeof g@4[0])*/

var g5 = +y
console.log(typeof g5)

var g6 = y+
console.log(typeof g6)

var g7 = -x
console.log(typeof g7)

var g8 = x-
console.log(typeof g8)

/*var g9 = *a
console.log(typeof g9)*/

var g10 = a*
console.log(typeof g10)

/*var g11 = /a
console.log(typeof g11)*/

var g12 = a/
console.log(typeof g12)

/* STRING */

var name = "Sakthi"
console.log(typeof name)

var name1 = 'Suresh'
console.log(typeof name1)

var str = 1 / "one"
console.log(typeof str)
 
var str1 = true
console.log(typeof str1)

var str11 = "true"
console.log(typeof str11)

var str2 = null
console.log(typeof str2)

var str3 = "null"
console.log(typeof str3)

var str4 = undefined
console.log(typeof str4)

typeof function() {}
//answer 'function'


typeof new Boolean(true)
// object

typeof new number(1)
// object

typeof new string('abc')
// object

typeof new Date()
// object

typeof /regex/
// object

typeof {a: 1}
typeof [1,2,4]
// object


typeof declaredButUndefinedVar

// undefined

typeof Symbol()
typeof Symbol('foo')
typeof Symbol.iterator
//symbol

typeof Boolean(1)
typeof !!(1)
// boolean


typeof (typeof 1)
// string


typeof NaN
typeof Number('shoe')
typeof math.LN2
typeof Infinity
// number


typeof 42n
//Bigint
