const {ageCat, treatCats} = require('../js files/index.js')

describe('ageCat', () => {
    it('should return empty object when passed empty object', () => {
        //arrange
        const obj = {}
        //act
        const outputValue = ageCat(obj)
        //assert
        expect(outputValue).toEqual({})
    });
    it('should return object with incremented age property', () => {
      //arrange
      const obj = {age: 17};
      //act
      const outputValue = ageCat(obj);
      //assert
      expect(outputValue).toEqual({age: 18});
    });
    it('should retain other properties', () => {
      //arrange
      const obj = { name: 'Name', age: 17 };
      //act
      const outputValue = ageCat(obj);
      //assert
      expect(outputValue).toEqual({ name: "Name", age: 18 });
    });
    it('should not mutate the origin object', () => {
      //arrange
      const obj = { name: "Name", age: 17 };
      //act
      ageCat(obj);
      //assert
      expect(obj).toEqual({ name: "Name", age: 17 });
    });
    it('should return a new object', () => {
      //arrange
      const obj = { name: "Name", age: 17 };
      //act
      const newObj = ageCat(obj);
      //assert
      expect(obj).not.toBe(newObj);
      expect(typeof newObj).toBe('object')
    });
});

describe.only('treatCats', () => {
    it('should return empty array if passed empty array', () => {
        expect(treatCats([])).toEqual([])
    });
    it('should flip "hasRabies" to true for objects in array of length 1', () => {
        //arrange
        const catsArr = [{ name: 'Otis', age: 3, hasRabies: true }]
        //act
        const newArr = treatCats(catsArr)
        //assert
        expect(newArr[0].hasRabies).toBe(false)
    });
    it('should flip "hasRabies" to true for objects in array of length 2 or more', () => {
      //arrange
      const catsArr = [
        { name: "Otis", age: 3, hasRabies: true },
        { name: "Otis2", age: 3, hasRabies: true },
      ];
      //act
      const newArr = treatCats(catsArr);
      //assert
      expect(newArr[0].hasRabies).toBe(false);
    });
    it('should retain other properties of the objects in the arrays', () => {
      //arrange
      const catsArr = [{ name: "Otis", age: 3, hasRabies: true }];
      //act
      const newArr = treatCats(catsArr);
      //assert
      expect(newArr).toEqual([{ name: "Otis", age: 3, hasRabies: false }]);
    });
    it('should return new array', () => {
      //arrange
      const catsArr = [{ name: "Otis", age: 3, hasRabies: true }];
      //act
      const newArr = treatCats(catsArr);
      //assert
      expect(catsArr).not.toBe(newArr);
    });
    it('should not mutate original array', () => {
      //arrange
      const catsArr = [{ name: "Otis", age: 3, hasRabies: true }];
      //act
      treatCats(catsArr);
      //assert
      expect(catsArr).toEqual([{ name: "Otis", age: 3, hasRabies: true }]);
    });
    it('should not mutate objects inside array', () => {
      //arrange
      const catsArr = [{ name: "Otis", age: 3, hasRabies: true }];
      //act
      treatCats(catsArr);
      //assert
      expect(catsArr).toEqual([{ name: "Otis", age: 3, hasRabies: true }]);
    });
    it('should return new objects inside array', () => {
      //arrange
      const catsArr = [{ name: "Otis", age: 3, hasRabies: true }];
      //act
      const newArr = treatCats(catsArr);
      //assert
      expect(catsArr[0]).not.toBe(newArr[0]);
    });
});