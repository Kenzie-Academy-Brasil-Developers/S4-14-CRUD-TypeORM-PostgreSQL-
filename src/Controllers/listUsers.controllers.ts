import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import listUsersService from "../Services/listUsers.services";

const listUsersController = async (request: Request, response: Response) => {
  try {
    const users = await listUsersService();

    return response.json(instanceToPlain(users));
    
  } catch (err) {
    if (err instanceof Error) {
      return response.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default listUsersController;