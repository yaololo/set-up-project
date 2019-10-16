const inMemoryServer = require('../test_helper/in_memory_mongodb_setup');
const User = require('./user');
// beforeEach(() => {
//   inMemoryServer.setup();
// });

// afterEach(() => {
//   inMemoryServer.teardown();
// });

describe('User schema validation', () => {
  it('email cannot be blank ', () => {
    const user = new User();

    user.validate(err => {
      expect(err.errors.email.message).toEqual('cannot be blank');
    });
  });

  it('email format is invalid ', () => {
    const user = new User({ name: 'test', email: 'invalidEmailFormat', password: '123' });

    user.validate(err => {
      expect(err.errors.email.message).toEqual('email format is invalid');
    });
  });

  it('email format is invalid ', () => {
    const user = new User({ name: 'test', email: 'invalidEmailFormat', password: '123' });

    user.validate(err => {
      expect(err.errors.email.message).toEqual('email format is invalid');
    });
  });
});