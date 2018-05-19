var name = "Francis";
var lastname = "Jones"
var age = 23;
var createObject = (name,lastname,age) => {
    return {name, lastname, age};
}
console.log(createObject(name,lastname,age))