const AnimalShelter = require('../fifo-animal-shelter.js');

describe('enqueue()', () => {
  it('Can successfully enqueue into a queue a dog or a cat', () => {
    const animal = new AnimalShelter();
    animal.enqueue('dog');
    expect(animal.front.value).toEqual('dog');
    animal.enqueue('cat');
    expect(animal.front.value).toEqual('cat');
  });
  describe('dequeue()', () => {
    it('Can successfully dequeue out of a queue the the first dog or cat', () => {
      const animal = new AnimalShelter();
      animal.enqueue('dog');
      animal.dequeue('dog');
      expect(animal.front).toEqual(null);
    });
  });
});
