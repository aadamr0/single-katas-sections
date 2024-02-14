# createRef - Part 1

Often in programming, it is useful to be able to quickly convert one value into another.

```js
const people = [
  { name: 'vel', phoneNumber: '01134445566', address: 'Northcoders, Leeds' },
  {
    name: 'ant',
    phoneNumber: '01612223344',
    address: 'Northcoders, Manchester'
  },
  { name: 'mitch', phoneNumber: '07777777777', address: null }
];
```

To find a person's phone number in this array of people, we would have to iterate over the array until we find the correct person. Then, once we have found them, extract their number. We could do this by using a for loop to iterate over the array:

```js
const getPhoneNumber = (personName, people) => {
  for (let i = 0; i < people.length; i++) {
    if (people[i].name === personName) return people[i].phoneNumber;
  }
};
```

Or, we could use an array method like [find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find):

```js
const getPhoneNumber = (personName, people) => {
  const person = people.find((person) => person.name === personName);
  return person && person.phoneNumber;
};
```

Either way, this is quite a lot of work to do each time we want to get a phone number. If the array is very long, it will be reasonably inefficient too.

An alternative would be to create a reference object:

```js
const phoneBook = {
  vel: '01134445566',
  ant: '01612223344',
  mitch: '07777777777'
};
```

Once we have this, as long as we know the name of the person, we will be able to quickly get their phone number. No further iteration required!

```js
const antsNum = phoneBook.ant;
console.log(antsNum); // logs '01612223344'
```

### Step 1

Create a function  called `createRef` that can convert an array of people into a reference object that can be used to look up a person's phone number from their name.

```js
const people = [
  { name: 'vel', phoneNumber: '01134445566', address: 'Northcoders, Leeds' },
  {
    name: 'ant',
    phoneNumber: '01612223344',
    address: 'Northcoders, Manchester'
  },
  { name: 'mitch', phoneNumber: '07777777777', address: null }
];

createRef(people);  // returns { vel: '01134445566', ant: '01612223344', ... };
```

