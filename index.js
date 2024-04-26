
const express= require("express")
const path=require("path")
const fs=require('fs')

const app=express();

app.use(express.json());

app.use(express.urlencoded({extended:true}))


// mtlb hua ki apka page kya show karega mtlb kya render karega 


app.set('view engine','ejs')

app.use(express.static(path.join(__dirname,"public")))


app.get("/", function(req,res){
    // acuqire that files folder

    // he return will array

    fs.readdir(`./files`, function (err, files){
       // console.log(files);
       res.render('index', { file: files });
    })
    
    
})


app.post("/create", function(req,res){
    // console.log(req.body)
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
        res.redirect("/")

    } )
})


app.get("/files/:filesname", function(req,res){
    // console.log(req.body)
   fs.readFile(`./files/${req.body.filesname}`,"UTF-8", function(err,filedata){

    console.log(filedata)

   })
})

// dyanmic routing

app.get("/profile/:user",function (req,res){
// iska mtlb profile ke naam kuch v hau
    res.send(req.params.user)
    // res.send("Bhai life me to kuch ho")
})


app.listen(3000, function (){
    console.log("server is running")
})