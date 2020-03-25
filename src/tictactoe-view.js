class View {
    constructor(game, $el) {
        this.game = game;
        this.$el = $el;

        this.setupBoard();
        this.bindEvents();
    } 
    bindEvents() {
        //install event handler on the 'li' elements inside the board
        this.$el.on("click", "li", (event => {
            const $square = $(event.currentTarget);
            this.makeMove($square);
        }));
    }

    
}