// // // // let a = [ 34,45,56,67,78,89,90,1000 ]
// // // // console.log(a);

// // // //subarray
// // // //slice = non mutates

// // // // console.log( a.slice(3) );
// // // // console.log(a);
// // // // console.log( a.slice(5) );
// // // // console.log(a);
// // // // console.log( a.slice(2,6) );// sstart = 2;  end = 6-1 = 5 
// // // // console.log(a);
// // // // console.log( a.slice(1,4) );// sstart = 1;  end = 4-1 = 3 
// // // // console.log(a);

// // // // let a = [ 34,45,56,67,78,89,90,1000 ]
// // // // console.log(a);

// // // //splice =  mutates

// // // // console.log( a.splice( 4 ) );
// // // // console.log(a);
// // // // console.log( a.splice( 2 ) );
// // // // console.log(a);
// // // // console.log( a.splice( 2, 3 ) );// start = 2; legth = 3
// // // // console.log(a);
// // // // console.log( a.splice( 1, 5 ) );// start = 1; legth = 5
// // // // console.log(a);
// // // // console.log( a.splice( 2, 3, 'Danish' ) );// start = 2; legth = 3
// // // // console.log(a);
// // // // console.log( a.splice( 2, 3, ['a','b'] ) );// start = 2; legth = 3
// // // // console.log(a);

// // // //--------------------------

// // // // let o = {
// // // //     //key: value           1pair = 1 property
// // // //     name:'Pizzeria Romania',
// // // //     locatedAt:'24/A Hazelwood Street',
// // // //     seats:43,
// // // //     parkingSpace:true,
// // // //     menu:['Pizza','Coke'],
// // // //     timings:{
// // // //         mon:{open:10, close:20},
// // // //         tue:{open:11, close:21},
// // // //         wed:{open:12, close:22}
// // // //     }
// // // // }
// // // // console.log(o);
// // // //dot 
// // // // console.log(o.locatedAt);
// // // // console.log(o.menu);
// // // // console.log(o.timings.mon.open);


// // // //bracket
// // // // console.log(o["name"]);
// // // // console.log(o['seats']);
// // // // console.log(o['timings']['tue']['open']);

// // // //destructure--------------------

// // // let o = {
// // //     //key: value           1pair = 1 property
// // //     name:'Pizzeria Romania',
// // //     locatedAt:'24/A Hazelwood Street',
// // //     seats:43,
// // //     parkingSpace:true,
// // //     menu:['Pizza','Coke'],
// // //     timings:{
// // //         mon:{open:10, close:20},
// // //         tue:{open:11, close:21},
// // //         wed:{open:12, close:22}
// // //     }
// // // }
// // // console.log(o);

// // // // let { parkingSpace,seats } = o
// // // // console.log(seats, parkingSpace);

// // // let {timings:{wed:{close}}} = o

// // // // console.log(timings);
// // // // console.log(wed);
// // // console.log(close);

// // //------------

// // let o = {
// //     //key: value           1pair = 1 property
// //     name:'Pizzeria Romania',
// //     locatedAt:'24/A Hazelwood Street',
// //     seats:43,
// //     parkingSpace:true,
// //     menu:['Pizza','Coke'],
// //     timings:{
// //         mon:{open:10, close:20},
// //         tue:{open:11, close:21},
// //         wed:{open:12, close:22}
// //     }
// // }
// // console.log(o);
// // console.log(Object.keys(o));
// // console.log(Object.values(o));
// // console.log(Object.entries(o));

// //---------- methods = functions

// var age = 99

// // let a = {
// //     name:'Robin',
// //     age:24,
// //     calcSalary(){
// //         return this.age * 1000;
// //     }
// // }
// // console.log(a);
// // // console.log(a.age);
// // // console.log(a.calcSalary);
// // console.log(a.calcSalary());

// // let b = {
// //     name:'Sonam',
// //     age:44,
// //     calcSalary(){
// //         return this.age * 1000;
// //     }
// // }
// // console.log(b);
// // console.log(b.calcSalary());

// //---------------------


// let a = {
//     name:'Robin',
//     age:24
// }
// console.log(a);

// let b = {
//     name:'Sonam',
//     age:44
// }
// console.log(b);


// let calcSalary = function(para){
//     return ` ${this.name} earned ${this.age*1000} in ${para} years `;
// }
// console.log(calcSalary);

// //call
// // let x = calcSalary.call(a, 10)
// // console.log(x);
// // let y = calcSalary.call(b, 7)
// // console.log(y);

// //apply
// let x = calcSalary.apply(a, [10])
// console.log(x);
// let y = calcSalary.apply(b, [4])
// console.log(y);

//----------- optional chaining -------------------

// let a = {
//     name:'Robin',
//     homeaddress:{country:'India'},
//     skills:['Communication','Analytical'],
//     greet(){
//         return  `Hello i am  ${this.name} , Good Morning To all`
//     }
    
// }
// console.log(a);

// console.log(a.name);
// console.log(a.myname);
// console.log('----------------');
// console.log(a.homeaddress?.country);
// console.log(a.myhomeaddress?.country);
// console.log('----------------');
// console.log(a.skills?.[1]);
// console.log(a.myskills?.[1]);
// console.log('----------------');
// console.log(a.greet?.());
// console.log(a.great?.());

//---------nullish operator ??


let a = {
    name:'Robin',
    homeaddress:{country:'India'},
    skills:['Communication','Analytical'],
    greet(){
        return  `Hello i am  ${this.name} , Good Morning To all`
    }
    
}

console.log(a);

console.log(a.name ?? 'Not Found');
console.log(a.myname ?? 'Not Found');
console.log('----------------');
console.log(a.homeaddress?.country ?? 'Not Found');
console.log(a.myhomeaddress?.country ?? 'Not Found');
console.log('----------------');
console.log(a.skills?.[1] ?? 'Not Found');
console.log(a.myskills?.[1] ?? 'Not Found');
console.log('----------------');
console.log(a.greet?.() ?? 'Not Found');
console.log(a.great?.() ?? 'Not Found' );

