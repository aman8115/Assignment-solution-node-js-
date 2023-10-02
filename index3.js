 const fs = require('fs')
 /*
console.log(" read start using Ansychronous ")
fs.readFile('nodearchi.txt', function(error, data){
    if(error){
        
        return error
        console.log(" we can not read this file")
    } else{
        console.log(" file raed successfully" )
        console.log(data.toString())
        return data
        
        
    }
    console.log(" READ END ")
})
console.log(" Other work")
console.log(" read satrt using synchronous")
 var data = fs.readFileSync('nodearchi.txt')
console.log( " Data is " , data.toString()) */
let buf =  Buffer.alloc(1024)
console.log("open and read a file ")
fs.open('nodearchi.txt','r+',function(error,fd){
    if(error){
        console.log(" file can not open because there are some problem")
    } 
        console.log( " file is open sucessfully")
    
    fs.read(fd,buf,0,buf.length,0,function(err , data){
        if( err){
            console.log(" you are not able to read  this file")
        } 
            console.log(" file read ", data)
            console.log(buf.slice(0,data).toString())
        
    })
})

