const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: String,
  });

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
```
**UI Components**