const fs = require("fs")
fs.appendFile('nodearchi.txt',"Node js is a run tiem enviroment of javascipt . It is a open source plateform. It created in c++,CC and javascript Node js use in SPA single page application  Real time application , Data streaming app , Online chat paltform  , Other web app making server ",'utf-8',function(err){
    if(err){
        console.log(" you can not add a new data in this file ")
    } else{
        console.log(" you added new data in this file successfully")
    }
})