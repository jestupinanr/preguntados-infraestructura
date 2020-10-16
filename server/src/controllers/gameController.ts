import {Request, Response} from 'express';
import pool from '../database';

class GameController {
    
    public async getAllQuestions (req:Request, res:Response) : Promise<void>{
        const questions = await pool.query('SELECT * from question');
        res.json(questions);
    }
    public async saveScore (req: Request, res : Response): Promise<void>{
        console.log("emtre");
        //await pool.query('INSERT INTO USER set ?', [req.body]);
        res.json({text: 'updating a game'+ req.params});
        console.log(req.params);
    }

    public delete (req: Request, res : Response){
        res.json({text: 'deleting a game'});
    }

    public update (req: Request, res : Response){
        res.json({text: 'updating a game'+ req.params.id});
    }
}

export const gameController = new GameController();
export default gameController;