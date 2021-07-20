import sort from '../sort';

const unorderedArrayDifferentSuits = [{
    "suit": "test 4",
    "value": 1,
    "suitOrder": 4,
    "cardOrder": 1
  },
  {
    "suit": "test 3",
    "value": 2,
    "suitOrder": 3,
    "cardOrder": 2
  },
  {
    "suit": "test 2",
    "value": 3,
    "suitOrder": 2,
    "cardOrder": 3
  },
  {
    "suit": "test 1",
    "value": 4,
    "suitOrder": 1,
    "cardOrder": 4
  }];

  const unorderedArraySameSuits = [{
    "suit": "test 4",
    "value": 1,
    "suitOrder": 4,
    "cardOrder": 4
  },
  {
    "suit": "test 3",
    "value": 2,
    "suitOrder": 4,
    "cardOrder": 7
  },
  {
    "suit": "test 2",
    "value": 3,
    "suitOrder": 4,
    "cardOrder": 10
  },
  {
    "suit": "test 1",
    "value": 4,
    "suitOrder": 4,
    "cardOrder": 3
  }];

describe('sort', () => {
    it('Given an array of different suit cards, items sorted into correct suit order', () => {
      var result = sort(unorderedArrayDifferentSuits);
      expect(result).not.toBeNull();
      expect(result.length).toBe(4);
      const { suit, suitOrder } = result[0];
      expect(suit).toBe('test 1');
      expect(suitOrder).toEqual(1);
    });

    it('Given an array of same suit cards, items sorted into correct card order', () => {
        var result = sort(unorderedArraySameSuits);
        expect(result).not.toBeNull();
        expect(result.length).toBe(4);
        const { suit, suitOrder } = result[0];
        expect(suit).toBe('test 1');
        expect(suitOrder).toEqual(4);
      });
});
  