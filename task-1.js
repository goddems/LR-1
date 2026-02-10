console.log("=== Завдання 1: Деструктуризація та Spread/Rest ===");

// 1.1
function getFullName(user) {
  const { firstName, lastName, middleName = "" } = user;
  const middleInitial = middleName ? ` ${middleName[0]}.` : "";
  return `${lastName} ${firstName[0]}.${middleInitial}`;
}

// 1.2
function mergeObjects(...objects) {
  return objects.reduce((acc, obj) => ({ ...acc, ...obj }), {});
}

// 1.3
function removeDuplicates(...arrays) {
  return [...new Set(arrays.flat())];
}

// 1.4
function createUpdatedUser(user, updates) {
  return {
    ...user,
    ...updates,
    address: {
      ...user.address,
      ...updates.address,
    },
  };
}

// Демонстрація
console.log(
  "1.1:",
  getFullName({
    firstName: "Петро",
    lastName: "Іванов",
    middleName: "Сергійович",
  }),
);

console.log("1.2:", mergeObjects({ a: 1 }, { b: 2 }, { a: 3, c: 4 }));
console.log("1.3:", removeDuplicates([1, 2, 3], [2, 3, 4], [4, 5]));

const user = { name: "John", age: 25, address: { city: "Kyiv", zip: "01001" } };
const updated = createUpdatedUser(user, {
  age: 26,
  address: { zip: "02002" },
});

console.log("1.4:", updated);
console.log("Оригінал:", user);
