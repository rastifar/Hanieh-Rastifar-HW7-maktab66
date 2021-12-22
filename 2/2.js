class Media{
    constructor(type){
        this.type = type
    }
}
class Book extends Media{
    constructor(type,bookName,publishYear){
        super(type)
        this.bookName = bookName
        this.publishYear = publishYear
    }
}

class Film extends Media{
    constructor(type,MovieName,genres){
        super(type)
        this.MovieName=MovieName
        this.genres = genres
    }
}

const book = new Book("book","javeScript",1998)
const film = new Film("film","javeScriptMovie","Comedy")

console.log(book)
console.log(film)