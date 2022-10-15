import { JwtPayload } from "jsonwebtoken"

export interface IUserDecoded extends JwtPayload{
    id: string
    email: string

}