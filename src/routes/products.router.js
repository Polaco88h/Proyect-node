import {Router} from "express";
import {getAllProducts,searchProducts,getProductById,createProduct,updateProduct,deleteProductById} from "../controllers/products.controllers.js"
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();



//obtiene todos los productos
router.get("/products", getAllProducts);

// app filtra
router.get("/products/search", searchProducts);

// app obtiene por id
router.get("/products/:id", getProductById)

// app postea nuevo
router.post("/products", auth ,createProduct)

// app modifica el recurso completo
router.put("/products/:id", updateProduct)
// app Borra
router.delete("/products/:id", deleteProductById)

export default router;
