import {Response, Request} from "express"
import Producto from '../models/producto';

export  const getProducts = async (req : Request, res: Response )=> {
  const listrProducts = await Producto.findAll();
  res.json(listrProducts)
}

export const getProduct = async (req : Request, res: Response )=> {
  const {id} = req.params;
  const product = await Producto.findByPk(id);

  if(product){
    res.json(product)
  }else {
    if( Number(id) === 0){

    }
  }

}

export const deleteProduct = async (req : Request, res: Response )=> {
  const {id} = req.params
  const product = await Producto.findByPk(id);

  if(!product){
    res.status(404).json({
      msg:`hubo un error, no existe el id :${id}`
    })
  }else{
    await product.destroy();
    res.json({
      msg:"el producto fue eliminado con exito"
    })
  }
}

export const postProduct = async (req : Request, res: Response )=> {
  const {body} = req;
  try {
    await Producto.create(body)
    res.json({
      msg: "El producto fue creado correctamtente",
    })

  } catch (error) {
    console.log(error)
    res.json({
      msg: "Upss ocurrio un error",
    })
  }

}
export const updateProduct = async (req : Request, res: Response )=> {
  const {body} = req;
  const {id} = req.params;
  const product = await Producto.findByPk(id)
  try {
    if(product){
      await product.update(body)
      res.json({
        msg: "producto guardado existosamente",
      })
    }

  } catch (error) {
    res.json({
      msg: "Hubo un error en el servidor",
    })
  }
}


