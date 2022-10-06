const express = require ("express");
const Contenedor = require ("../contenedorProductos");
const productsRouter = express.Router();

const contenedorProductos = new Contenedor("camisetas.txt");


productsRouter.get("/", async (req, res)=>{
    try{
   //     const products =  await contenedorProductos.getAll();
    //    res.send(products)
   console.log(contenedorProductos.getAll())
    res.send("hola")
    } catch(error) {
        res.status(500).send("Hubo un error en el servidor")
    }
    

})




module.exports =  productsRouter;