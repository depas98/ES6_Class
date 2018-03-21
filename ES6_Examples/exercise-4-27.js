const cars = [
    {name:'Ford',price:200},
    {name:'Nissan',price:400},
    {name:'Nissan',price:600}
]

function convertPrice(price){
    return price * .81;
}


//  const carsRupies = cars.map(function(car){
//     return {name:car.name,price: convertPrice(car.price)};
//  });

 const carsRupies = cars.map(car => 
    {
        return {name:car.name,price: convertPrice(car.price)};
    });

carsRupies.forEach(cr => console.log(`Car ${cr.name} at ${cr.price}`));