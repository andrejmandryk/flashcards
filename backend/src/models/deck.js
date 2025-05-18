const mongoose = require("mongoose");

const deckSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    totalCardsCount: { type: Number, required: true }, // for progress tracking in the future
    cards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Card" }],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: (_doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

module.exports = mongoose.model("Deck", deckSchema);
