const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.DB_PATH, { useNewUrlParser: true });

const db = mongoose.connection;

module.exports = db;
