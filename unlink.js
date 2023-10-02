const fs = require("fs")
//// delet  a file 
fs.unlink('deletNode.txt', function(erro){
    if(erro){
        console.log(" file could not deleted ")
    } else{
        console.log(" file deleted successfully")
    }
})