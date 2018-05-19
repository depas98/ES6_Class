function showItems(arg1,arg2,arg3){
    var arr = [arg2,arg3].concat(arg1)
    console.log(arr)
 }
 showItems(["dogs","cats"],"turtles","sharks");

 function showItems2(arg1,...args){
    var arr = [...args,...arg1]
    console.log(arr)
 }
 showItems2(["dogs","cats"],"turtles","sharks");
