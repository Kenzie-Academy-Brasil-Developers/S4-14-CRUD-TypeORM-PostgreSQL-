import { IUserCreated } from "../Interfaces/IUserCreated";
import { User } from "../entities/user.entities"
import { hashSync } from "bcryptjs";
import AppDataSource from "../data-source";

const createUsersServices = async ({name, email, password, isAdm }: IUserCreated) => {

  if ( !password ){
    throw new Error("Erro de Password SERVICES!")
  }

 const userRepository = AppDataSource.getRepository(User);

 const users = await userRepository.find();

 const emailAlreadyExists = users.find(user => user.email === email )

 if ( emailAlreadyExists ){
  throw new Error("Email já existente!")
 }

 const newUser = new User()
  newUser.name = name;
  newUser.email = email;
  newUser.password = hashSync(password, 10);
  newUser.isAdm = isAdm;
  newUser.createdAt = new Date(Date.now());
  newUser.updatedAt = new Date(Date.now());

  userRepository.create(newUser)
  
  await userRepository.save(newUser)
 
  return newUser
};

export default createUsersServices;
