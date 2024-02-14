function ageCat(catObj) {
  if (Object.keys(catObj).length === 0) return {};
  const newObj = structuredClone(catObj);
  newObj.age += 1;
  return newObj;
}

function treatCats(catsArr) {
  if (!catsArr.length) return [];
  return (treatedCats = catsArr.map((catObj) => {
    const newObj = structuredClone(catObj);
    newObj.hasRabies = false;
    return newObj;
  }));
}

function createRef(peopleArr, property1 = "name", value1 = "phoneNumber") {
  if (!peopleArr.length) return [];
  const refObj = {};
  for (const person of peopleArr) {
    refObj[person[property1]] = person[value1];
  }
  return refObj;
}

module.exports = { ageCat, treatCats, createRef };
