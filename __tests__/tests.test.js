const {
  ageCat,
  treatCats,
  createRef,
  formatBooks,
} = require("../js files/index.js");

describe("ageCat", () => {
  it("should return empty object when passed empty object", () => {
    //arrange
    const obj = {};
    //act
    const outputValue = ageCat(obj);
    //assert
    expect(outputValue).toEqual({});
  });
  it("should return object with incremented age property", () => {
    //arrange
    const obj = { age: 17 };
    //act
    const outputValue = ageCat(obj);
    //assert
    expect(outputValue).toEqual({ age: 18 });
  });
  it("should retain other properties", () => {
    //arrange
    const obj = { name: "Name", age: 17 };
    //act
    const outputValue = ageCat(obj);
    //assert
    expect(outputValue).toEqual({ name: "Name", age: 18 });
  });
  it("should not mutate the origin object", () => {
    //arrange
    const obj = { name: "Name", age: 17 };
    //act
    ageCat(obj);
    //assert
    expect(obj).toEqual({ name: "Name", age: 17 });
  });
  it("should return a new object", () => {
    //arrange
    const obj = { name: "Name", age: 17 };
    //act
    const newObj = ageCat(obj);
    //assert
    expect(obj).not.toBe(newObj);
    expect(typeof newObj).toBe("object");
  });
});

describe("treatCats", () => {
  it("should return empty array if passed empty array", () => {
    expect(treatCats([])).toEqual([]);
  });
  it('should flip "hasRabies" to true for objects in array of length 1', () => {
    //arrange
    const catsArr = [{ name: "Otis", age: 3, hasRabies: true }];
    //act
    const newArr = treatCats(catsArr);
    //assert
    expect(newArr[0].hasRabies).toBe(false);
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
  it("should retain other properties of the objects in the arrays", () => {
    //arrange
    const catsArr = [{ name: "Otis", age: 3, hasRabies: true }];
    //act
    const newArr = treatCats(catsArr);
    //assert
    expect(newArr).toEqual([{ name: "Otis", age: 3, hasRabies: false }]);
  });
  it("should return new array", () => {
    //arrange
    const catsArr = [{ name: "Otis", age: 3, hasRabies: true }];
    //act
    const newArr = treatCats(catsArr);
    //assert
    expect(catsArr).not.toBe(newArr);
  });
  it("should not mutate original array", () => {
    //arrange
    const catsArr = [{ name: "Otis", age: 3, hasRabies: true }];
    //act
    treatCats(catsArr);
    //assert
    expect(catsArr).toEqual([{ name: "Otis", age: 3, hasRabies: true }]);
  });
  it("should not mutate objects inside array", () => {
    //arrange
    const catsArr = [{ name: "Otis", age: 3, hasRabies: true }];
    //act
    treatCats(catsArr);
    //assert
    expect(catsArr).toEqual([{ name: "Otis", age: 3, hasRabies: true }]);
  });
  it("should return new objects inside array", () => {
    //arrange
    const catsArr = [{ name: "Otis", age: 3, hasRabies: true }];
    //act
    const newArr = treatCats(catsArr);
    //assert
    expect(catsArr[0]).not.toBe(newArr[0]);
  });
});

describe("createRef", () => {
  it("should return empty array if passed empty array", () => {
    expect(createRef([])).toEqual([]);
  });
  it("should convert an array of 1 person into a reference object", () => {
    //arrange
    const personArr = [
      {
        name: "vel",
        phoneNumber: "01134445566",
        address: "Northcoders, Leeds",
      },
    ];
    //act
    const referenceObj = createRef(personArr);
    //assert
    expect(referenceObj).toEqual({
      vel: "01134445566",
    });
  });
  it("should convert array of 2 or more people into ref object", () => {
    //arrange
    const personArr = [
      {
        name: "vel",
        phoneNumber: "01134445566",
        address: "Northcoders, Leeds",
      },
      {
        name: "tom",
        phoneNumber: "01134445736",
        address: "Northcoders, Leeds",
      },
    ];
    //act
    const referenceObj = createRef(personArr);
    //assert
    expect(referenceObj).toEqual({
      vel: "01134445566",
      tom: "01134445736",
    });
  });
  it("should not mutate original array", () => {
    //arrange
    const arr = [
      {
        name: "vel",
        phoneNumber: "01134445566",
        address: "Northcoders, Leeds",
      },
      {
        name: "tom",
        phoneNumber: "01134445736",
        address: "Northcoders, Leeds",
      },
    ];
    //act
    createRef(arr);
    //assert
    expect(arr).toEqual([
      {
        name: "vel",
        phoneNumber: "01134445566",
        address: "Northcoders, Leeds",
      },
      {
        name: "tom",
        phoneNumber: "01134445736",
        address: "Northcoders, Leeds",
      },
    ]);
  });
  it("should not mutate original objects", () => {
    const arr = [
      {
        name: "vel",
        phoneNumber: "01134445566",
        address: "Northcoders, Leeds",
      },
      {
        name: "tom",
        phoneNumber: "01134445736",
        address: "Northcoders, Leeds",
      },
    ];
    createRef(arr);
    expect(arr[0]).toEqual({
      name: "vel",
      phoneNumber: "01134445566",
      address: "Northcoders, Leeds",
    });
  });
  it("should work with various properties", () => {
    const people = [
      {
        name: "vel",
        phoneNumber: "01134445566",
        address: "Northcoders, Leeds",
      },
      {
        name: "ant",
        phoneNumber: "01612223344",
        address: "Northcoders, Manchester",
      },
    ];
    //act
    const ref = createRef(people, "name", "address");
    expect(ref).toEqual({
      vel: "Northcoders, Leeds",
      ant: "Northcoders, Manchester",
    });
  });
});

describe.only("formatBooks", () => {
  it("should return empty array if passed empty array", () => {
    expect(formatBooks([])).toEqual([]);
  });
  it("should switch authorName for appropriate id for array of 1 author", () => {
    const booksArr = [{ name: "book1", author: "Author1", releaseYear: 2009 }];
    const format = {
      Author1: 1,
    };
    expect(formatBooks(booksArr, format)).toEqual([
      { name: "book1", authorId: 1, releaseYear: 2009 },
    ]);
  });
  it("should switch authorName for appropriate id for array of 2 or more authors", () => {
    const booksArr = [
      { name: "book1", author: "Author1", releaseYear: 2009 },
      { name: "Book2", author: "author2", releaseYear: 2009 },
    ];
    const format = {
      Author1: 1,
      author2: 2,
    };
    expect(formatBooks(booksArr, format)).toEqual([
      { name: "book1", authorId: 1, releaseYear: 2009 },
      { name: "Book2", authorId: 2, releaseYear: 2009 },
    ]);
  });
  it("should not mutate the original array", () => {
    const booksArr = [
      { name: "book1", author: "Author1", releaseYear: 2009 },
      { name: "Book2", author: "author2", releaseYear: 2009 },
    ];
    const format = {
      Author1: 1,
      author2: 2,
    };
    formatBooks(booksArr, format);
    expect(booksArr).toEqual([
      { name: "book1", author: "Author1", releaseYear: 2009 },
      { name: "Book2", author: "author2", releaseYear: 2009 },
    ]);
  });
  it("should not mutate original objects", () => {
    const booksArr = [
      { name: "book1", author: "Author1", releaseYear: 2009 },
      { name: "Book2", author: "author2", releaseYear: 2009 },
    ];
    const format = {
      Author1: 1,
      author2: 2,
    };
    formatBooks(booksArr, format);
    expect(booksArr).toEqual([
      { name: "book1", author: "Author1", releaseYear: 2009 },
      { name: "Book2", author: "author2", releaseYear: 2009 },
    ]);
  });
  it("should return new array", () => {
    const booksArr = [
      { name: "book1", author: "Author1", releaseYear: 2009 },
      { name: "Book2", author: "author2", releaseYear: 2009 },
    ];
    const format = {
      Author1: 1,
      author2: 2,
    };
    const newArr = formatBooks(booksArr, format);
    expect(newArr).not.toBe(booksArr);
  });
  it("should return new objects", () => {
    const booksArr = [
      { name: "book1", author: "Author1", releaseYear: 2009 },
      { name: "Book2", author: "author2", releaseYear: 2009 },
    ];
    const format = {
      Author1: 1,
      author2: 2,
    };
    const newArr = formatBooks(booksArr, format);
    expect(newArr[0]).not.toBe(booksArr[0]);
  });
});
