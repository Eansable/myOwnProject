import express from "express";

const app = express()

app.get('/', (req, res) => {
    return '1123'
})

app.listen(3000, () => {
    console.log("12312312!!!");
    
})