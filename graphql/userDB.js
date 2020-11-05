const People = [
  {
    id: "1",
    name: "ggy",
    age: 18,
    gender: "remale",
  },
  {
    id: "2",
    name: "ggy1",
    age: 181,
    gender: "remale1",
  },
  {
    id: "3",
    name: "ggy2",
    age: 182,
    gender: "remale2",
  },
  {
    id: "4",
    name: "ggy3",
    age: 183,
    gender: "remale4",
  },
  {
    id: "5",
    name: "ggy5",
    age: 185,
    gender: "remale5",
  },
  {
    id: "6",
    name: "ggy6",
    age: 186,
    gender: "remale6",
  },
];

const getById = (id) => {
  const filteredPeople = People.filter((Person) => Person.id === id);
  return filteredPeople[0];
};

export { People, getById };
