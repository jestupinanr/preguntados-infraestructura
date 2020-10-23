import { Router } from 'express';
import gameController from '../controllers/gameController'

class PersonRouter{

    public router : Router = Router();

    constructor (){
        this.config();
    }

    config(): void{
        this.router.get('/', gameController.getAllQuestions);
        this.router.get('/ranking', gameController.getRanking);
        this.router.post('/', gameController.saveScore);
    }
}

const gameRouter = new PersonRouter();
export default gameRouter.router;