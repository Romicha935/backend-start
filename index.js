// const express = require("express")
// const app =  express()

// app.use(express.json())

// app.get("/",(req,res)=> {
//     res.send("My first backend server")
// })


// app.post("/products",(req,res)=> {
//     const data = req.body
//     console.log(data)
//     res.send("data recived")
// })

// app.get("/products", (req,res)=> {
//     res.send("products route working  ")
// })

// app.listen(3001, ()=> {
//     console.log("server running on port 3001")
// })



const express = require('express')
const app = express()

app.use(express.json())

app.get("/", (req,res)=> {
    res.send("running backend server")
})

app.post('/cart', (req,res)=> {
    const data = req.body
    console.log(data)
    res.send("cart sucessfull")
})

app.get('/cart', (req,res)=> {
    res.send("cart recived")
})

app.listen(4000, ()=> {
    console.log('server running port 4000')
})