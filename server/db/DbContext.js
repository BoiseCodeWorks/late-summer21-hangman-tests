import mongoose from 'mongoose'
import { GameSchema } from '../models/Game'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema)
  Games = mongoose.model('Game', GameSchema)
}

export const dbContext = new DbContext()
