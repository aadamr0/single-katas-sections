function ageCat(catObj){
    if (Object.keys(catObj).length === 0) return {}
    const newObj = structuredClone(catObj)
    newObj.age += 1
    return newObj
}

module.exports = {ageCat}