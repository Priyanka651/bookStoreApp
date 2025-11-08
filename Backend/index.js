import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
//import krege bookrouter yha pe 
import bookRouter from "./route/book.route.js"
import userRoute from "./route/user.route.js"


dotenv.config();
const app = express()
app.use(cors());

app.use(express.json());


// dotenv.config();
// const port = 3000
const PORT =process.env.PORT|| 4000;
const URI= process.env.MongoDBURI;

// connect to mongoDB
try{
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
}catch(error){
    console.log("Error:", error);
}

//definning route here upr comment me h jo use define krege or usko define krene k lie will use app.use

app.use("/book", bookRouter);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
