import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import MongoClient from 'mongodb'
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv'
const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts', postRoutes);

const CONNECTION_URL = "mongodb+srv://upasana:bEBlgScDuoo3P5MB@cluster0.vmvur00.mongodb.net/?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000;
// const connect = () => {
//     mongoose.connect(connection_url).then(() => {
//         console.log("MongoDB connected")
//     }).catch((err) => {
//         console.log(err)
//     })
// };

// app.listen(PORT,()=>{
//     connect()
//     console.log("Backend")
// })

// async function main(){
    

//     const client = new MongoClient(connection_url);
//     try{
//         await client.connect(function(err){
//             console.log("Upasana connected the server successfully..!!")
//         })
//     }catch(e){
//         console.error(e);
//     }finally{
//         await client.close();
//     }
// }

// main().catch(console.error);


mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser : true, useUnifiedTopology : true})
.then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
.catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);
