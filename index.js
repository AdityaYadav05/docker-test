import express from 'express'

const app = express()
const PORT = process.env.PORT ?? 8000

app.get("/",(req,res)=>{
return res.json({message:"hello Aditya"})
})

app.listen(PORT , ()=>{
    console.log(`Server running on the ${PORT}`);
})

