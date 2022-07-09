const mongoose = require('mongoose');
const PrevModel = new mongoose.Schema(
  {
    billdate: { type: String },
    paiddate: { type: String },
    unitconsumed: { type: String },
    amount: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = electric = mongoose.model('electric', PrevModel);
