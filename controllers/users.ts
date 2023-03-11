import { Request, Response } from "express";
import User from "../models/user";

//GET API Controller
export const getUsers = async( req: Request, res: Response ) => {
    
    //Find all users from the table
    const users = await User.findAll();

    res.json({ users });
}

//GET API Controller - getUser
export const getUser = async( req: Request, res: Response ) => {
    const { id } = req.params;

    //Searchs for the use with the id of the params
    const user = await User.findByPk( id );

    //If the user exists then return it, else return an error message
    if( user ){
        res.json( user );
    }else{
        res.status(404).json({
            ok: false,
            msg: `There is no user with the id ${id}`
        });
    }

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