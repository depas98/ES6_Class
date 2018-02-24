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
const numbers = [1,2,3,4,5];
var otherArray = numbers.map(function(number){
    return number * 10;
});

console.log(otherArray);

