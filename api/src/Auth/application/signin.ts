import {logger} from "../../shared/logger";
import {AuthRepository, User} from "../domain/AuthRepository";

export function Authentication(repository: AuthRepository) {

  const login = async (email: string, password: string): Promise<User | void> => {
    const user = await repository.findByEmailAndPassword(email, password)

    if(user) {
      return Promise.resolve(user)
    }

    logger.info(user)

    return user
  }

  return {
    login
  }
}
