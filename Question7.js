const http = require("http")
const server = http.createServer(function(requ,respo){
    if( requ.url == '/'){
        respo.write(" <h1> I am happy To learn full stack web development from pw skills </h1>")
    }
    respo.end();
})
server.listen(5002)
console.log(" server is running on port 5001")