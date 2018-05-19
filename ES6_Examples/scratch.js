// const value = 10;
// let winner = true;
// var winner2 = true;

// if (value==10){
//     let winner = false;
//     var winner2 = false;
//     console.log("first winner: " + winner);
//     console.log("first winner2: " + winner2);
// }

// console.log("second winner: " +winner);
// console.log("second winner2: " +winner2);

// winner = "new winner";

// console.log("third winner: " +winner);


// ##############################
// var divs = document.getElementsByTagName('div');
// console.log(divs);

// for (let i = 0; i < divs.length; i++){
//     divs[i].addEventListener("click", function(){
//         console.log("you clicked div #" + i);
//     })
// }

// ######### 3:10 #####################

// function returnEmployee(){
//     const name = "Francis";
//     const age = 21;
//     const position = "Manager";

//     console.log(`Employee name is ${name} they are ${age} years old and they work as ${position}.`)
// }

// returnEmployee();

// ######### 3:11 #####################
/*
const names = ["James","Ron","Ace"];
console.log(`The name is ${names[Math.floor(Math.random() * names.length - 1) + 1]}`);

console.log(`My number is ${1 + 5}`);

function car (){
    return "car";
}

console.log(`car func out is ${car()}`);

const user = {
    name: 'Francis',
    age: 21,
    position: 'Manager'
}

console.log(`My name is ${user.name} I'm ${user.age}, I work as a ${user.position}`)

function request(page,id){
    const URL = `http://server.com/${page}/${id}`;
    console.log(URL);
}

request("page", 5);
*/

// ######### 3:12 #####################
/*
var list = document.querySelector('.user_list');

function addUser(name,lastName){
    // var template = '';
    // template += '<div class="user">';
    // template += '    <div>' + name + '</div>';
    // template += '    <div>' + lastName+ '</div>';
    // template += '</div>';

    let template = `
        <div class="user_list">
            <div class="user">
                <div>${name}</div>
                <div>${lastName}</div>
            </div>
        </div>    
    `;

    list.insertAdjacentHTML('beforeend',template);
}

addUser('Francis','Jones2');
addUser('Jane','Doe2');
*/

// ######### 3:13 #####################
// get string raw w/o escaping

/*
console.log('This\nis\nawesome\xa0');
console.log(String.raw`This\nis\nawesome\xa0`);

console.log(0b111110111 === 503)
console.log(0o767 === 503)
*/

// ######### 3:14 Exercise 1 #####################

// const name = "Mike";
// const lastName = "DePas";
// let age = 54;
// let position = "Principal Developer";
// let salary = "100,000";

// console.log(`My name is ${name} ${lastName}, i'm ${age} years old. I work as ${position} and make $${salary}.`);


// ######### 3:16 Exercise 2 #####################
// const players = [
//     {jersey:56,name:"Djounte Murray",position:"Point guard",PPG:2.6},
//     {jersey:98,name:"Dennis Rodman",position:"Small Forward",PPG:10.8},
//     {jersey:1,name:"Michael Jordan",position:"Small Forward",PPG:345.6},
//     {jersey:2,name:"Lebron James",position:"Shooting Guard",PPG:26.7},
//     {jersey:33,name:"Patrick Ewing",position:"Center",PPG:20.2}
// ]

// const ulPlayerList = document.querySelector('.players');

// function addPlayer(jersey,name,position,ppg){
//     let template = `<li>${jersey} - ${name} -- ${position}: -- RPP:  ${ppg}</li>`
//     ulPlayerList.insertAdjacentHTML("beforeend", template);
    
// }

// for (let i = 0; i < players.length; i++){
//     let player = players[i];
//     addPlayer(player.jersey, player.name,player.position,player.PPG);
// }

// ######### 4:18 #####################
// const artists = ['Clapton','U2','Bruno Mars','Lamar'];

// // the es5 way
// for (var i = 0; i < artists.length; i++){
// 	console.log(artists[i]);
// }

// // the es6 way
// artists.forEach(function(artist){
//     console.log(artist);
// });
	
// ######### 4:19 #####################
// const names = ['francis','lisa','marions','ron'];

// // names.forEach(function(name){
// //     document.body.insertAdjacentHTML('afterbegin',`<div>Hi, my name is ${name}<\div>`);
// // });

// // or
// let template = '';

// names.forEach(function(name){
//     template += `<div>Hi, my name is ${name}<\div>`;
// });

// document.body.insertAdjacentHTML('afterbegin', template);

// ######### 4:20 #####################
// let purchases = [
//     {quantity:2,amount:100},
//     {quantity:5,amount:100},
//     {quantity:10,amount:100}
// ]

// let total = 0;

// purchases.forEach(function(item){
//     total += item.quantity * item.amount;
// });

// console.log(total);

// ######### 4:23 #####################

// es5 way copy to array new values
// var numbers = [1,2,3,4,5];
// var otherArray = [];

// for(var i=0; i < numbers.length; i++){
//     otherArray.push(numbers[i]*10);
// }

// console.log(otherArray);

// es6 way using 
// const numbers = [1,2,3,4,5];
// const otherArray = numbers.map(function(number){
//     return number * 10;
// });

// console.log(otherArray);

// ######### 4:24 #####################

// const users = [
//     {user:'Martin Jones',age:32,eyes:'brown'},
//     {user:'Jane Doe',age:20,eyes:'blue'},
//     {user:'Brian Wrecker',age:40,eyes:'brown'}
// ];

// const listOfUsers = users.map(function(user){
//     return user.user;
// });

// listOfUsers.forEach(function(name){
//     const select = document.querySelector('select');
//     select.insertAdjacentHTML('afterbegin', `<option value=${name}>${name}</option>`)
// })

// users.forEach(function(userData){
//     const select = document.querySelector('select');
//     select.insertAdjacentHTML('afterbegin', `<option value=${userData.user}>${userData.user}</option>`)
// })

// ######### 4:29 #####################

// const products = [
//     {name:'ipdad', category:'devices'},
//     {name:'Sony 3 d', category:'TV'},
//     {name:'E256', category:'Blender'},
//     {name:'Super vision', category:'TV'},
//     {name:'Iphone 7', category:'phones'}
// ];

// products.filter(p => p.category === 'TV')
//         .map(p => p.name)
//         .forEach(n => console.log(`Item ${n}`));

// const result = products.filter(p => p.category === 'TV');
// result.forEach(p => console.log(`Item ${p.name} category ${p.category}`));


// ######### 4:31 #####################
// const channels = [
//     {name:'HBO',premium:true},
//     {name:'LIFE',premium:false},
//     {name:'Max',premium:true},
//     {name:'Cooking channel',premium:false},
//     {name:'WOBI',premium:false}
//  ];

//  channels.filter(c => c.premium)
//         .forEach(c => console.log(c.name));


// ######### 4:33 #####################
//const channel = [
    // {name:'HBO',premium:true},
    // {name:'LIFE',premium:false},
    // {name:'Max',premium:true},
    // {name:'Cooking channel',premium:false},
    // {name:'WOBI',premium:false}
    // ];
    // const user = {
    //     name:'Francis',
    //     premium:true,
    //     premiumChannels:function(){
    //         return channel.filter(c => this.premium && c.premium);
    //     },
    //     channels:function(){
    //         return channel.filter(c => !c.premium);
    //     }
    // }
    // console.log(user.premiumChannels())
    // // brings HBO and MAX
    // console.log(user.channels())
    // brings LIFE, COOCKING CHANNEL AND WOBI

// ######### 4:35 #####################    

// const brands = [
//     {name:'Apple',id:1},
//     {name:'HP',id:2},
//     {name:'Samsung',id:3},
//     {name:'Samsung',id:4},
// ];

// const brand = brands.find(b => b.name === 'Samsung');
// console.log(brand);

// ######### 4:36 #####################  

// const cars = [
//     {brand:"Ford",price:500,available:2,type:"Sport car"},
//     {brand:"Nissan",price:200,available:5,type:"Wagon"},
//     {brand:"Chevy",price:300,available:4,type:"Sport car"},
//     {brand:"Porche",price:100,available:0,type:"Urban"}
// ];

// function getResults(price,type){
//     return cars.find(c => c.price < price && 
//                             c.type === type &&
//                             c.available > 0);
// }

// document.querySelector('.search').addEventListener('click',function(){

//     let price = parseInt(document.querySelector('#price').value);
//     let type = document.querySelector('#type').value;

//     let results = getResults(price, type);

//     if (results){
//         console.log(`Found ${results.brand} for $ ${results.price}`);
//     }
//     else{
//         console.log("sorry, no car for you.");
//     }

// });

// ######### 4:37 #####################

// const students = [
//     {name:"Francis", grade:5},
//     {name:"Martin", grade:7},
//     {name:"Martha", grade:7},
// ]

// let allStudentsPassedTheCourse = students.every(s => s.grade >= 6);

// let allStudentsPassedTheCourse = true;

// for(let i = 0; i < students.length; i++){
//     let student = students[i];

//     if (student.grade < 6){
//         allStudentsPassedTheCourse = false;
//         break;
//     }
// }

// console.log(allStudentsPassedTheCourse);const students = [
//     {name:"Francis", grade:5},
//     {name:"Martin", grade:7},
//     {name:"Martha", grade:7},
// ]

// let allStudentsPassedTheCourse = students.every(s => s.grade >= 6);

// let allStudentsPassedTheCourse = true;

// for(let i = 0; i < students.length; i++){
//     let student = students[i];

//     if (student.grade < 6){
//         allStudentsPassedTheCourse = false;
//         break;
//     }
// }

// console.log(allStudentsPassedTheCourse);

// ######### 4:38 #####################

// const students = [
//     {name:"Francis", grade:5},
//     {name:"Martin", grade:7},
//     {name:"Martha", grade:7},
// ]

// // let allStudentsPassedTheCourse = students.every(s => s.grade >= 6);
// let allStudentsPassedTheCourse = students.some(s => s.grade >= 6);

// // let allStudentsPassedTheCourse = true;

// // for(let i = 0; i < students.length; i++){
// //     let student = students[i];

// //     if (student.grade < 6){
// //         allStudentsPassedTheCourse = false;
// //         break;
// //     }
// // }

// console.log(allStudentsPassedTheCourse);

// ######### 4:39 #####################
// const previous = 200;
// const curr = [
//     {expense:'Guitar', amount:200},
//     {expense:'Mic', amount:100},
//     {expense:'Strap', amount:100}
// ]

// const result = curr.reduce((sum, expense) => sum + expense.amount, previous /* This is the intial value*/);

// console.log(result);

// ######### 4:40 #####################
// const users = [
//     {name:'Francis',lastname:'Norton',age:25},
//     {name:'Martha',lastname:'Norton',age:55},
//     {name:'Rob',lastname:'Norton',age:58}
// ]
// const names = users.reduce((start,user) => {
//     start.push(user.name)
//     return start;
// },['Jason']);

// console.log(names.sort());

// let names2 = users.map(user => user.name);
// names2.push('Jason');

// console.log(names2.sort());

// ######### 4:45 #####################
// const numbers = [10,20,30,40,50];
// let total = 0;

// for(let number of numbers){
//     total += number;
// }

// console.log(total);

// ######### 4:46 #####################
// const value = function(name,age){
//     return `My name is ${name} and age ${age}`;
// }

// using fat arrays aka lambdas

// const value = (name, age) => `My name is ${name} and age ${age}`;

// console.log(value("james",45));

// const value2 = (x,y) => x + y;

// console.log(value2(1,2));

// const value3 = x => x + 10;

// console.log(value3(1));

// ######### 4:47 #####################
// const cars = {
//     brands:['Ford','Audi','BMW'],
//     category:'Sport car',
//     message:function(){
//         let $this = this;   // need to safe off this because of the scope issue
//         return $this.brands.forEach(function(brand){console.log(`${brand} is a ${$this.category}`)});
//     }
// }

// const cars = {
//     brands:['Ford','Audi','BMW'],
//     category:'Sport car',
//     message:function(){
//         //let $this = this;   // don't use lambdas scope is the same
//         return this.brands.forEach(brand => console.log(`${brand} is a ${this.category}`));
//     }
// }

// cars.message();

// ######### 6:51 #####################
// const createCharacter = function(name, powers){
//     return {
//         name:name,
//         powers:powers,
//         getfriends:function(){
//             return 'Lois Lane';
//         }
//     }
// }

// E6 way
// const createCharacter = (name, powers) => {
//     return {
//         name,
//         powers,
//         getfriends: () => 'Lois Lane'
//         // or
//         // getfriends(){return 'Lois Lane'}
//     }
// };

// const characterObj = createCharacter('Superman','Fly');
// console.log(characterObj);
// console.log(characterObj.getfriends());

// ######### 7:54 #####################
// function cars(brand){
//     if (!brand){
//         brand = 'Ford';
//     }
//     console.log(`My brand is ${brand}`);
// }

// //Instead
// function cars(brand="Ford"){
//     console.log(`My brand is ${brand}`);
// }

// cars();

// another exaxmple with random

// const randomBrand = () => {
//     const brands = ['ford','nissan','bmw'];
//     return brands[Math.floor(Math.random() * brands.length)];
// }

// const cars = (brand=randomBrand()) => {
//     console.log(`My brand is ${brand}`);
// }

// cars();

// ######### 8:57 #####################
// ES5 Way
// function args(arg1,arg2,arg3){
//     const arguments = [arg1,arg2,arg3];
//     console.log(arguments);
// }

// function args(...args){
//     console.log(args);
//     console.log(args[1]);
// }

// args("Val 1", "Val 2", "Val 3");

// ######### 8:58 #####################

// ES5 Way
// const brands = ["Ford", "Nissan"];
// const otherBrands = ["Audi","BMW"];

// const newArray = brands.concat(otherBrands);
// newArray.push("Other Brand");

// console.log(newArray);

// // ES6 Spread Operator

// const newArray2 = [...brands,...otherBrands,"Other Brand"];
// console.log(newArray2);

// ######### 9:63 #####################

// ES5 classes aka prototypes

// function Car(){};
// // var car = new Car();

// Car.prototype.status = "New";
// Car.prototype.wheels = 4;
// Car.prototype.avail = function(){
//     console.log("available");
// }

// var ford = new Car();

// console.log(ford.__proto__);
// console.log(ford.wheels);


// ######### 9:64 #####################

// ES6 classes

// class Car{
//     constructor(){
//         this.status = "New";
//         this.wheels = 4;
//         this.avail = () => console.log("available"); 
//     }
// };
// const car = new Car();
// const ford = new Car();
// ford.color = "red";

// console.log(car);
// console.log(ford);

// ######### 9:65 #####################

// ES6 classes

// class Car{
    // constructor(options){
    //     this.status = options.status;
    //     this.wheels = options.wheels;
    //     this.avail = options.avail; 
    // }
    // or
//     constructor({staus,wheels,avail}){
//         this.status = status;
//         this.wheels = wheels;
//         this.avail = avail; 
//     }
// };


// const car = new Car({
//     status:"New",
//     wheels:4,
//     avail: () => console.log("available")
// });

// console.log(car);

// ######### 9:66 #####################

// ES6 classes inheritiance

// class Car{
//     constructor(){
//         this.status = "New";
//         this.wheels = 4;
//         this.avail = () => console.log("available"); 
//     }

//     otherFunction(){
//         console.log("hey");
//     }
// };
// const car = new Car();

// class Ford extends Car{
//     constructor(){
//         super();
//     }
// }

// const ford = new Ford();
// ford.color = "red";

// console.log(car);
// console.log(ford);

// ford.avail();
// ford.otherFunction();

// ######### 9:67 #####################
// Destructuring

// ES5 way
// var user = {
//     name:"Francis",
//     lastName:"Jones",
//     age:25
// }

// var name = user.name;
// var lastName = user.lastName;
// var age = user.age;

// ES6 way
const user = {
    name:"Francis",
    lastName:"Jones",
    age:25
}

// const {name} = user;
// const {lastName} = user;
// const {age} = user;

// or

const {name,lastName,age} = user;

console.log(name);
console.log(lastName);
console.log(age);

// const message = (user) => 
//     console.log(`My name is ${user.name} ${user.lastName}, age ${user.age}`);

// or

const message = ({name,lastName,age},salute) => 
    console.log(`My name is ${name} ${lastName}, age ${age} ${salute}`);

message(user,"hey");