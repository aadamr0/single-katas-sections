# createRef - Part 2

Make your `createRef` function more flexible and reusable by allowing it to accept more arguments. Use these arguments to decide what key-value pairs the created reference object has.

> Hint: Adding new arguments at this stage may cause your earlier tests to fail. It is considered bad practice in TDD to change previously written tests. Take a look at **default parameters** so that your function works as intended without failing your earlier tests.

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

createRef(people, 'name', 'phoneNumber');  // returns { vel: '01134445566', ant: '01612223344', ... };

createRef(people, 'name', 'address');  // returns { vel: 'Northcoders, Leeds', ant: 'Northcoders, Manchester', ... };

const songs = [
  {
    track: '11:11',
    artist: 'Dinosaur Pile-Up',
    releaseYear: 2015,
    album: 'Eleven Eleven'
  },
  {
    track: 'Powder Blue',
    artist: 'Elbow',
    releaseYear: 2001,
    album: 'Asleep In The Back'
  }
];

createRef(songs, 'track', 'artist');  // returns { '11:11': 'Dinosaur Pile-Up', 'Powder Blue': 'Elbow' }
```

