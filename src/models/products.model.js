import fs from "node:fs"
import path from "node:path";
import {db} from "./data.js"
import { collection, getDocs,getDoc,doc, addDoc,deleteDoc,setDoc } from "firebase/firestore";

const __dirname = import.meta.dirname; 

const ruta = path.join( __dirname, "./products.json");

const json = fs.readFileSync(ruta , "utf-8");

const products = JSON.parse(json);

//console.log(products);
//FireStore
const productCollection = collection(db, "products")

export const getAllProducts = async () => {
   
    try {
        const snapshop = await getDocs(productCollection);
        return snapshop.docs.map((doc) => ({id : doc.id, ...doc.data()}));
    } catch (error) {
        console.error(error);
    }
}
export const searchProducts = ({}) => {
    const products = getAllProducts();
    return products;
}

export const getProductById = async (id) => {
    //return products.find((p) => p.id === id)
    try {
        const productRef = doc(productCollection, id);
        const snapshop = await getDoc(productRef);
        return snapshop.exists() ? { id: snapshop.id, ...snapshop.data() } : null;
    } catch (error) {
        console.log(error);
    }
    

}

export const createProduct = async (data) => {
    /*const id = products.length + 1;
    const newProduct = {
        id: id,
        ...data,
    };
    products.push(newProduct)
    
    fs.writeFileSync(ruta , JSON.stringify(products));
    
    return newProduct */
    try {
        const docRef = await addDoc(productCollection,data);
        return {id: docRef.id, ...data};
    } catch (error) {
        console.log(error)
    }
}
export const deleteProductById = async (id) => {
   /* const productIndex = products.findIndex((p) => p.id === id);
    if(productIndex === -1){
        return null
    }
    else{
        const product = products.splice(productIndex, 1)
        fs.writeFileSync(ruta , JSON.stringify(products));
        return product;
    }*/
   try {
    const productRef = doc(productCollection, id)
    const snapshop = await getDoc(productRef);

    if(!snapshop.exists()){
        return false;
    }

    await deleteDoc(productRef);
    return true;

   } catch (error) {
    console.log(error)
   }
   
}
export const updateProduct = async (id,data) => {
    try {
        const productRef = doc(productCollection, id);
        const snapshop = await getDoc(productRef);

        if(!snapshop.exists()){
            return false;
        }

       await setDoc(productRef,data) // Remplazo Completo
        return {id, ...data}
    } catch (error) {
        console.log(error)
    }
}