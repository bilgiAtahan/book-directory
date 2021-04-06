class Book {
    #isbn
    title
    pageCount
    publishedDate
    thumbnailUrl
    shortDescription
    longDescription
    authors = []
    categories = []

    constructor(isbn, title, pageCount, publishedDate, thumbnailUrl,
        shortDescription, longDescription, authors, categories) {
        this.#isbn = isbn
        this.title = title
        this.pageCount = pageCount
        this.publishedDate = publishedDate
        this.thumbnailUrl = thumbnailUrl
        this.shortDescription = shortDescription
        this.longDescription = longDescription
        this.authors.push(authors)
        this.categories.push(categories)
    }
    get isbn(){
        return this.#isbn
    }
    
}
module.exports=Book