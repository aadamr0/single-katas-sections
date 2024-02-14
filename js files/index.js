function ageCat(catObj){
    if (Object.keys(catObj).length === 0) return {}
    const newObj = structuredClone(catObj)
    newObj.age += 1
    return newObj
}

function treatCats(catsArr){
    if (!catsArr.length) return []
    return treatedCats = catsArr.map((catObj) => {
        const newObj = structuredClone(catObj);
        newObj.hasRabies = false;
        return newObj;
    })
}

module.exports = {ageCat, treatCats}