const {ageCat} = require('../js files/index.js')

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