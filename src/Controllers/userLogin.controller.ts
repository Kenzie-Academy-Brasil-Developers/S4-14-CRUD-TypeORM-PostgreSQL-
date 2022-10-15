import { Request, Response } from "express";
import { IUserLogin } from "../Interfaces/IUserLogin";
import userLoginService from "../Services/userLogin.services";

const userLoginController = async (request: Request, response: Response) => {
  try {
    const data: IUserLogin = request.body;

    const token = await userLoginService( data )

    return response.json({token});
    
  } catch (err) {
    if (err instanceof Error) {
      return response.status(403).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userLoginController;
