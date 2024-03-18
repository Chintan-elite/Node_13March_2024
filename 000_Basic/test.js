// console.log("Hello")

// a = 10;
// b = "abcd"
// c = 10.33
// d = true

// console.log(typeof(a));
// console.log(typeof(b));

// st = {
//     id : 10,
//     name:"tops",
//     email : "tops@gmail.com"
// }   

// console.log(st.name);



a = [10,20,30,30,40,50,60]

// console.log(a[0]);

// for(var i=0;i<6;i++)
// {
//     console.log(a[i]);
// }

// var k = a.find(ele =>{
//     return ele == 30
// })

// var k = a.filter(ele =>{
//     return ele == 30
// })

// console.log(k);


// function add(a,b)
// {
//     console.log((a+b));
// }

// const add = (a,b)=>{
//     console.log(a+b);
// }

// sq = (a)=>{
//     return a*a
// }

// add(10,20)

// console.log(sq(20));

// var str = "sun rises in east";

// console.log(str.length);
// console.log(str.charAt(5));
// console.log(str.endsWith('st1'));
// console.log(str.indexOf('i'));
// console.log(str.split("i"));
// console.log(str.startsWith('s'));
// console.log(str.substring(5,8));


class Student 
{

    constructor(a)
    {
        console.log("constructor calling"+a);
    }

    hello()
    {
        console.log("Hello functinon calling");
    }

    add(a,b)
    {
        console.log(a+b);
    }

    square(a)
    {
        return a*a
    }

}

// var s1 = new Student(10)
// s1.hello()
// s1.add(10,20)
// var sq = s1.square(10)
// console.log(sq);


var d = new Date()

// console.log(d);
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getFullYear());
// console.log(d.getSeconds());

// console.log(Math.PI);
// console.log(Math.round(10.56));
// console.log(Math.ceil(10.23));
// console.log(Math.floor(10.56));

// st = {
//     name : "Tops",
//     email : "tops@gmail.com",
//     pass : "pass123"
// }

// console.log(st.name);

// str =  JSON.stringify(st)
// console.log(str);

// strl =  JSON.parse(str)
// console.log(strl);