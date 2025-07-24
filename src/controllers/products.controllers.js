import * as Model from "../models/products.model.js"


export const getAllProducts = async (req, res) => {
    //res.json(products);
    const products = await Model.getAllProducts();
    res.json(products)
    
}
export const searchProducts = (req, res) => {
    const name = req.query.name;
    const price = req.query.price;
    const filteredproducts = Model.searchProducts({ name, price });
    let results = filteredproducts;
    
    if (name) {
        results = results.filter(item =>
            item.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    if (price) {
        results = results.filter(item =>
            item.price === parseFloat(price)
        );
    }
    res.json(results);
    
}
export const getProductById = async (req, res) => {
   // si viene un int  parseInt(req.params.id)
    const id = req.params.id;

    const product = await Model.getProductById(id);

    if (!product) {
        res.status(404).json({ error: "no existe el producto" })
    }
    res.json(product);
}
export const createProduct = async (req, res) => {
    const { name, price,categories } = req.body;
    
    const newProduct = await Model.createProduct({name, price, categories});

    res.status(201).json(newProduct)
}
export const updateProduct = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    /*const productIndex = products.findIndex((p) => p.id === productId)
    
    if(productIndex === -1){
        return res.status(404).json({error: "Producto no encontrado"});
    }

    const { name, price } = req.body;
    
    products[productIndex] = {id: productId, name ,price};

    res.json(products[productIndex]);*/
    const updateProduct = await Model.updateProduct(id,data);

    if (!updateProduct) {
        res.status(404).json({ error: "no existe el producto" })
    }
    res.json(updateProduct);
}
export const deleteProductById = async (req, res) => {
    // parseInt(req.params.id, 10)
    const {id} = req.params;
    
     const product = await Model.deleteProductById(id);

     if(!product ){
        return res.status(404).json("producto no encontrado")
    }
    res.status(204).send()
}