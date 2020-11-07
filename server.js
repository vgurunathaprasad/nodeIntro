const http = require("http");
const url = require("url");

// http.createServer(
//     function(req,res) {
//         try{
//             res.writeHead(200,{"Content-Type":"text/html"});
//             res.end("<h1>Hello World</h1>");
//         }catch(e) {
//             res.writeHead(500);
//             res.end("Something went wrong");
//         }
//     }).listen(5555);


http.createServer(function (request,response){
    try{
        console.log(request.url);
        const urlObj = url.parse(request.url,true);
        switch(urlObj.pathname) {
            case "/":
                response.writeHead(200,{"Content-Type" : "text/html"});
                response.end("<h1>Home Page!</h1>");
                break;
            case "/about":
                response.writeHead(200,{"Content-Type" : "text/html"});
                response.end("<h1>About Page!</h1>");
                break;
            case "/contact":
                response.writeHead(200,{"Content-Type" : "text/html"});
                response.end("<h1>Contact Page!</h1>");
                break;
            case "/search":
                response.writeHead(200,{"Content-Type" : "text/html"});
                response.end(`<h1> Searcher for : ${urlObj.query.q}</h1>`);
                break;
            default:
                response.writeHead(404,{"Content-Type" : "text/html"});
                response.end("<h1>Page not found!</h1>");
                break;
        }
    } catch(e){
        console.error(e);
    }
}).listen(5555);