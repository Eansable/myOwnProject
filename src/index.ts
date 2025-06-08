import express, { json, urlencoded } from "express";
import teamsRouter from "./routes/teams";

const app = express()
app.use(urlencoded({ extended: false }))
app.use(json())

app.get('/', (req: any, res: any) => {
    res.send('1123')
})

app.use('/teams', teamsRouter)

app.listen(3000, () => {
    console.log("12312312!!!");

})