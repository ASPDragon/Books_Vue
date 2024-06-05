const app = Vue.createApp({
    data() {
        return {
            url: 'http://wwww.thenetninja.com.uk',
            showBooks: true,
            books: [
                { title: 'The Name of the wind', author: 'Patrick Rothfuss', img: 'assets/1.jpg', isFav: true },
                { title: 'The way of kings', author: 'Brandon Sanderson', img: 'assets/2.jpg', isFav: false },
                { title: 'The final empire', author: 'Brandon Sanderson', img: 'assets/3.jpg', isFav: true },
            ],
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        toggleFav(book) {
            book.isFav = !book.isFav;
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav);
        }
    }
});

app.mount('#app');