import Person from './models/Person';

const INITIAL_PEOPLE: Person[] = [
  { id: Math.random(), firstName: 'Mike', lastName: 'Wazowski', age: 500 },
  { id: Math.random(), firstName: 'James', lastName: 'Sullivan', age: 501 },
  { id: Math.random(), firstName: 'Randall', lastName: 'Boggs', age: 53 },
  { id: Math.random(), firstName: 'Axl', lastName: 'Rose', age: 1000 },
  {
    id: Math.random(),
    firstName: 'Freddy',
    lastName: 'Mercury',
    age: Infinity,
  },
];

export default INITIAL_PEOPLE;
