import express, { json } from 'express';
import mongoose, { Schema, connect } from 'mongoose';
import 'dotenv/config'
const port=8080
const app = express()
app.use(express.json())
const categorySchema = new Schema({
    title: {
        type:String,
        required:true}, 
    image:
    {
          type:String,
          required:true
    },
    price: {
        type:Number,
     required:true
    },

  });
  const categoryModel = mongoose.model('category', categorySchema);
app.listen(process.env.PORT,()=>{
    console.log(`bu website bu portda isleyir ${process.env.PORT}`)
})

app.get('/category',async (req, res) => {
   const categories= await categoryModel.find()
   res.send(categories)
})
app.get('/category/:id',async (req, res) => {
    const {id}=req.params;
    const category= await categoryModel.findById(id)
    res.send(category)
 })
 app.delete('/category/:id',async (req, res) => {
    const {id}=req.params;
    const category= await categoryModel.findByIdAndDelete(id)
    res.send("delete category")
 })
 
 app.put('/category/:id',async (req, res) => {
    const {id}=req.params;
    const {title,image,price}=req.body;
    const category= await categoryModel.findByIdAndUpdate(id, {title,image,price})
    res.send("category updated")
 })
app.post('/category', async(req, res) => {
    const {title,image,price}=req.body;
    const newCategory=new categoryModel({title,image,price})
    await newCategory.save()
    res.sendStatus(201).send("Data added successfully")
 })
 
connect(process.env.DB_SECRET_KEY)
.then(()=>
    console.log("baglanti quruldu")
)
.catch((err)=>
    console.log("baglanti qurulmadi")
)