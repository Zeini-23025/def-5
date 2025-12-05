
const mongoose = require("mongoose");

const pointsHistorySchema = new mongoose.Schema({
  team_id: { type: mongoose.Schema.Types.ObjectId, ref: "Team", required: true },
  points_added: { type: Number, required: true },
  reason: { type: String },
  added_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

module.exports = mongoose.model("PointsHistory", pointsHistorySchema);

