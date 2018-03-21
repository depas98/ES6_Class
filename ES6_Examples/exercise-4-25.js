const paintings = [
    {name:'Mona lisa',width:200,height:200},
    {name:'The scream',width:400,height:600},
    {name:'The last supper',width:600,height:700}
 ]

const msgPaint = paintings.map(function(painting){
    return `The ${painting.name} is ${painting.width} X ${painting.height}`;
});

msgPaint.forEach(m => console.log(m));