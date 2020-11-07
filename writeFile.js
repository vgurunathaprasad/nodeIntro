var fs = require("fs");

fs.open("randomFile.txt","w",function (err,file){
    if(err) throw err;
    console.log("Saved!");

    fs.appendFile(file,"Hre Rama Hare Krishna", function (errr){
        if(errr) throw errr;
        console.log("Updated!")

        fs.writeFile("randomFile.txt","Hare Govindha Hare Madhava", function (err){
            if(err) throw err;
            console.log("OverWritten!");

            fs.unlink("randomFile.txt", function(err){
                if(err) throw err;
                console.log("Removed!");
            });
        });
    });
});


/*
The function are written nested to make it Synchronous
*/