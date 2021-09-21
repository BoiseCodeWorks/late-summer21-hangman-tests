import { dbContext } from '../db/DbContext'

class GameService {
  async getAll() {
    return await dbContext.Games.find({})
  }

  async getById(id) {
    const found = await dbContext.Games.findById(id)
    if (!found) {
      throw new Error('Invalid Id')
    }
    delete found.answer
    return found
  }
}

export const gameService = new GameService()
