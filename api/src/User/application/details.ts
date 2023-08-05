import { logger } from "../../shared/logger";
import { UserRepository, User } from "../domain/UserRepository";

export function UserActions(repository: UserRepository) {

  const update = async (id: string, data: User): Promise<User | void> => {
    try {
      const user = await repository.editDetails(id, data)
      return user
    }catch(err) {
      logger.error(err)
      throw err
    }
  }

  const showInfo = async (id: string): Promise<User | void> => {
    const user = await repository.showDetails(id)
    return {
      guid: user.guid,
      isActive: user.isActive,
      balance: user.balance,
      picture: user.picture,
      age: user.age,
      eyeColor: user.eyeColor,
      name: {
        first: user.name.first,
        last: user.name.last
      },
      company: user.company,
      email: user.email,
      phone: user.phone,
      address: user.address
    }
  }

  return {
    update,
    showInfo
  }
}
