import {Request, Response} from 'express';

class IndexController {

    public index (req:Request, res: Response){
        res.json({text: 'the api principal is in /api/person'});
    } 
}

export const indexController = new IndexController();