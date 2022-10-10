import { Request, Response } from "express";
import userListService from "../Services/userList.services";

const userListController = (request: Request, response: Response) => {
  try {
    const users = userListService();

    return response.send(users);
    
  } catch (err) {
    if (err instanceof Error) {
      return response.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userListController;
