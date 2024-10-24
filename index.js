import express from 'express' //import module
import connectMongoDB from './config/db.js'

const app = express() //create app
const port = process.env.PORT || 8080 //port

//Connected to MongoDB Database
connectMongoDB()

//Set view engine/templete engine
app.set('view engine' , 'ejs')


//home page
app.get('/',(req,res) => {
   res.render('index',{title: 'Homepage'})
})

app.listen(port,(req,res)=>{
    console.log(`SERVER is running on http://localhost:${port}`)
})