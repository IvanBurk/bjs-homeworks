class PrintEditionItem {
    constructor (name,releaseDate,pagesCount,state,type) {
      this.state = 100,
      this.type = null,
      this.releaseDate = releaseDate,
      this.pagesCount = pagesCount,
      this.name = name,
      this.fix = function fix() {
            this.state = this.state*1.5;
        } 
    }
    set state(state) {
      if (state > 100) {
        this._state = 100;
      } else if (state < 0) {
        this._state = 0;
      } else {
        this._state = state;
      }
    }
    get state() {
      return this._state;
    }
    };
    class Magazine extends PrintEditionItem {
      constructor(name,releaseDate,pagesCount,state,type) {
        super(name,releaseDate,pagesCount,state)
        this.type = "magazine";
        
      }
    };
    
    class Book extends PrintEditionItem {
      constructor(author,name,releaseDate,pagesCount,state,type) {
        super(name,releaseDate,pagesCount,state)
        this.author = author;
        this.type = "book";  
      }
    };
    
    class NovelBook extends Book {
      constructor(author,name,releaseDate,pagesCount,state,type) {
        super(author,name,releaseDate,pagesCount,state)
        this.type = "novel";  
      }
    };
    
    class FantasticBook extends Book {
      constructor(author,name,releaseDate,pagesCount,state,type) {
        super(author,name,releaseDate,pagesCount,state)
        this.type = "fantastic";  
      }
    };
    
    class DetectiveBook extends Book {
      constructor(author,name,releaseDate,pagesCount,state,type) {
        super(author,name,releaseDate,pagesCount,state)
        this.type = "detective";  
      }
    };

class Library {
  constructor (name,books) {
    this.name = String(name),
    this.books = []
  }
  addBook(book) {
    this.book = book
    if (this.book._state > 30) {
      this.books.push(this.book);
    }
  }
  findBookBy(type,value) {
    
    if (this.type = this.book) {
     return this.book
      } else {
        return null
      }
    }

    giveBookByName(bookName) {
      if (this.bookName === this.books.name) {
        this.books.slice(this.book)
      }
    }
  
};

const test = new Library ("Test");
test.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
test.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
test.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
test.addBook(new Magazine("Мурзилка", 1924, 60));
console.log(test)
console.log(test.findBookBy("name", "Властелин колец")); //null
console.log(test.findBookBy("releaseDate", 1924).name); //"Мурзилка"
test.giveBookByName("Мурзилка")
console.log("Количество книг до выдачи: " + test.books.length); //Количество книг до выдачи: 4
test.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + test.books.length); //Количество книг после выдачи: 3