console.log("=== Завдання 3: Класи ===");

class MediaItem {
  static #nextId = 1;
  #id;

  constructor(title, year) {
    this.title = title;
    this.year = year;
    this.#id = MediaItem.#nextId++;
  }

  get id() {
    return this.#id;
  }

  get age() {
    return new Date().getFullYear() - this.year;
  }

  getInfo() {
    return `[${this.id}] ${this.title} (${this.year})`;
  }

  static compare(a, b) {
    return a.year - b.year;
  }
}

class Book extends MediaItem {
  constructor(title, year, author, pages) {
    super(title, year);
    this.author = author;
    this.pages = pages;
  }

  getInfo() {
    return `[${this.id}] ${this.title} — ${this.author} (${this.year}, стор. ${this.pages})`;
  }
}

class Movie extends MediaItem {
  constructor(title, year, director, duration) {
    super(title, year);
    this.director = director;
    this.duration = duration;
  }

  getInfo() {
    return `[${this.id}] ${this.title} — ${this.director} (${this.year}, ${this.duration} хв)`;
  }
}

// Демонстрація
const book1 = new Book("Кобзар", 1840, "Тарас Шевченко", 280);
const book2 = new Book("Clean Code", 2008, "Robert Martin", 464);
const movie1 = new Movie("Тіні забутих предків", 1965, "Сергій Параджанов", 97);

console.log(book1.getInfo());
console.log(movie1.getInfo());
console.log("Вік книги:", book1.age);

const items = [book1, book2, movie1];
const sorted = [...items].sort(MediaItem.compare);
console.log(sorted.map(i => i.getInfo()));
