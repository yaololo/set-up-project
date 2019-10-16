const MongoMemoryServer = require('mongodb-memory-server');
const mongoose = require('mongoose');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

let mongoServer;
const setup = async () => {
  mongoServer = new MongoMemoryServer();
  const mongoUri = await mongoServer.getConnectionString();
  mongoose.connect(mongoUri, {}).catch(err => console.log(err)); 
};

const teardown = async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
};

module.exports = { 
  setup,
  teardown
}