import {Request, Response} from 'express';
import pool from '../database';

class PersonController {
    
    public async getUltimatePerson (req:Request, res:Response) : Promise<void>{
        const ultimateIdTemp = await pool.query('SELECT MAX(id) AS id FROM user');
        const ultimateId = ultimateIdTemp[0].id;
        const person = await pool.query('SELECT * FROM user WHERE id= ?',  [ultimateId]);
        res.json(person);
    }
    public async create (req: Request, res : Response): Promise<void>{
        await pool.query('INSERT INTO USER set ?', [req.body]);
        res.json({message: 'user create'});
    }

    public delete (req: Request, res : Response){
        res.json({text: 'deleting a game'});
    }

    public update (req: Request, res : Response){
        res.json({text: 'updating a game'+ req.params.id});
    }
}

export const personController = new PersonController();
export default personController;