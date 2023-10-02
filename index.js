const fs = require('fs')
fs.writeFile('nodearchi.txt',"Node js architechture is based on 6  step. 1 requset 2. server nodejs 3. Event Queue 4. Event loop 5. Thread poll 6. external resource" , function(error){
    if(error){
        console.log(" you can not write in nodearchi.txt file because there are some error ")
    } else{
        console.log(" writing is successful in nodearchi.txt file")
    }
})
