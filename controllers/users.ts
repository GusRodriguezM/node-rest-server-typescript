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
export const createUser = async( req: Request, res: Response ) => {
    const { body } = req;

    try {

        //Makes a query to check if an user with the email from the params exist
        const emailExists = await User.findOne({
            where: { email: body.email }
        });

        //If exists we return an error
        if( emailExists ){
            return res.status(400).json({
                msg: `An user already exists with the email ${body.email}`
            });
        }

        //Else we create the user in the database
        const user = await User.create( body );
        res.json( user );
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            msg: 'The user could not be created'
        });
    }

}

//PUT API Controller
export const updateUser = async( req: Request, res: Response ) => {
    const { id } = req.params;
    const { body } = req;
    
    try {

        //Search for the user with the id sent in the params
        const user = await User.findByPk( id );
        
        //IF the user does not exist we return an error
        if( !user ){
            return res.status(404).json({
                msg: `It does not exist an user with the id ${id}`
            });
        }

        //Else we make the update with the fields that corresponds to the id
        await User.update( body, { where: { id: id } } );

        //We search again for the updated user
        const updatedUser = await User.findByPk( id );

        //We return the updated user
        res.json( updatedUser );
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            msg: 'The operation could not be made. Please contact the admin!'
        });
    }

}

//DELETE API Controller
export const deleteUser = async( req: Request, res: Response ) => {
    const { id } = req.params;

    //Logic delete
    //Search for the user with the id sent in the params
    const user = await User.findByPk( id );
            
    //IF the user does not exist we return an error
    if( !user ){
        return res.status(404).json({
            msg: `It does not exist an user with the id ${id}`
        });
    }

    //Complete deletion
    // await user.destroy();

    //This just changes the field status from 1 to 0
    await user.update({ status: false });
    
    res.json( user );
}