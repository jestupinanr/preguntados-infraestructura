import { Router } from 'express';
import gameController from '../controllers/gameController'

class PersonRouter{

    public router : Router = Router();

    constructor (){
        this.config();
    }

    config(): void{
        this.router.get('/', gameController.getAllQuestions);
        this.router.post('/:id', gameController.saveScore);
        this.router.delete('/:id',gameController.delete);
        this.router.put('/:id', gameController.update);
    }
}

const gameRouter = new PersonRouter();
export default gameRouter.router;