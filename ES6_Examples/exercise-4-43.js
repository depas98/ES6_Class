const computers = [
    {type:'Laptop',price:124, os:'Windows'},
    {type:'Desk',price:124, os:'Mac'},
    {type:'Desk',price:124, os:'Windows'},
    {type:'Laptop',price:124, os:'Mac'},
    {type:'Laptop',price:124, os:'Windows'},
 ];

 const counts = computers.reduce((osCount,computer) => {
    // if (computer.os === 'Windows'){
    //     osCount.windows = osCount.windows + 1;
    // }
    // else if (computer.os === 'Mac'){
    //     osCount.mac = osCount.mac + 1;
    // }
    // return osCount;

    return computer.os === 'Windows' ? {mac:osCount.mac + 1, windows:osCount.windows} 
            : {mac:osCount.mac, windows:osCount.windows + 1};
},{mac:0,windows:0});

console.log("windows count: " + counts.windows);
console.log("mac count: " + counts.mac);