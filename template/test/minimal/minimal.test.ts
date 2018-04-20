import { Hello } from '../../src/lib';

describe('Hello Tests', () => {

  let test: Hello;

  beforeAll(() => {
    test = new Hello();
  });

  describe('#world()', () => {

    it('should get same instance', () => {
      expect(test.world()).toEqual('Hello world');
    });

  });

});
