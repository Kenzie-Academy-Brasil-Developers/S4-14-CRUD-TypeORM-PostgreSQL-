import { Request, Response } from 'express'
import { User } from '../entities/user.entities';
import { IUserUpdate } from '../Interfaces/IUserUpdate';
import updateUserByIdService from '../Services/updateUserById.services';

const updateUserByIdController = async ( request: Request, response: Response ) => {

    try {
        const user: IUserUpdate = request.body;

        const id: string = request.params.id;

        const updateUser = await updateUserByIdService(user, id);

        if ( updateUser instanceof User ){
            return response.json(updateUser);
        }
        return response.status(updateUser![1] as number).json({
            message: updateUser![0]
        });

    } catch ( error ) {
        if ( error instanceof Error ) {
            return response.status(400).send({
                message: error.message
            })
        }
    }
};

export default updateUserByIdController;