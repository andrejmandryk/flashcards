const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    activeClasses: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Class",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
      },
    ],
    finishedClasses: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Class",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
      },
    ],
    activeDecks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Deck",
        required: true,
      },
    ],
    finishedDecks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Deck",
        required: true,
      },
    ],
    activeCards: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Card",
        required: true,
      },
    ],
    finishedCards: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Card",
        required: true,
      },
    ],
    ownedClasses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
        required: true,
      },
    ],
    ownedDecks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Deck",
        required: true,
      },
    ],
    ownedCards: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Card",
        required: true,
      },
    ],
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

const User = mongoose.model("User", userSchema);

module.exports = User;
