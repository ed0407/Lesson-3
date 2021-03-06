class Kerpar2 extends LivingCreature{
    constructor(x, y, index) {
        super(x,y,index);
        this.directions = [];
        this.energy = 15;
        this.acted = false;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(ch) {
        this.getNewCoordinates();
       return super.chooseCell(ch);
        }
        move() {

            if (this.acted == false) {
                var newCell = random(this.chooseCell(0));

                if (newCell) {
                    var newX = newCell[0];
                    var newY = newCell[1];

                    matrix[newY][newX] = matrix[this.y][this.x];
                    matrix[this.y][this.x] = 0;

                    this.x = newX;
                    this.y = newY;
                }
                this.energy--;
                if (this.energy <= 0) {
                    this.die();
                }
                this.acted = true;
            }
        }
    
    eat() {
        if (this.acted == false) {

            var newCell = random(this.chooseCell(3));
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;


                this.x = newX;
                this.y = newY;
                this.acted = true;

            }
            else {
                this.move();
            }
        }
    }
   
    die(){
        matrix[this.y][this.x] = 0;
        var datarkner = this.chooseCell(0);

        for(var i in datarkner){
            var newX = datarkner[i][0];
            var newY = datarkner[i][1];
            matrix[newY][newX] = new Grass (newX,newY,1)
        }       
    }
}
