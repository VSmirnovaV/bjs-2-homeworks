class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix() {
        return this.state = this.state * 1.5;
    }
  
    set state(newState) {
      if (newState < 0) {
        this.state = 0;
      } else if (newState > 100) {
        this.state = 100;
      } else {
        this._state = newState;
      }
    }
    get state() {
      return this._state;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "book";
      this.author = author;
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
    let book = this.books.find(book => book[type] === value);
    if(book != undefined) {
        return book; 
    } else {
        return null;
  }
}
    
    giveBookByName(bookName) {
    let book = this.findBookBy("name", bookName);
        if (book != undefined) {
        this.books.splice(this.books.indexOf(book), 1);
          return book;
        } else {
          return null;
        }
    }
}


const library = new Library("Библиотека им. В.В. Маяковского");

library.addBook(
new DetectiveBook("Майк Омер", "Глазами жертвы", 2021, 416));

library.addBook(
new FantasticBook("Стивен Кинг", "11/22/63", 2011, 849));

library.addBook(
new NovelBook("Герман Гессе", "Демиан", 1919, 75));

library.addBook(
new Magazine("Cosmopolitan", 2023, 75));

library.findBookBy("releaseDate", 1919);
library.giveBookByName("Демиан");

"Демиан".state = 10;
let book = new Book;
book.fix();

library.addBook(
    new NovelBook("Герман Гессе", "Демиан", 1919, 75));