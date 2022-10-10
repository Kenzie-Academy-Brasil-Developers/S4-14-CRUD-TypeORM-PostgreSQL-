import { Request, Response } from "express";
import { IUser } from "../Interfaces/IUser";
import userCreateService from "../Services/userCreate.services";

const userCreateController = (request: Request, response: Response) => {
    try {
        const { id, name, email}: IUser = request.body

        const newUser = userCreateService({ id ,name, email });

        return response.status(201).send(newUser);

    } catch (err) {

        if (err instanceof Error) {

            return response.status(400).send({
                "error": err.name,
                "message": err.message
            })
        }
    }
};

export default userCreateController;