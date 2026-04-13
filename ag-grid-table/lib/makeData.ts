import { faker } from "@faker-js/faker";

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: string;
  subRows?: Person[];
}

const range = (len: number) => Array.from({ length: len }, (_, i) => i);

const newPerson = (num: number): Person => {
  return {
    id: num,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.number.int({ max: 40 }),
    visits: faker.number.int({ max: 1000 }),
    progress: faker.number.int({ max: 100 }),
    status: faker.helpers.shuffle([
      "relationship",
      "complicated",
      "single",
    ])[0],
  };
};

export function makeData(...lens: number[]): Person[] {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth];
    return range(len).map((i) => ({
      ...newPerson(i),
      subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
    }));
  };

  return makeDataLevel();
}