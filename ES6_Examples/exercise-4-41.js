const trips = [
    {to:'Brazil',distance:1000},
    {to:'Chine',distance: 2500},
    {to:'India',distance: 3000}
 ]

const result = trips.reduce((sum, trip) => sum + trip.distance, 0);
console.log(result);