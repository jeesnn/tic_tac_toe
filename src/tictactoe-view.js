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

    setupBoard() {
        const $ul = $("<ul>");

        for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
            for (let colIdx = 0; colIdx < 3; colIdx++) {
                let $li = $("<li>");
                $li.data("pos", [rowIdx, colIdx]);

                $ul.append($li);
            }
        }
        this.$el.append($ul);
    }
}