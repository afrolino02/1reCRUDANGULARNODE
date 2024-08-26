import express, {Application, Request, Response} from 'express';
import routesProducto from "../routes/producto"
import db from '../db/connection'

import cors from 'cors'
class Server {
  private app :Application;
  private port: string;

  constructor(){
    this.app = express();
    this.port = process.env.PORT || "3001";
    this.listen();
    this.middlewares()
    this.routes();
    this.dbConnect();
  }

  listen(){
    this.app.listen(this.port, ()=> {
      console.log(`server corriendo desde ${this.port}`)
    })
  }

  routes(){
    this.app.get('/', (req: Request, res: Response) => {
      res.json({
        msg: "app wordking"
      })
    })


    this.app.use('/api/productos', routesProducto)
  }
  middlewares(){
    this.app.use(express.json())
    this.app.use(cors())
  }

  async dbConnect(){
    try {
      await db.authenticate()
    } catch (error) {
      console.log(error)
    }

  }
}

export default Server;
