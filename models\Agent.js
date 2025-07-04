const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }]
});

const Agent = mongoose.model('Agent', agentSchema);

module.exports = Agent;