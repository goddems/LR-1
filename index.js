import { LIBRARY_NAME, books } from "./data.js";
import BookCollection, { getBooksByGenre as byGenre, getAveragePages, getOldestBook } from "./utils.js";

console.log("=== Завдання 5: Модулі ===");
console.log("Бібліотека:", LIBRARY_NAME);

const collection = new BookCollection(books);

console.log("Всього книг:", collection.count);
console.log("Програмування:", byGenre(books, "programming"));
console.log("Середня кількість сторінок:", getAveragePages(books));
console.log("Найстаріша книга:", getOldestBook(books));
console.log("Відсортовані:", collection.getSortedByYear());
