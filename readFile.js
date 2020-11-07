const fs = require("fs");
const path = require("path");


console.log("\n");

fs.readFile("test.html",function (err,data){
    if(err){
        console.log(err);
        return;
    }
    console.log(data.toString());
});


console.log("\n");

fs.readFile("test.html", "utf-8", function (err,data){
    if(err){
        console.log(err);
        return;
    }
    console.log(data.toString());
});

console.log("\n");

console.log(__dirname);
fs.readFile( path.join("one","two","txtFile.txt"), "utf-8", function (err,data){
    if(err){
        console.log(err);
        return;
    }
    console.log(data.toString());
});

console.log("\n");

const data = fs.readFileSync(
    path.join("one","two","txtFile.txt"),
    {
        encoding: "utf-8",
    }
);

console.log(data);


console.log("\n");

try {
    const data = fs.readFileSync(
        path.join("one","two","txtFile.txt"),
        {
            encoding: "utf-8",
        }
    );

    console.log(data);

} catch(e){
    console.error(e);
}


/*

JS is interpreted asynchronously

Hence while running the code 
I am looking at newline continously and in plcas where I did not write a new line
at the same time no new lines in places where I wrote them

This is the reason why there is 
 * readFile and
 * readFileSync functions 
 to get the Sync of the code under control while reading file

*/