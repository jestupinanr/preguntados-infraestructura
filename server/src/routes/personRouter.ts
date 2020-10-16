import { Router } from 'express';
import personController from '../controllers/personController'

class PersonRouter{

    public router : Router = Router();

    constructor (){
        this.config();
    }

    config(): void{
        this.router.get('/', personController.getUltimatePerson);
        this.router.post('/', personController.create);
        this.router.delete('/:id',personController.delete);
        this.router.put('/:id', personController.update);
    }
}

const gameRouter = new PersonRouter();
export default gameRouter.router;