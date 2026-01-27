class Game {
    constructor(gridRows, gridCols) {
        console.log("new game");

        this.canvas = document.getElementById("jogo");
        this.ctx = this.canvas.getContext("2d");

        console.log(this.canvas);

        this.gridRows = gridRows;
        this.gridCols = gridCols;



        this.setCanvasSize();

    }

    setCanvasSize() {
        const sizeDown = 0.85;
        if (this.gridRows == this.gridCols) {
            this.canvasSize = Math.min(innerWidth, innerHeight) * sizeDown;
            this.canvasWidth = this.canvasSize;
            this.canvasHeight = this.canvasSize;
        }
        if (this.gridRows > this.gridCols) {
            const cellSize = Math.floor(innerHeight / this.gridRows) * sizeDown;
            this.canvasWidth = cellSize * this.gridCols;
            this.canvasHeight = cellSize * this.gridRows;
        }
        if (this.gridRows < this.gridCols) {
            const cellSize = Math.floor(innerWidth / this.gridRows) * sizeDown;
            this.canvasWidth = cellSize * this.gridCols;
            this.canvasHeight = cellSize * this.gridRows;
        }
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;


    }




}

export default Game;
