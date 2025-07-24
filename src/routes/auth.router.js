import Router from "express";
import { login } from "../controllers/auth.controllers.js";



const router = Router();


router.post("/login", login)

export default router;

//rm -rf node_modules  volver atras la desacrga del node modules (con npm i)