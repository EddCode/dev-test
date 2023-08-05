import { UserRepository, User } from "../domain/UserRepository";

export function UserActions(repository: UserRepository) {

  const update = async (id: string, data: User): Promise<User | void> => {
    const user = await repository.editDetails(id, data)
    return user
  }

  const showInfo = async (id: string): Promise<User | void> => {
    const user = await repository.showDetails(id)
    return user
  }

  return {
    update,
    showInfo
  }
}
