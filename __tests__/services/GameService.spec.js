const { dbContext } = require('../../server/db/DbContext')
const { gameService } = require('../../server/services/GameService')
const { existingGame } = require('../MockGameData')

// describe identifies the suite/group of tests
describe('GameService', () => {
  // actual test is defined with it
  it('Returns an instance of the GameService', () => {
    expect(gameService).withContext('gameService should return an instance of the GameService').toBeDefined()
  })
  it('Has a getAll method', () => {
    expect(typeof gameService.getAll).toBe('function')
  })
  it('getAll returns an array of objects', async() => {
    spyOn(dbContext.Games, 'find').and.returnValue([{}, {}, {}])
    const games = await gameService.getAll()
    expect(Array.isArray(games)).withContext('The returned value must be an array, use the mongoose "find" method').toBeTrue()
  })
  it('getById returns an object', async() => {
    spyOn(dbContext.Games, 'findById').and.returnValue(existingGame)
    const game = await gameService.getById(1)
    expect(game.id).toBe(1, 'Use the findById Method to get the game ')
  })

  it('getById throws an error if object is not found', async() => {
    spyOn(dbContext.Games, 'findById').and.returnValue(undefined)
    await expectAsync(gameService.getById(1)).toBeRejected()
  })

  it('getById passes the value to the dbContext', async() => {
    const spy = spyOn(dbContext.Games, 'findById').and.returnValue(existingGame)
    await gameService.getById(1)
    expect(spy).toHaveBeenCalledWith(1)
  })

  it('getById does not return the answer', async() => {
    spyOn(dbContext.Games, 'findById').and.returnValue(existingGame)
    const game = await gameService.getById(1)
    expect(game.answer).withContext('do not return the answer').toBeUndefined()
  })
})
