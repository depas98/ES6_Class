//  Rest and Reduce example

function totalDistance(distance1,distance2,distance3){
    var distances = [distance1,distance2,distance3];
    var total = 0;
    for(var i = 0; i < distances.length;i++){
        total += distances[i];
    }
    return total;
 }
 console.log(totalDistance(200,100,200));

 function totalDistance2(...distances){
    return distances.reduce((total,distance) => total + distance);
 }
 console.log(totalDistance2(200,100,200));

 const totalDistance3 = (...distances) => distances.reduce((total,distance) => total + distance);
 console.log(totalDistance3(200,100,200));