import { Request, Response } from "express";

//GET API Controller
export const getUsers = ( req: Request, res: Response ) => {
    res.json({
        msg: 'getUsers'
    });
}

//GET API Controller - getUser
export const getUser = ( req: Request, res: Response ) => {
    const { id } = req.params;

    res.json({
        msg: 'getUser',
        id
    });
}

//POST API Controller
export const createUser = ( req: Request, res: Response ) => {
    const { body } = req;
    
    res.json({
        msg: 'postUser',
        body
    });
}

//PUT API Controller
export const updateUser = ( req: Request, res: Response ) => {
    const { id } = req.params;
    const { body } = req;
    
    res.json({
        msg: 'putUser',
        id,
        body
    });
}

//DELETE API Controller
export const deleteUser = ( req: Request, res: Response ) => {
    const { body } = req;
    
    res.json({
        msg: 'deleteUser',
        body
    });
}