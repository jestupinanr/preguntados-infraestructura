import {Request, Response} from 'express';
import pool from '../database';

class GameController {
    
    public async getAllQuestions (req:Request, res:Response) : Promise<any>{
        const questions = await pool.query('SELECT * from question');
        res.json(questions);
    }
    public async saveScore (req: Request, res : Response): Promise<void>{
        await pool.query('insert into SCORE set id_user=?, score=? ', [req.body.id_person, req.body.scoreEnd]);
        res.json({text:'score saved'});
    }
    public async getRanking (req:Request, res:Response) : Promise<any>{
        const ranking = await pool.query('SELECT '+
        'SCORE.score, '+
        'USER.nombre, '+
        'USER.nickName, '+
        'USER.correo, '+
        'USER.carrera, '+
        'USER.id_imagen '+
        'FROM SCORE '+
        'JOIN USER '+
        'ON SCORE.id_user= USER.id '+
        'ORDER BY SCORE.score DESC '+
        'LIMIT 10');
       res.json(ranking);
    }
}

export const gameController = new GameController();
export default gameController;