# treatDoggos

This function will take **an array of dog objects** each with a `hasRabies` property set to `true`. It should return a **new array of new dog objects**. Each dog should have the `hasRabies` flag flipped to `false`.

## Examples: 

```js
const dogs = [{ name: 'Otis', age: 3, hasRabies: true }];

treatDoggos(dogs); // returns [{ name:'Otis', age: 3, hasRabies: false }]

// dogs is not mutated and still has the form [{ name: 'Otis', age: 3, hasRabies: true }]

const dogs = [{ name: 'Otis', age: 3, hasRabies: true }];

const newDogs = treatDoggos(dogs);

// dogs !== newDogs - dogs and newDogs should have different references
```


