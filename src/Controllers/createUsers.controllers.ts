import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IUserCreated } from "../Interfaces/IUserCreated";
import createUsersServices from "../Services/createUsers.services";

const createUsersController = async (request: Request, response: Response) => {
    try {
        const user: IUserCreated = request.body

        const newUser = await createUsersServices( user );
        
        return response.status(201).send(instanceToPlain(newUser));

/*     const defragUserPass =  { ...newUser }

    delete defragUserPass.password

        return response.status(201).send(defragUserPass); */

    } catch (err) {

        if (err instanceof Error) {

            return response.status(400).send({
                "error": err.name,
                "message": err.message
            })
        }
    }
};

export default createUsersController;