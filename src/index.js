const animals = [
  {
    name: "Oscar",
    species: "Dog"
  },
  {
    name: "Max",
    species: "Cat"
  },
  {
    name: "Tiger",
    species: "Cat"
  },
  {
    name: "Sam",
    species: "Dog"
  },
  {
    name: "Ginger",
    species: "Cat"
  },
  {
    name: "Gizmo",
    species: "Dog"
  },
  {
    name: "Billy",
    species: "Cat"
  }
];

const onlyCat = animals.filter((animal) => animal.species === "Cat");
console.log(onlyCat);
