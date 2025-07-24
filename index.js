import "dotenv/config";
import express from "express";
import productsRouter from "./src/routes/products.router.js"
import authRouter from "./src/routes/auth.router.js"


const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());//Este va primero para que lea lo que me mandan

/*app.use((req,res,next) => {
    res.json({menssage : "En mantenimiento"})
    
})*/

app.get("/", (req, res) => {
    res.json("message : Bienvenido a la API REST !!!");
})

app.use("/api", productsRouter);



app.use(authRouter);

//app.use(cors()); permitir todos los origenes



// midleware error 404
app.use((req,res, next) => {
    res.status(404).json({error: "Not Found"});
})
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});