const express=require('express')
const app=express()
const cookieParser=require('cookie-parser')

app.use(cookieParser())

app.get('/setName', (req, res)=>{
    res.cookie('name', 'Don');
    res.send("Name Cookie has been created")
})
app.get('/getName', (req, res)=>{
    const {name='no-name'} =req.cookies;
    res.send(`hey ${name}`);
})


app.listen(3000, ()=>{
    console.log("Server is on");
})