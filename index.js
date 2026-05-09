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

app.get('/products',(req,res)=> {
    res.json([
        {id:1, name: "laptop", price:50000},
        {id:2, name: "Phone", price:20000},
        {id:3, name: "Desktop", price:60000}
    ])
})

app.get('/products/:id', (req,res)=> {
    const id = req.params.id

    res.json({
        productId: id,
       name: "simple name",
       price:10000
})
})
 
app.get('/about', (req,res)=> {
    res.json({
        message:'i am learning bakcend',
        status:'success'
    })
});

app.post('/user',(req,res)=>{
    const user = req.body
    res.json({
        message:"User Recived",
        data:user
    })
})

app.get('/user', (req,res)=> {
    res.json([
        {id:1, name:"Romicha", role:"Frontend developer"},
        {id:2, name:"Sahara", role:"Frontend developer"},

    ])
})

app.listen(4000, ()=> {
    console.log('server running port 4000')
})

