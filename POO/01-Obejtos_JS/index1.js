const book = {
    title: "Eragon",
    pages: 468,
    published: true,
    inStock: 20,
    tags: ["fantasy", "adventure", "medieval"],
    author: {
        name: "Christopher Paolini"
    },
    addOnStock(quantity) {
        this.inStock += quantity
    },
    save: function () {
        // Save book data to database
    }
}

console.log(book)

//node index1.js