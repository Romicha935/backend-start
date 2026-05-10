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
//     res.send("producroutets  working  ")
// })

// app.listen(3001, ()=> {
//     console.log("server running on port 3001")
// })



const express = require('express')

const app = express()
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

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


const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0"
    }
  },
  apis: ["index.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://learning-backend:gv32YEO3cgZ7HB99@cluster0.dvev3.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
let usersCollection;
async function run() {
    
  try {
    // Connect the client to the server	(optional starting in v4.7)

const database = client.db("backendDB");
usersCollection = database.collection("users");
console.log("mongodb connect susccessfull")
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.post('/user', async (req,res)=>{
    const user = req.body
    const result = await usersCollection.insertOne(user)
    res.json({
        message:"User Recived",
        data:result
    })
})

app.get('/user', async (req,res)=> {
    const users = await usersCollection.find().toArray()
    res.json(users)
  
})

app.listen(4000, ()=> {
    console.log('server running port 4000')
})

