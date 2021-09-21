import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const GameSchema = new Schema(
  {
    answer: { type: String, required: true },
    guesses: [{ type: String }],
    phrase: { type: String },
    gameOver: { type: Boolean, default: false },
    winner: { type: Boolean, default: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
