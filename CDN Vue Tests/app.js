const app = Vue.createApp({
    // data, functions
    // template: '<h2>Template</h2>'
    data() {
        return {
            url: 'http://corentinmace.fr/',
            list: true,
            showed: true,
            books : [
                { title: 'Harry Potter and the Goblet of Fire', author: "J.K Rowlings", age: "45", cover: "https://images-na.ssl-images-amazon.com/images/I/51UPokab7LL._SX328_BO1,204,203,200_.jpg", isFav: true },
                { title: 'One Piece #1', author: 'Eiichiro Oda', age: "46", cover: "https://images-na.ssl-images-amazon.com/images/I/913tiXjkVxL.jpg", isFav: false },
                { title: 'One Piece #93', author: 'Eiichiro Oda', age: "46", cover: "https://cdn1.booknode.com/book_cover/1271/mod11/one_piece_tome_93_la_coqueluche_du_village_debisu-1270883-264-432.jpg", isFav: true }

                ],
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle(title) {
          //  this.title = "Something Else"
          this.title = title
        },
        toggleShowBooks() {
            this.showed = !this.showed
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        addToFav(book) {
            book.isFav = !book.isFav
        },
        toggleFav() {
            this.list = !this.list
        }    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
});

app.mount('#app');