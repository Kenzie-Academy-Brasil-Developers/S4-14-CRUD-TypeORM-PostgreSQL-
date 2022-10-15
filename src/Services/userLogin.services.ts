import { IUserLogin } from "../Interfaces/IUserLogin";
import { User } from "../entities/user.entities";
import AppDataSource from "../data-source";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userLoginService = async ({ email, password } : IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: email
  })

  if (!user) {
    throw new Error("User não encontrado!");
  }

  if (!bcrypt.compareSync(password, user.password!)) {
    throw new Error("Senha invalida!");
  }

  if ( user.email !== email ) {
    throw new Error("Email invalido!");
  }
  
  const token = jwt.sign(
    {
      isAdm: user.isAdm,
      email: email,
      id: user.id
    },
    String(process.env.SECRET_KEY),
    {
      expiresIn: "24h",
    }
  );

  return token;
};

export default userLoginService;
