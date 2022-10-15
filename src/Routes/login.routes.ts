import userLoginController from "../Controllers/userLogin.controller";

import { Router } from "express";

const loginRoutes = Router()

loginRoutes.post("", userLoginController);

export default loginRoutes;