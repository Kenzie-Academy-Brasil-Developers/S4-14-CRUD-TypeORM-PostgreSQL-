import verifyUpdateForbiddenFieldsMiddleware from "../Middleware/verifyUpdateForbiddenFields.middleware";
import updateUserByIdController from "../Controllers/updateUserById.controllers";
import verifyIsActiveMiddleware from "../Middleware/verifyIsActive.middleware";
import deleteUserController from "../Controllers/deleteUsersById.controllers";
import createUsersController from "../Controllers/createUsers.controllers";
import listUsersController from "../Controllers/listUsers.controllers";
import ensureAuthMiddleware from "../Middleware/ensureAuth.middleware";
import isAdmPatchMiddleware from "../Middleware/isAdmPatch.middleware";
import isAdmMiddleware from "../Middleware/isAdm.middleware";

import { Router } from "express";

const userRoutes = Router()

userRoutes.post("", createUsersController);
userRoutes.get("", ensureAuthMiddleware, isAdmMiddleware, listUsersController);
userRoutes.patch("/:id", ensureAuthMiddleware, isAdmPatchMiddleware, verifyUpdateForbiddenFieldsMiddleware, updateUserByIdController);
userRoutes.delete("/:id", ensureAuthMiddleware, isAdmMiddleware, verifyIsActiveMiddleware ,deleteUserController);

export default userRoutes;