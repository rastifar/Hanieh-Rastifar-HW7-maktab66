class Media{
    constructor(type){
        this.type = type
    }
}
class Book extends Media{
    constructor(type,bookname){
        super(type)
        this.bookname = bookname
    }
}

class Film extends Media{
    constructor(type,Moviename){
        super(type)
        this.Moviename=Moviename
    }
}

const book = new Book("book","javeScript")
const film = new Film("film","javeScriptMovie")

console.log(book)
console.log(film)